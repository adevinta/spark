import { Icon } from '@spark-ui/icon'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { InputGroup } from '@spark-ui/input'
import { forwardRef, type PropsWithChildren, useRef } from 'react'

import { StepperDecrementButton, StepperIncrementButton } from './StepperButton'
import { StepperInput } from './StepperInput'
import type { StepperButtonProps, StepperProps } from './types'
import { useStepper } from './useStepper'

export const Stepper = forwardRef<HTMLDivElement, PropsWithChildren<StepperProps>>(
  ({ ...stepperProps }, forwardedRef) => {
    const inputRef = useRef(null)

    const { groupProps, inputProps, incrementButtonProps, decrementButtonProps } = useStepper({
      ...stepperProps,
      inputRef,
    })

    return (
      <InputGroup {...stepperProps} {...groupProps} ref={forwardedRef}>
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
    )
  }
)

Stepper.displayName = 'Stepper'
