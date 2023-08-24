import { cx } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

import { ItemProvider } from './context'

export function Item({ children }: PropsWithChildren<unknown>) {
  return (
    <ItemProvider>
      {isOpen => (
        <div
          className={cx(
            isOpen ? '[grid-template-rows:auto_1fr]' : '[grid-template-rows:auto_0fr]',
            'grid border-t-outline transition-all duration-250 ease-in',
            '[&:not(:first-child)]:border-t-sm',
          )}
        >
          {children}
        </div>
      )}
    </ItemProvider>
  )
}
