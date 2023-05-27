import { cx } from 'class-variance-authority'
import { forwardRef, PropsWithChildren } from 'react'

import { InputElement, InputElementProps } from './InputElement'

export type InputRightElementProps = InputElementProps

export const InputRightElement = forwardRef<
  HTMLDivElement,
  PropsWithChildren<InputRightElementProps>
>(({ className, ...others }, ref) => {
  return <InputElement ref={ref} className={cx(className, 'right-lg')} {...others} />
})

InputRightElement.displayName = 'InputRightElement'
