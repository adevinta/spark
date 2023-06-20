import {
  Children,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from 'react'

import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
export interface InputGroupProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputGroupStylesProps, 'isFocused'> {
  isDisabled?: boolean
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  ({ className, children: childrenProp, intent = 'neutral', isDisabled, ...others }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const children = Children.toArray(childrenProp).filter(isValidElement)

    const getDisplayName = (element?: ReactElement) => {
      return element ? (element.type as FC).displayName : ''
    }

    const findElement = (values: string[]) => {
      return children.find(child => values.includes(getDisplayName(child) || ''))
    }

    const input = findElement(['Input', 'TextField'])
    const left = findElement(['InputGroup.LeftAddon', 'InputGroup.LeftElement'])
    const right = findElement(['InputGroup.RightAddon', 'InputGroup.RightElement'])
    const isLeftAddonVisible = getDisplayName(left) === 'InputGroup.LeftAddon'
    const isRightAddonVisible = getDisplayName(right) === 'InputGroup.RightAddon'
    const isLeftElementVisible = getDisplayName(left) === 'InputGroup.LeftElement'
    const isRightElementVisible = getDisplayName(right) === 'InputGroup.RightElement'

    const context = useMemo(() => {
      const handleFocus = () => {
        setIsFocused(true)
      }

      const handleBlur = () => {
        setIsHovered(false)
        setIsFocused(false)
      }

      const handleMouseEnter = () => {
        setIsHovered(true)
      }

      const handleMouseLeave = () => {
        setIsHovered(false)
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
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
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

    return (
      <InputGroupContext.Provider value={context}>
        <div
          ref={ref}
          className={inputGroupStyles({
            className,
            intent,
            isFocused,
          })}
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
