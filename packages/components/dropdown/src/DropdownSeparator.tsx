import { cx } from 'class-variance-authority'

interface SeparatorProps {
  className?: string
}

export const Separator = ({ className }: SeparatorProps) => {
  return <div className={cx('my-md border-b-sm border-outline', className)} />
}

Separator.id = 'Separator'
Separator.displayName = 'Dropdown.Separator'
