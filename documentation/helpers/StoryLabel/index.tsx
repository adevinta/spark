import { cx } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

interface StoryLabelProps {
  className?: string
}

export const StoryLabel = ({ children, className }: PropsWithChildren<StoryLabelProps>) => (
  <p
    className={cx(
      'px-md text-caption bg-info-container text-on-info-container mb-md last:mb-none flex w-fit rounded-sm font-bold leading-6',
      className
    )}
  >
    {children}
  </p>
)
