export const Item = ({ children }: { children: string }) => {
  return <option value={children}>{children}</option>
}

Item.id = 'Item'
Item.displayName = 'Select.Item'
