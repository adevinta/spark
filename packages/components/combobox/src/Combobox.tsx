import { type ComboboxContextProps, ComboboxProvider } from './ComboboxContext'

export type ComboboxProps = ComboboxContextProps

export const Combobox = ({
  children,
  autoFilter = false,
  disabled = false,
  readOnly = false,
  ...props
}: ComboboxProps) => {
  return (
    <ComboboxProvider autoFilter={autoFilter} disabled={disabled} readOnly={readOnly} {...props}>
      {children}
    </ComboboxProvider>
  )
}

Combobox.displayName = 'Combobox'
