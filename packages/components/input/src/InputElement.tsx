import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { useInputGroup } from './InputGroupContext'

export type InputElementProps = ComponentPropsWithoutRef<'div'>

export const InputElement = forwardRef<HTMLDivElement, PropsWithChildren<InputElementProps>>(
  ({ className, ...others }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          className,
          'absolute transform -translate-y-1/2 top-1/2 pointer-events-none text-neutral'
        )}
        {...others}
      />
    )
  }
)

InputElement.displayName = 'InputElement'
