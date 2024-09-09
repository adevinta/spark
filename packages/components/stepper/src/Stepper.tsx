import { Icon } from '@spark-ui/icon'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { InputGroup } from '@spark-ui/input'
import { forwardRef, type PropsWithChildren, useRef } from 'react'

import {
  type StepperButtonProps,
  StepperDecrementButton,
  StepperIncrementButton,
} from './StepperButton'
import { StepperInput } from './StepperInput'
import { useStepper, type UseStepperArgs } from './useStepper'

export interface StepperProps extends Omit<UseStepperArgs, 'inputRef' | 'label' | 'aria-label'> {
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * @default 'fr'
   */
  locale?: string
}

export const Stepper = forwardRef<HTMLDivElement, PropsWithChildren<StepperProps>>(
  (props, forwardedRef) => {
    const inputRef = useRef(null)

    const { groupProps, inputProps, incrementButtonProps, decrementButtonProps } = useStepper({
      ...props,
      inputRef,
    })

    return (
      <div ref={forwardedRef}>
        <InputGroup {...groupProps}>
          {/* 1. DECREMENT BTN */}
          <StepperDecrementButton {...(decrementButtonProps as StepperButtonProps)}>
            <Icon>
              <Minus />
            </Icon>
          </StepperDecrementButton>

          {/* 2. INPUT */}
          <StepperInput {...inputProps} ref={inputRef} />

          {/* 3. INCREMENT BTN */}
          <StepperIncrementButton {...(incrementButtonProps as StepperButtonProps)}>
            <Icon>
              <Plus />
            </Icon>
          </StepperIncrementButton>
        </InputGroup>
      </div>
    )
  }
)

Stepper.displayName = 'Stepper'
