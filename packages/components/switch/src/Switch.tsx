import { useId } from '@radix-ui/react-id'
import { useFormFieldState } from '@spark-ui/form-field'
import { forwardRef } from 'react'

import { Input, type InputProps } from './SwitchInput'
import { Label } from './SwitchLabel'

export type SwitchProps = InputProps

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ value = 'on', size = 'md', children, className, id, disabled, ...rest }, ref) => {
    const { id: controlledInputId, labelId: controlledLabelId } = useFormFieldState()

    const switchId = useId(id)
    const switchLabelId = useId()

    return (
      <div data-spark-component="switch" className="gap-md text-body-1 flex items-center">
        <Input
          ref={ref}
          size={size}
          id={controlledInputId || switchId}
          disabled={disabled}
          /**
           * If the switch doesn't have any direct label (children) then we should try to
           * get an eventual alternative label from FormField.
           * On last resort, we shouldn't forget to define an aria-label attribute.
           */
          {...(children
            ? {
                'aria-labelledby': switchLabelId,
              }
            : {
                'aria-labelledby': controlledLabelId,
              })}
          {...rest}
        />

        {children && (
          <Label
            disabled={disabled}
            htmlFor={controlledInputId || switchId}
            className={className}
            id={switchLabelId}
          >
            {children}
          </Label>
        )}
      </div>
    )
  }
)
