import { useFormFieldControl } from '@spark-ui/form-field'
import { cx } from 'class-variance-authority'
import { forwardRef, useId } from 'react'

import { SwitchInput, SwitchInputProps } from './SwitchInput'
import { SwitchLabel } from './SwitchLabel'

export type SwitchProps = SwitchInputProps

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = 'md', children, className, id, disabled, reverse = false, ...rest }, ref) => {
    const field = useFormFieldControl()

    const LabelID = useId()
    const innerID = useId()
    const fieldID = field.id || id || innerID

    const switchLabel = children && (
      <SwitchLabel disabled={disabled} htmlFor={fieldID} id={LabelID}>
        {children}
      </SwitchLabel>
    )

    const switchInput = (
      <SwitchInput
        ref={ref}
        size={size}
        id={fieldID}
        disabled={disabled}
        /**
         * If the switch doesn't have any direct label (children) then we should try to
         * get an eventual alternative label from FormField.
         * On last resort, we shouldn't forget to define an aria-label attribute.
         */
        aria-labelledby={children ? LabelID : field.labelId}
        {...rest}
      />
    )

    const content = reverse ? (
      <>
        {switchLabel}
        {switchInput}
      </>
    ) : (
      <>
        {switchInput}
        {switchLabel}
      </>
    )

    return (
      <div
        data-spark-component="switch"
        className={cx('flex items-center gap-md text-body-1', className)}
      >
        {content}
      </div>
    )
  }
)

Switch.displayName = 'Switch'
