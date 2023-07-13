import { cx } from 'class-variance-authority'
import { type PropsWithChildren } from 'react'

import { useFAQItemContext } from './context'

export function Answer({ children }: PropsWithChildren<unknown>) {
  const { state } = useFAQItemContext()

  return (
    <dd
      aria-hidden={!state.isOpen}
      className={cx('overflow-hidden', state.isOpen ? 'mb-lg' : 'invisible')}
    >
      {children}
    </dd>
  )
}
