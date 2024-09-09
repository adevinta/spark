import { type AriaButtonOptions, useButton } from '@react-aria/button'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { InputGroup } from '@spark-ui/input'
import { forwardRef, type PropsWithChildren, useRef } from 'react'

export type StepperButtonProps = IconButtonProps &
  Omit<
    AriaButtonOptions<'button'>,
    'href' | 'target' | 'elementType' | 'isDisabled' | 'excludeFromTabOrder' | 'aria-label'
  >

const IncrementButton = forwardRef<HTMLButtonElement, PropsWithChildren<StepperButtonProps>>(
  ({ children, className, ...rest }, forwardedRef) => {
    const innerRef = useRef<HTMLButtonElement>(null)
    const ref = forwardedRef && typeof forwardedRef !== 'function' ? forwardedRef : innerRef

    const { buttonProps } = useButton({ ...rest, isDisabled: rest.disabled ?? undefined }, ref)

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

    const { buttonProps } = useButton({ ...rest, isDisabled: rest.disabled ?? undefined }, ref)

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
