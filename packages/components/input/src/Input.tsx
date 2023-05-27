import { ComponentPropsWithoutRef, FocusEvent, forwardRef, PropsWithChildren } from 'react'

import { inputStyles, InputStylesProps } from './Input.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputProps
  extends ComponentPropsWithoutRef<'input'>,
    Omit<InputStylesProps, 'isHovered' | 'isLeftAddonVisible' | 'isRightAddonVisible'> {}

export const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  ({ className, intent = 'neutral', onFocus, onBlur, ...others }, ref) => {
    const group = useInputGroup() || {}
    const {
      isLeftAddonVisible,
      isRightAddonVisible,
      isLeftElementVisible,
      isRightElementVisible,
      isHovered,
    } = group

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(event)
      }

      if (group.onFocus) {
        group.onFocus()
      }
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(event)
      }

      if (group.onBlur) {
        group.onBlur()
      }
    }

    return (
      <input
        ref={ref}
        className={inputStyles({
          className,
          intent,
          isHovered: !!isHovered,
          isLeftAddonVisible: !!isLeftAddonVisible,
          isRightAddonVisible: !!isRightAddonVisible,
          isLeftElementVisible: !!isLeftElementVisible,
          isRightElementVisible: !!isRightElementVisible,
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
