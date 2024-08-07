import { cva } from 'class-variance-authority'
import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, PropsWithChildren, Ref } from 'react'

import { useSelectContext } from './SelectContext'

export const styles = cva(
  [
    'absolute left-none top-none size-full rounded-lg opacity-0',
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
        true: 'cursor-default',
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

export const Items = forwardRef(
  (
    { children, className, ...rest }: PropsWithChildren<ComponentPropsWithoutRef<'select'>>,
    ref: Ref<HTMLSelectElement>
  ) => {
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
      fieldId,
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
        ref={ref}
        disabled={disabled || readOnly}
        name={name}
        required={required}
        aria-labelledby={fieldLabelId}
        {...(ariaLabel && { 'aria-label': ariaLabel })}
        className={styles({ className, state, disabled, readOnly })}
        value={selectedItem?.value || ''}
        onChange={handleChange}
        id={fieldId}
        {...rest}
      >
        {children}
      </select>
    )
  }
)

Items.displayName = 'Select.Items'
