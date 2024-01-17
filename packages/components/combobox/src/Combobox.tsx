import { type ComboboxContextProps, ComboboxProvider } from './ComboboxContext'

export type ComboboxProps = ComboboxContextProps

export const Combobox = ({
  children,
  autoSelect = false,
  disabled = false,
  readOnly = false,
  ...props
}: ComboboxProps) => {
  return (
    <ComboboxProvider autoSelect={autoSelect} disabled={disabled} readOnly={readOnly} {...props}>
      {children}
    </ComboboxProvider>
  )
}

Combobox.displayName = 'Combobox'
