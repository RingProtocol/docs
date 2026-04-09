import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from '@docusaurus/router'

interface CopyToAIProps {
  className?: string
}

const CopyToAI: React.FC<CopyToAIProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [question, setQuestion] = useState('')
  const location = useLocation()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const closePanel = useCallback(() => {
    setIsOpen(false)
    setQuestion('')
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    setTimeout(() => inputRef.current?.focus(), 50)
    const onClickOutside = (e: MouseEvent) => {
      if (panelRef.current?.contains(e.target as Node) || buttonRef.current?.contains(e.target as Node)) {
        return
      }
      closePanel()
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [isOpen, closePanel])

  const getCurrentPageContent = (): string => {
    const contentElement = document.querySelector('.markdown') || document.querySelector('main')
    if (!contentElement) {
      return 'Content not available'
    }
    const textContent = contentElement.textContent || ''
    const cleanedContent = textContent.replace(/\s+/g, ' ').replace(/\n+/g, '\n').trim()
    const pageUrl = `https://docs.ring.exchange${location.pathname}`
    const pageTitle = document.title || 'Ring Documentation'
    return `# ${pageTitle}\n\nSource: ${pageUrl}\n\n${cleanedContent}`
  }

  const buildPrompt = (): string => {
    const content = getCurrentPageContent()
    const userQ = question.trim()
    if (userQ) {
      return `${userQ}\n\n---\n\nHere is the relevant Ring Protocol documentation for context:\n\n${content}`
    }
    return `Please help me understand this Ring Protocol documentation and answer any questions I have about it.\n\n${content}`
  }

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(buildPrompt())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
    }
  }

  const handleChatGPT = () => {
    const prompt = buildPrompt()
    const chatGPTUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`
    window.open(chatGPTUrl, '_blank')
    closePanel()
  }

  const handleClaude = async () => {
    try {
      await navigator.clipboard.writeText(buildPrompt())
      window.open('https://claude.ai/new', '_blank')
      closePanel()
    } catch (err) {
      console.error('Failed to copy for Claude:', err)
      window.open('https://claude.ai/new', '_blank')
      closePanel()
    }
  }

  const getPanelPosition = (): React.CSSProperties => {
    if (!buttonRef.current) {
      return {}
    }
    const rect = buttonRef.current.getBoundingClientRect()
    const panelWidth = 320
    const spaceBelow = window.innerHeight - rect.bottom
    const openUpward = spaceBelow < 340

    return {
      position: 'fixed',
      ...(openUpward ? { bottom: window.innerHeight - rect.top + 4 } : { top: rect.bottom + 4 }),
      right: Math.max(8, window.innerWidth - rect.right),
      width: panelWidth,
      zIndex: 9999,
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleChatGPT()
    }
    if (e.key === 'Escape') {
      closePanel()
    }
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
        aria-label="Ask AI about this page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Ask AI
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          style={getPanelPosition()}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl"
        >
          <div className="p-3">
            <textarea
              ref={inputRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about this page..."
              rows={3}
              className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
            />
            <p className="mt-1.5 text-[11px] text-gray-400 dark:text-gray-500">
              Page context is included automatically. ⌘+Enter to send to ChatGPT.
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-600 py-1">
            <button
              onClick={handleChatGPT}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.283 2.9 5.952 5.952 0 0 0 3.224.009 6.065 6.065 0 0 0 9.274-2.168 5.963 5.963 0 0 0 4.006-2.904 6.078 6.078 0 0 0-.75-7.094Zm-9.022 12.281a5.963 5.963 0 0 1-2.573-.057 5.006 5.006 0 0 1-1.813.613 5.986 5.986 0 0 1-4.823-1.272 4.987 4.987 0 0 1-.425-4.1 4.983 4.983 0 0 1-1.135-1.813 5.963 5.963 0 0 1 .632-4.823 4.983 4.983 0 0 1 3.336-.812 4.987 4.987 0 0 1 1.813-1.126 5.963 5.963 0 0 1 4.823.632 4.983 4.983 0 0 1 1.812 1.126 4.987 4.987 0 0 1 1.135 1.813 5.963 5.963 0 0 1-.632 4.823 4.983 4.983 0 0 1-3.336.812 4.987 4.987 0 0 1-1.813 1.126Z" />
              </svg>
              Ask ChatGPT
            </button>
            <button
              onClick={handleClaude}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9-7.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z" />
              </svg>
              Ask Claude
              <span className="ml-auto text-[11px] text-gray-400 dark:text-gray-500">clipboard</span>
            </button>
            <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>
            <button
              onClick={handleCopyToClipboard}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {copied ? 'Copied!' : 'Copy content'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CopyToAI
