import { useId } from '@radix-ui/react-id'
import { useFormFieldState } from '@spark-ui/form-field'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { Input, type InputProps } from './SwitchInput'
import { Label } from './SwitchLabel'

export type SwitchProps = InputProps

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ value = 'on', size = 'md', children, className, id, disabled, ...rest }, ref) => {
    const field = useFormFieldState()

    const innerId = useId(id)
    const innerLabelId = useId()

    return (
      <div
        data-spark-component="switch"
        className={cx('gap-md text-body-1 flex items-center', className)}
      >
        <Input
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

        {children && (
          <Label disabled={disabled} htmlFor={field.id || innerId} id={innerLabelId}>
            {children}
          </Label>
        )}
      </div>
    )
  }
)
