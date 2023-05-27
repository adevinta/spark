import {
  Children,
  ComponentPropsWithoutRef,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from 'react'

import { Input } from './Input'
import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
import { InputLeftAddon } from './InputLeftAddon'
import { InputRightAddon } from './InputRighAddon'

export interface InputGroupProps extends ComponentPropsWithoutRef<'div'>, InputGroupStylesProps {}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  ({ className, children: childrenProp, intent = 'neutral', ...others }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const children = Children.toArray(childrenProp).filter(isValidElement)
    const input = children.find((child: ReactElement) => child.type === Input)
    const rightAddon = children.find((child: ReactElement) => child.type === InputRightAddon)
    const leftAddon = children.find((child: ReactElement) => child.type === InputLeftAddon)
    const isLeftAddonVisible = !!leftAddon
    const isRightAddonVisible = !!rightAddon

    const value = useMemo(() => {
      const handleFocus = () => {
        setIsFocused(true)
      }

      const handleBlur = () => {
        setIsFocused(false)
      }

      return {
        intent,
        isHovered,
        isFocused,
        isLeftAddonVisible,
        isRightAddonVisible,
        onFocus: handleFocus,
        onBlur: handleBlur,
      }
    }, [intent, isHovered, isFocused, isLeftAddonVisible, isRightAddonVisible])

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
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
          {leftAddon}
          {input}
          {rightAddon}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
