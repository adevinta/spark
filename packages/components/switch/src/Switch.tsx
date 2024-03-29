import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { SwitchInput, SwitchInputProps } from './SwitchInput'
import { SwitchLabel } from './SwitchLabel'

export type SwitchProps = SwitchInputProps

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = 'md', children, className, id, disabled, reverse, ...rest }, ref) => {
    const field = useFormFieldControl()

    const innerId = useId(id)
    const innerLabelId = useId()

    const switchLabel = children && (
      <SwitchLabel disabled={disabled} htmlFor={field.id || innerId} id={innerLabelId}>
        {children}
      </SwitchLabel>
    )

    const switchInput = (
      <SwitchInput
        ref={ref}
        size={size}
        id={field.id || innerId}
        disabled={disabled}
        /**
         * If the switch doesn't have any direct label (children) then we should try to
         * get an eventual alternative label from FormField.
         * On last resort, we shouldn't forget to define an aria-label attribute.
         */
        aria-labelledby={children ? innerLabelId : field.labelId}
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
