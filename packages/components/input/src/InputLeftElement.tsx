import { cx } from 'class-variance-authority'
import { forwardRef, PropsWithChildren } from 'react'

import { InputElement, InputElementProps } from './InputElement'

export type InputLeftElementProps = InputElementProps

export const InputLeftElement = forwardRef<
  HTMLDivElement,
  PropsWithChildren<InputLeftElementProps>
>(({ className, ...others }, ref) => {
  return <InputElement ref={ref} className={cx(className, 'left-lg')} {...others} />
})

InputLeftElement.displayName = 'InputGroup.LeftElement'
