import { cx } from 'class-variance-authority'

interface DividerProps {
  className?: string
}

export const Divider = ({ className }: DividerProps) => {
  return <div className={cx('my-md border-b-sm border-outline', className)} />
}

Divider.id = 'Divider'
Divider.displayName = 'Dropdown.Divider'
