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
  onChange?: (value: string[]) => void
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
      onChange: onChangeProp,
      children,
      ...others
    },
    ref
  ) => {
    const [value, setValue] = useCombinedState(valueProp, defaultValue)
    const field = useFormFieldState()
    const onChangeRef = useRef(onChangeProp)

    const { id, labelId, description, isInvalid, isRequired } = field
    const name = nameProp ?? field.name

    const current = useMemo(() => {
      const handleChange = (checked: boolean, changed: string) => {
        const values = value || []
        const modified = checked ? [...values, changed] : values.filter(value => value !== changed)

        setValue(modified)

        if (onChangeRef.current) {
          onChangeRef.current(modified)
        }
      }

      return { id, name, value, intent, isInvalid, description, isRequired, onChange: handleChange }
    }, [id, name, value, intent, isInvalid, description, isRequired, setValue])

    useEffect(() => {
      onChangeRef.current = onChangeProp
    }, [onChangeProp])

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
