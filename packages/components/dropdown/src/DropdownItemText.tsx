import { cx } from 'class-variance-authority'

export interface ItemProps {
  children: string
}

export const ItemText = ({ children }: ItemProps) => {
  return <span className={cx('inline')}>{children}</span>
}

ItemText.id = 'ItemText'
ItemText.displayName = 'Dropdown.ItemText'
