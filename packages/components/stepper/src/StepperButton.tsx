import { useButton } from '@react-aria/button'
import { IconButton } from '@spark-ui/icon-button'
import { InputGroup } from '@spark-ui/input'
import { forwardRef, type PropsWithChildren, useRef } from 'react'

import { mapReactSpectrumAttrs, type StepperButtonProps } from './types'

const IncrementButton = forwardRef<HTMLButtonElement, PropsWithChildren<StepperButtonProps>>(
  ({ children, className, ...rest }, forwardedRef) => {
    const innerRef = useRef<HTMLButtonElement>(null)
    const ref = forwardedRef && typeof forwardedRef !== 'function' ? forwardedRef : innerRef

    const { buttonProps } = useButton({ ...mapReactSpectrumAttrs(rest) }, ref)

    return (
      <InputGroup.TrailingAddon id="TrailingAddon" asChild>
        <IconButton
          ref={ref}
          design="ghost"
          intent="neutral"
          className={className}
          aria-label={buttonProps['aria-label'] as string}
          {...buttonProps}
        >
          {children}
        </IconButton>
      </InputGroup.TrailingAddon>
    )
  }
)

const DecrementButton = forwardRef<HTMLButtonElement, PropsWithChildren<StepperButtonProps>>(
  ({ children, className, ...rest }, forwardedRef) => {
    const innerRef = useRef<HTMLButtonElement>(null)
    const ref = forwardedRef && typeof forwardedRef !== 'function' ? forwardedRef : innerRef

    const { buttonProps } = useButton({ ...mapReactSpectrumAttrs(rest) }, ref)

    return (
      <InputGroup.LeadingAddon asChild>
        <IconButton
          ref={ref}
          design="ghost"
          intent="neutral"
          className={className}
          aria-label={buttonProps['aria-label'] as string}
          {...buttonProps}
        >
          {children}
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
