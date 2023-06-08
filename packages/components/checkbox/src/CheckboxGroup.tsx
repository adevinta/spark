import { useFormFieldState } from '@spark-ui/form-field'
import { useCombinedState } from '@spark-ui/use-combined-state'
import { ComponentPropsWithoutRef, forwardRef, useEffect, useMemo, useRef } from 'react'

import { checkboxGroupStyles, CheckboxGroupStylesProps } from './CheckboxGroup.styles'
import { CheckboxGroupContext, CheckboxGroupContextState } from './CheckboxGroupContext'

export interface CheckboxGroupProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'value' | 'defaultValue' | 'onChange'>,
    CheckboxGroupStylesProps,
    Pick<CheckboxGroupContextState, 'intent' | 'name' | 'value'> {
  /**
   * The initial value of the checkbox group
   */
  defaultValue?: string[]
  /**
   * The callback fired when any children Checkbox is checked or unchecked
   */
  onCheckedChange?: (value: string[]) => void
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      name: nameProp,
      value: valueProp,
      defaultValue,
      className,
      intent,
      orientation = 'vertical',
      onCheckedChange: onCheckedChangeProp,
      children,
      ...others
    },
    ref
  ) => {
    const [value, setValue] = useCombinedState(valueProp, defaultValue)
    const field = useFormFieldState()
    const onCheckedChangeRef = useRef(onCheckedChangeProp)

    const { id, labelId, description, isInvalid, isRequired } = field
    const name = nameProp ?? field.name

    const current = useMemo(() => {
      const handleCheckedChange = (checked: boolean, changed: string) => {
        const values = value || []
        const modified = checked ? [...values, changed] : values.filter(val => val !== changed)

        setValue(modified)

        if (onCheckedChangeRef.current) {
          onCheckedChangeRef.current(modified)
        }
      }

      return {
        id,
        name,
        value,
        intent,
        isInvalid,
        description,
        isRequired,
        onCheckedChange: handleCheckedChange,
      }
    }, [id, name, value, intent, isInvalid, description, isRequired, setValue])

    useEffect(() => {
      onCheckedChangeRef.current = onCheckedChangeProp
    }, [onCheckedChangeProp])

    return (
      <CheckboxGroupContext.Provider value={current}>
        <div
          ref={ref}
          className={checkboxGroupStyles({ className, orientation })}
          role="group"
          aria-labelledby={labelId}
          aria-describedby={description}
          {...others}
        >
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    )
  }
)

CheckboxGroup.displayName = 'CheckboxGroup'
