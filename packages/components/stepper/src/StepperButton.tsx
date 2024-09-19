import { useButton } from '@react-aria/button'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { InputGroup } from '@spark-ui/input'
import { forwardRef, type PropsWithChildren, useRef } from 'react'

import { useStepperContext } from './Stepper'
import type { StepperButtonProps } from './types'

const IncrementButton = forwardRef<HTMLButtonElement, PropsWithChildren<StepperButtonProps>>(
  ({ children, design = 'ghost', intent = 'neutral', className, ...rest }, forwardedRef) => {
    const innerRef = useRef<HTMLButtonElement>(null)
    const ref = forwardedRef && typeof forwardedRef !== 'function' ? forwardedRef : innerRef

    const { incrementButtonProps } = useStepperContext()
    const { buttonProps } = useButton({ ...incrementButtonProps, ...rest }, ref)

    return (
      <InputGroup.TrailingAddon asChild>
        <IconButton
          ref={ref}
          design={design}
          intent={intent}
          className={className}
          aria-label={buttonProps['aria-label'] as string}
          {...buttonProps}
        >
          {children || (
            <Icon>
              <Plus />
            </Icon>
          )}
        </IconButton>
      </InputGroup.TrailingAddon>
    )
  }
)

const DecrementButton = forwardRef<HTMLButtonElement, PropsWithChildren<StepperButtonProps>>(
  ({ children, design = 'ghost', intent = 'neutral', className, ...rest }, forwardedRef) => {
    const innerRef = useRef<HTMLButtonElement>(null)
    const ref = forwardedRef && typeof forwardedRef !== 'function' ? forwardedRef : innerRef

    const { decrementButtonProps } = useStepperContext()
    const { buttonProps } = useButton({ ...decrementButtonProps, ...rest }, ref)

    return (
      <InputGroup.LeadingAddon asChild>
        <IconButton
          ref={ref}
          design={design}
          intent={intent}
          className={className}
          aria-label={buttonProps['aria-label'] as string}
          {...buttonProps}
        >
          {children || (
            <Icon>
              <Minus />
            </Icon>
          )}
        </IconButton>
      </InputGroup.LeadingAddon>
    )
  }
)

export const StepperIncrementButton = Object.assign(IncrementButton, {
  id: 'TrailingAddon',
})

export const StepperDecrementButton = Object.assign(DecrementButton, {
  id: 'LeadingAddon',
})

StepperIncrementButton.displayName = 'Stepper.DecrementButton'
StepperDecrementButton.displayName = 'Stepper.DecrementButton'
