import React from 'react'
import { Sentiment } from '.'
import cn from 'classnames'

interface SentimentButtonProps {
  sentiment: Sentiment
  icon: React.ReactNode
  selected: boolean
  onSelect: (sentiment: Sentiment) => void
}

const SentimentButton: React.FC<SentimentButtonProps> = ({ sentiment, icon, selected, onSelect }) => {
  const handleClick = () => onSelect(sentiment)

  return (
    <button
      onClick={handleClick}
      className={cn(`group/${sentiment.toLowerCase()}`, { selected })}
      aria-label={`Rate as ${sentiment.toLowerCase()}`}
    >
      {icon}
    </button>
  )
}

export default SentimentButton
