import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputElementStyles } from './InputElement.styles'

export type InputElementProps = ComponentPropsWithoutRef<'div'>

export const InputElement = forwardRef<HTMLDivElement, PropsWithChildren<InputElementProps>>(
  ({ className, ...others }, ref) => {
    return <div ref={ref} className={inputElementStyles({ className })} {...others} />
  }
)

InputElement.displayName = 'InputElement'
