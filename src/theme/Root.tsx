import { useLocation } from '@docusaurus/router'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React, { useEffect } from 'react'

// Add gtag to window object for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: IArguments[]
  }
}

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-QZ13ZBKXMN'

// Default implementation, that you can customize
export default function Root({ children }: React.PropsWithChildren<{ open: boolean }>) {
  const { pathname } = useLocation()

  const { siteConfig } = useDocusaurusContext()

  const nodeEnv = siteConfig.customFields.nodeEnv
  const stagingEnv = Boolean(siteConfig.customFields.stagingEnv)
  const isProductionEnv = !stagingEnv && nodeEnv === 'production'

  // Initialize Google Analytics
  useEffect(() => {
    // Only load GA in production environment
    if (isProductionEnv && !window.gtag) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `

      document.head.appendChild(script1)
      document.head.appendChild(script2)

      // Make gtag available globally
      window.gtag = function () {
        window.dataLayer.push(arguments)
      }
    }
  }, [isProductionEnv])

  // Fires on route change
  useEffect(() => {
    if (window.gtag && isProductionEnv) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, isProductionEnv])

  return <>{children}</>
}
