import { cva, cx } from 'class-variance-authority'
import { useEffect, useState } from 'react'

import { useActiveAnchor } from './useActiveAnchor'
import { scrollToAnchor, updateUrlAnchor } from './utils'

const itemStyle = cva(['block', 'py-sm', ['hover:bg-primary-container-hovered']], {
  variants: {
    active: {
      true: ['text-primary', 'shadow-[inset_2px_0px_0px]'],
      false: ['text-on-surface'],
    },
    tagName: {
      H2: 'pl-md text-body-1',
      H3: "pl-[calc(theme('spacing.xl')*1)] text-body-2",
      H4: "pl-[calc(theme('spacing.xl')*2)] text-caption",
    },
  },
})

export const ToC = () => {
  const [headings, setHeadings] = useState(null)

  useEffect(() => {
    setHeadings(document.querySelectorAll('h2, h3'))
  }, [])

  const activeAnchor = useActiveAnchor(headings)

  return headings ? (
    <div
      className={cx('sb-unstyled', [
        ['flex', 'flex-col', 'shrink-0', 'grow-0', 'basis-[250px]'],
        ['hidden', 'lg:block'],
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
      {[...headings].map(({ tagName, id, textContent }) => {
        return (
          <a
            href={`#${id}`}
            key={id}
            onClick={e => {
              e.preventDefault()
              scrollToAnchor(id)
              updateUrlAnchor(id)
            }}
            className={itemStyle({ active: id === activeAnchor, tagName })}
          >
            {textContent}
          </a>
        )
      })}
    </div>
  ) : null
}
