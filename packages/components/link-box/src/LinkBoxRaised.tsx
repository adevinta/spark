import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

export interface LinkBoxRaisedProps {
  className?: string
  children: ReactNode
}

export const LinkBoxRaised = ({ className, ...props }: LinkBoxRaisedProps) => {
  return <Slot className={cx('relative z-raised', className)} {...props} />
}

LinkBoxRaised.displayName = 'LinkBox.Raised'
