import {
  Children,
  cloneElement,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from 'react'

import { InputContainer, InputContainerProps } from './InputContainer'
import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
export interface InputGroupProps extends ComponentPropsWithoutRef<'div'>, InputGroupStylesProps {
  intent?: InputContainerProps['intent']
  isDisabled?: boolean
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  ({ className, children: childrenProp, intent = 'neutral', isDisabled, ...others }, ref) => {
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
    const isInput = getDisplayName(input) === 'Input'

    const value = useMemo(() => {
      return {
        isDisabled: !!isDisabled,
        isLeftElementVisible,
        isRightElementVisible,
        isLeftAddonVisible,
        isRightAddonVisible,
      }
    }, [
      isDisabled,
      isLeftElementVisible,
      isRightElementVisible,
      isLeftAddonVisible,
      isRightAddonVisible,
    ])

    return (
      <InputGroupContext.Provider value={value}>
        <div
          ref={ref}
          className={inputGroupStyles({
            className,
          })}
          {...others}
        >
          {isLeftAddonVisible && left}

          {isInput ? (
            <>
              {cloneElement(input as any, { intent: 'unstyled' })}
              <InputContainer intent={intent} />
              {isLeftElementVisible && left}
              {right}
            </>
          ) : (
            cloneElement(input as any, {
              intent,
              children: (
                <>
                  {isLeftElementVisible && left}
                  {right}
                </>
              ),
            })
          )}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
