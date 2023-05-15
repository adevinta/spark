import { useButton, useToggleButton } from '@react-aria/button'
import { Slot } from '@spark-ui/slot'
import { useCombinedState } from '@spark-ui/use-combined-state'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import React, { forwardRef, PropsWithChildren, useRef } from 'react'

import { chipStyles, type ChipStylesProps } from './Chip.styles'

export interface ChipProps
  extends PropsWithChildren<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>>,
    ChipStylesProps {
  defaultPressed?: boolean
  pressed?: boolean
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ asChild, design, intent, defaultPressed, pressed, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'div'
    const innerRef = useRef()
    const ref = useMergeRefs(forwardedRef, innerRef)
    const [pressedState, setPressedState] = useCombinedState(pressed, defaultPressed)
    const { toogleButtonProps, isPressed } = useToggleButton(props, pressedState, innerRef)
    const { buttonProps } = useButton(props, ref)
    const { className, disabled } = buttonProps

    return (
      <Component
        data-spark-component="chip"
        ref={ref}
        className={chipStyles({
          className,
          design,
          disabled,
          intent,
          pressed: isPressed,
        })}
        {...(pressedState === undefined ? buttonProps : toogleButtonProps)}
      />
    )
  }
)
