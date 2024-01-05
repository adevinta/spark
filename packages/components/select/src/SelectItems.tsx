import { cva } from 'class-variance-authority'
import { ChangeEvent, ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { useSelectContext } from './SelectContext'

export const styles = cva(
  [
    'absolute left-none top-none h-full w-full rounded-lg opacity-0',
    'min-h-sz-44',
    // outline styles
    'ring-1 outline-none ring-inset focus:ring-2',
  ],
  {
    variants: {
      state: {
        undefined: 'ring-outline focus:ring-outline-high',
        error: 'ring-error',
        alert: 'ring-alert',
        success: 'ring-success',
      },
      disabled: {
        true: 'cursor-not-allowed',
      },
      readOnly: {
        true: 'cursor-not-allowed',
      },
    },
    compoundVariants: [
      {
        disabled: false,
        state: undefined,
        class: 'hover:ring-outline-high',
      },
    ],
  }
)

export const Items = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<'select'>>) => {
  const {
    state,
    disabled,
    readOnly,
    ariaLabel,
    fieldLabelId,
    isControlled,
    onValueChange,
    selectedItem,
    setValue,
    name,
    required,
  } = useSelectContext()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isControlled) {
      event.preventDefault()
      onValueChange?.(event.target.value)
    } else {
      setValue(event.target.value)
    }
  }

  return (
    <select
      data-spark-component="select-items"
      disabled={disabled || readOnly}
      name={name}
      required={required}
      aria-labelledby={fieldLabelId}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      className={styles({ className, state, disabled, readOnly })}
      value={selectedItem?.value}
      onChange={handleChange}
      {...rest}
    >
      {children}
    </select>
  )
}

Items.id = 'Items'
Items.displayName = 'Select.Items'
