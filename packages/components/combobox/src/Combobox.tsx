import { type ComboboxContextProps, ComboboxProvider } from './ComboboxContext'

export type ComboboxProps = ComboboxContextProps

export const Combobox = ({
  children,
  autoFilter = true,
  disabled = false,
  readOnly = false,
  allowCustomValue = false,
  ...props
}: ComboboxProps) => {
  return (
    <ComboboxProvider
      autoFilter={autoFilter}
      disabled={disabled}
      readOnly={readOnly}
      allowCustomValue={allowCustomValue}
      {...props}
    >
      {children}
    </ComboboxProvider>
  )
}

Combobox.displayName = 'Combobox'
