import { cx } from 'class-variance-authority'

interface LabelProps {
  children: string
  className?: string
}

export const Label = ({ children, className }: LabelProps) => {
  return <div className={cx('px-md py-sm text-body-2 text-neutral', className)}>{children}</div>
}

Label.id = 'Label'
Label.displayName = 'Dropdown.Label'
