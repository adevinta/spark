import { useFormFieldControl } from '@spark-ui/form-field'
import { cva } from 'class-variance-authority'
import {
  Children,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from 'react'

import { InputGroupContext } from './InputGroupContext'
import { InputStateIndicator } from './InputStateIndicator'
export interface InputGroupProps extends ComponentPropsWithoutRef<'div'> {
  state?: 'error' | 'alert' | 'success'
  disabled?: boolean
}

const styles = cva(['relative inline-flex w-full'], {
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-dim-3',
    },
  },
})

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  ({ className, children: childrenProp, state: stateProp, disabled, ...others }, ref) => {
    const field = useFormFieldControl()
    const children = Children.toArray(childrenProp).filter(isValidElement)
    const state = field.state ?? stateProp

    const getDisplayName = (element?: ReactElement) => {
      return element ? (element.type as FC).displayName : ''
    }

    const findElement = (...values: string[]) => {
      return children.find(child => values.includes(getDisplayName(child) || ''))
    }

    const leadingAddon = findElement('InputGroup.LeadingAddon')
    const leadingIcon = findElement('InputGroup.LeadingIcon')
    const input = findElement('Input', 'Textarea')
    const clearButton = findElement('InputGroup.ClearButton')
    const trailingIcon = state ? <InputStateIndicator /> : findElement('InputGroup.TrailingIcon')
    const trailingAddon = findElement('InputGroup.TrailingAddon')

    const hasLeadingAddon = !!leadingAddon
    const hasTrailingAddon = !!trailingAddon
    const hasLeadingIcon = !!leadingIcon
    const hasTrailingIcon = !!trailingIcon || !!state

    const contextValue = useMemo(() => {
      return {
        state,
        disabled: !!disabled,
        hasLeadingIcon,
        hasTrailingIcon,
        hasLeadingAddon,
        hasTrailingAddon,
        hasClearButton: !!clearButton,
      }
    }, [
      state,
      disabled,
      hasLeadingIcon,
      hasTrailingIcon,
      hasLeadingAddon,
      hasTrailingAddon,
      clearButton,
    ])

    return (
      <InputGroupContext.Provider value={contextValue}>
        <div ref={ref} className={styles({ disabled, className })} {...others}>
          {hasLeadingAddon && leadingAddon}

          <div className="relative w-full">
            {input}
            {leadingIcon}
            <div className="pointer-events-none absolute right-lg top-1/2 flex -translate-y-1/2 items-center gap-md">
              {clearButton}
              {trailingIcon}
            </div>
          </div>

          {hasTrailingAddon && trailingAddon}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
