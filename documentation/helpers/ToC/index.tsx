import { cva, cx } from 'class-variance-authority'
import { useEffect, useState } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'

import { useActiveAnchor } from './useActiveAnchor'
import { scrollToAnchor } from './utils'

const itemStyle = cva(['block', 'py-sm', ['hover:bg-surface']], {
  variants: {
    isActive: {
      true: ['text-main', 'shadow-[inset_4px_0px_0px]'],
      false: ['text-on-surface', 'shadow-[inset_1px_0px_0px_#D1D0D5]'],
    },
    isPassed: {
      true: ['shadow-[inset_4px_0px_0px_#D1D0D5]'],
    },
    tagName: {
      H2: 'pl-lg text-body-1',
      H3: 'pl-[calc(var(--spacing-xl)*1)] text-body-2',
      H4: 'pl-[calc(var(--spacing-xl)*2)] text-caption',
    },
  },
})

export const ToC = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    setHeadings([...(document.querySelectorAll<HTMLHeadingElement>('h2, h3') || [])])
  }, [])

  // scroll to the targeted section based on the URL hash on mount
  useEffect(() => {
    const scrollTarget = headings.find(
      ({ id }) => id === window.top?.location.hash.replace('#', '')
    )

    if (!scrollTarget) return

    setTimeout(() => {
      scrollIntoView(scrollTarget, {
        block: 'start',
        behavior: 'smooth',
      })
    }, 500)
  }, [headings])

  const activeAnchor = useActiveAnchor(headings)
  const activeIndex = headings.findIndex(heading => heading.id === activeAnchor?.id)

  if (!headings?.length) return null

  return (
    <div
      className={cx('sb-unstyled', [
        ['flex', 'flex-col', 'shrink-0', 'grow-0'],
        [
          'sticky',
          'top-none',
          'bottom-none',
          'pt-lg',
          'max-h-[calc(100vh-16px)]',
          'overflow-y-auto',
        ],
      ])}
    >
      {headings.map(({ tagName, id, textContent }, index) => {
        if (tagName !== 'H2' && tagName !== 'H3') return null

        return (
          <a
            href={`#${id}`}
            key={id}
            onClick={e => {
              e.preventDefault()
              scrollToAnchor(id)
              // eslint-disable-next-line no-undef
              parent.location.href = parent.location.href.split('#')[0] + '#' + id
            }}
            className={itemStyle({
              isActive: id === activeAnchor?.id,
              isPassed: index < activeIndex,
              tagName,
            })}
          >
            {textContent}
          </a>
        )
      })}
    </div>
  )
}
