import { cx } from 'class-variance-authority'

export interface ItemTextProps {
  children: string
}

export const ItemText = ({ children }: ItemTextProps) => {
  return <span className={cx('inline')}>{children}</span>
}

ItemText.id = 'ItemText'
ItemText.displayName = 'Dropdown.ItemText'
