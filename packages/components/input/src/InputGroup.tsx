/* eslint-disable complexity */
import { useFormFieldControl } from '@spark-ui/form-field'
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
  status?: InputContainerProps['status']
  isDisabled?: boolean
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  (
    { className, children: childrenProp, status: statusProp = 'neutral', isDisabled, ...others },
    ref
  ) => {
    const { state } = useFormFieldControl()
    const children = Children.toArray(childrenProp).filter(isValidElement)
    const status = state ?? statusProp

    const getDisplayName = (element?: ReactElement) => {
      return element ? (element.type as FC).displayName : ''
    }

    const findElement = (...values: string[]) => {
      return children.find(child => values.includes(getDisplayName(child) || ''))
    }

    const input = findElement('Input', 'TextField', 'Textarea')
    const statusIndicator = findElement('InputGroup.StatusIndicator')
    const left = findElement('InputGroup.LeftAddon', 'InputGroup.LeftElement')
    const right = findElement('InputGroup.RightAddon', 'InputGroup.RightElement')
    const isLeftAddonVisible = getDisplayName(left) === 'InputGroup.LeftAddon'
    const isRightAddonVisible = getDisplayName(right) === 'InputGroup.RightAddon'
    const isLeftElementVisible = getDisplayName(left) === 'InputGroup.LeftElement'
    const isRightElementVisible = getDisplayName(right) === 'InputGroup.RightElement'
    const isInput = getDisplayName(input) !== 'TextField'

    const value = useMemo(() => {
      return {
        status,
        isDisabled: !!isDisabled,
        isLeftElementVisible,
        isRightElementVisible,
        isLeftAddonVisible,
        isRightAddonVisible,
      }
    }, [
      status,
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
              {input}

              <InputContainer status={status} />

              {isLeftElementVisible && left}
              {isRightElementVisible && right}
            </>
          ) : (
            cloneElement(input as ReactElement, {
              elements: (
                <>
                  {isLeftElementVisible && left}
                  {isRightElementVisible && right}
                </>
              ),
            })
          )}

          {statusIndicator}
          {isRightAddonVisible && right}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
