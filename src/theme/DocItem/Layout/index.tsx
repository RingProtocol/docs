import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import { useWindowSize } from '@docusaurus/theme-common'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import DocItemPaginator from '@theme/DocItem/Paginator'
import DocVersionBanner from '@theme/DocVersionBanner'
import DocVersionBadge from '@theme/DocVersionBadge'
import DocItemFooter from '@theme/DocItem/Footer'
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile'
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop'
import DocItemContent from '@theme/DocItem/Content'
import DocBreadcrumbs from '@theme/DocBreadcrumbs'
import ContentVisibility from '@theme/ContentVisibility'
import EditThisPage from '@theme/EditThisPage'
import type { Props } from '@theme/DocItem/Layout'

import styles from './styles.module.css'
import { Edit } from '@site/src/components/Icons'
import CopyToAI from '@site/src/components/CopyToAI'

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc()
  const windowSize = useWindowSize()

  const hidden = frontMatter.hide_table_of_contents
  const canRender = !hidden && toc.length > 0

  const mobile = canRender ? <DocItemTOCMobile /> : undefined

  const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? <DocItemTOCDesktop /> : undefined

  return {
    hidden,
    mobile,
    desktop,
  }
}

export default function DocItemLayout({ children }: Props): ReactNode {
  const docTOC = useDocTOC()
  const { metadata } = useDoc()
  const { editUrl, description, permalink } = metadata
  const isConceptDoc = permalink?.includes('/concepts/')
  const isReferenceDoc = permalink?.includes('/reference/')
  const docKindLabel = isConceptDoc ? 'Concept guide' : isReferenceDoc ? 'Reference' : 'Documentation'
  const docKindHint = isConceptDoc
    ? 'Explanations, reading order, and protocol context.'
    : isReferenceDoc
      ? 'Interfaces, signatures, parameters, and generated references.'
      : description
  const docBadge = isConceptDoc ? 'Long-form reading' : isReferenceDoc ? 'Lookup friendly' : 'Structured reference'
  const tocBadge = isConceptDoc ? 'Section guide' : 'TOC available'
  return (
    <div
      className={clsx('default-grid gap-gap-large', {
        'doc-layout-concepts': isConceptDoc,
        'doc-layout-reference': isReferenceDoc,
      })}
    >
      <div
        className={clsx(
          'col-span-full',
          {
            'sm:col-span-5': !isConceptDoc,
            'sm:col-span-6': isConceptDoc,
          },
          !docTOC.hidden && styles.docItemCol,
        )}
      >
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={clsx(styles.docItemContainer, 'docArticleShell')}>
          <div
            className={clsx('mb-4 rounded-large border border-light-surface-3 bg-light-surface-2 px-6 py-4 dark:border-dark-surface-3 dark:bg-dark-surface-2 sm:px-8', {
              'docHeaderConcepts': isConceptDoc,
              'docHeaderReference': isReferenceDoc,
            })}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">{docKindLabel}</p>
                {docKindHint ? (
                  <p className="mt-2 body-3 text-light-neutral-2 dark:text-dark-neutral-2">{docKindHint}</p>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-full border border-light-surface-3 bg-light-surface-1 px-3 py-1.5 body-4 text-light-neutral-2 dark:border-dark-surface-3 dark:bg-dark-surface-1 dark:text-dark-neutral-2">
                  {docBadge}
                </div>
                {docTOC.desktop ? (
                  <div className="rounded-full border border-light-surface-3 bg-light-surface-1 px-3 py-1.5 body-4 text-light-neutral-2 dark:border-dark-surface-3 dark:bg-dark-surface-1 dark:text-dark-neutral-2">
                    {tocBadge}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <article
            className={clsx('rounded-large border border-light-surface-3 bg-light-surface-1 px-6 py-8 dark:border-dark-surface-3 dark:bg-dark-surface-1 sm:px-8', {
              'docArticleConcepts': isConceptDoc,
              'docArticleReference': isReferenceDoc,
            })}
          >
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      <div
        className={clsx('col-span-full Toc__container', {
          'sm:col-span-3': !isConceptDoc,
          'sm:col-span-2': isConceptDoc,
        })}
      >
        <div
          className={clsx('rounded-large border border-light-surface-3 bg-light-surface-2 p-5 dark:border-dark-surface-3 dark:bg-dark-surface-2', {
            'docSidePanelConcepts': isConceptDoc,
            'docSidePanelReference': isReferenceDoc,
          })}
        >
          {docTOC.desktop && (
            <div>
              <p className="Toc__title">{isConceptDoc ? 'Reading path' : 'On this page'}</p>
              {docTOC.desktop}
            </div>
          )}

          <div className={clsx(docTOC.desktop ? 'mt-6' : '')}>
            <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">Tools</p>
            <div className="mt-3 rounded-medium border border-light-surface-3 bg-light-surface-1 p-3 dark:border-dark-surface-3 dark:bg-dark-surface-1">
              <CopyToAI className="w-full" />
            </div>
          </div>

          {editUrl && (
            <div className="mt-4 rounded-medium border border-light-surface-3 bg-light-surface-1 px-3 py-3 dark:border-dark-surface-3 dark:bg-dark-surface-1">
              <div className="flex flex-row items-center space-x-1 group/edit-icon">
                <Edit className="Toc__edit-icon h-4 w-4" />
                <EditThisPage editUrl={editUrl} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
