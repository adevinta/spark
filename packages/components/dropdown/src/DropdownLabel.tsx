import { cx } from 'class-variance-authority'

import { useDropdownGroup } from './DropdownItemsGroupContext'

interface LabelProps {
  children: string
  className?: string
}

export const Label = ({ children, className }: LabelProps) => {
  const { labelId } = useDropdownGroup()

  return (
    <div id={labelId} className={cx('px-md py-sm text-body-2 italic text-neutral', className)}>
      {children}
    </div>
  )
}

Label.id = 'Label'
Label.displayName = 'Dropdown.Label'
