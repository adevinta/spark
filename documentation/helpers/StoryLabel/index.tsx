import { cx } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

interface StoryLabelProps {
  className?: string
}

export const StoryLabel = ({ children, className }: PropsWithChildren<StoryLabelProps>) => (
  <p
    className={cx(
      'mb-md flex w-fit rounded-sm bg-info-container px-md text-caption font-bold leading-6 text-on-info-container last:mb-none',
      className,
    )}
  >
    {children}
  </p>
)
