import {
  Children,
  ComponentPropsWithoutRef,
  forwardRef,
  isValidElement,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from 'react'

import { Input } from './Input'
import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
import { InputLeftAddon } from './InputLeftAddon'
import { InputLeftElement } from './InputLeftElement'
import { InputRightAddon } from './InputRightAddon'
import { InputRightElement } from './InputRightElement'
import { TextField } from './TextField'

export interface InputGroupProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputGroupStylesProps, 'isFocused'> {
  isDisabled?: boolean
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  (
    {
      className,
      children: childrenProp,
      intent = 'neutral',
      isDisabled,
      onMouseEnter,
      onMouseLeave,
      ...others
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const children = Children.toArray(childrenProp).filter(isValidElement)
    const input = children.find(
      (child: ReactElement) => child.type === Input || child.type === TextField
    )
    const left = children.find(
      (child: ReactElement) => child.type === InputLeftAddon || child.type === InputLeftElement
    )
    const right = children.find(
      (child: ReactElement) => child.type === InputRightAddon || child.type === InputRightElement
    )
    const isLeftAddonVisible = left?.type === InputLeftAddon
    const isRightAddonVisible = right?.type === InputRightAddon
    const isLeftElementVisible = left?.type === InputLeftElement
    const isRightElementVisible = right?.type === InputRightElement

    const value = useMemo(() => {
      const handleFocus = () => {
        setIsFocused(true)
      }

      const handleBlur = () => {
        setIsFocused(false)
      }

      return {
        intent,
        isDisabled: !!isDisabled,
        isHovered,
        isFocused,
        isLeftElementVisible,
        isRightElementVisible,
        isLeftAddonVisible,
        isRightAddonVisible,
        onFocus: handleFocus,
        onBlur: handleBlur,
      }
    }, [
      intent,
      isDisabled,
      isHovered,
      isFocused,
      isLeftElementVisible,
      isRightElementVisible,
      isLeftAddonVisible,
      isRightAddonVisible,
    ])

    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
      setIsHovered(true)

      if (onMouseEnter) {
        onMouseEnter(event)
      }
    }

    const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
      setIsHovered(false)

      if (onMouseLeave) {
        onMouseLeave(event)
      }
    }

    return (
      <InputGroupContext.Provider value={value}>
        <div
          ref={ref}
          className={inputGroupStyles({
            className,
            intent,
            isFocused,
          })}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...others}
        >
          {left}
          {input}
          {right}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
