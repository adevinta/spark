import { Icon } from '@spark-ui/icon'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { InputGroup } from '@spark-ui/input'
import {
  Children,
  cloneElement,
  type FC,
  forwardRef,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
  useCallback,
  useRef,
} from 'react'

import { StepperDecrementButton, StepperIncrementButton } from './StepperButton'
import { StepperInput } from './StepperInput'
import type { StepperButtonProps, StepperProps } from './types'
import { useStepper } from './useStepper'

export const Stepper = forwardRef<HTMLDivElement, PropsWithChildren<StepperProps>>(
  (
    {
      children,
      formatOptions,
      minValue,
      maxValue,
      incrementAriaLabel,
      decrementAriaLabel,
      ...stepperProps
    },
    forwardedRef
  ) => {
    const inputRef = useRef(null)

    const { groupProps, inputProps, incrementButtonProps, decrementButtonProps } = useStepper({
      ...stepperProps,
      formatOptions,
      minValue,
      maxValue,
      incrementAriaLabel,
      decrementAriaLabel,
      inputRef,
    })

    const findElement = useCallback(
      (elementDisplayName: string): ReactElement | undefined => {
        const childrenArray = Children.toArray(children)

        return childrenArray
          .filter(isValidElement)
          .find(child =>
            (child.type as FC & { displayName?: string }).displayName?.includes(elementDisplayName)
          )
      },
      [children]
    )

    const incrementBtnFromChildren = findElement('Stepper.IncrementButton')
    const decrementBtnFromChildren = findElement('Stepper.DecrementButton')
    const inputFromChildren = findElement('Stepper.Input')

    return (
      <InputGroup {...stepperProps} {...groupProps} ref={forwardedRef}>
        {/* 1. DECREMENT BTN */}
        {renderSubComponent(decrementBtnFromChildren, StepperDecrementButton, {
          ...(decrementButtonProps as StepperButtonProps),
          children: (
            <Icon>
              <Minus />
            </Icon>
          ),
        })}

        {/* 2. INPUT */}
        {renderSubComponent(inputFromChildren, StepperInput, {
          ref: inputRef,
          ...inputProps,
        })}

        {/* 3. INCREMENT BTN */}
        {renderSubComponent(incrementBtnFromChildren, StepperIncrementButton, {
          ...(incrementButtonProps as StepperButtonProps),
          children: (
            <Icon>
              <Plus />
            </Icon>
          ),
        })}
      </InputGroup>
    )
  }
)

Stepper.displayName = 'Stepper'

/**
 * Returns compound item if found in children prop.
 * If not fallbacks to default item.
 */
const renderSubComponent = <P extends object>(
  childItem?: ReactElement<P>,
  defaultItem?: FC<P> | null,
  props?: P
) => {
  if (childItem) {
    return cloneElement(childItem, { ...props, ...childItem.props })
  } else if (defaultItem) {
    const Item = defaultItem

    return <Item {...(props as P)} />
  } else {
    return null
  }
}
