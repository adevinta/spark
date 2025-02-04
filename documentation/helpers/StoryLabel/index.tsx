import { cx } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

interface StoryLabelProps {
  className?: string
}

export const StoryLabel = ({ children, className }: PropsWithChildren<StoryLabelProps>) => (
  <p
    className={cx(
      'mb-md bg-info-container px-md text-caption text-on-info-container last:mb-none leading-xl flex w-fit rounded-sm font-bold',
      className
    )}
  >
    {children}
  </p>
)
