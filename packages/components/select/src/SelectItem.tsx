export const Item = ({ children, value }: { children: string; value: string }) => {
  return <option value={value || children}>{children}</option>
}

Item.id = 'Item'
Item.displayName = 'Select.Item'
