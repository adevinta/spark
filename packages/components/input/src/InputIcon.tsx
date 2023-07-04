import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type InputElementProps = ComponentPropsWithoutRef<'div'>

const InputIcon = forwardRef<HTMLDivElement, PropsWithChildren<InputElementProps>>(
  ({ className, children, ...others }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          'pointer-events-none absolute top-1/2 -translate-y-1/2 text-neutral peer-focus:text-outline-high',
          className
        )}
        {...others}
      >
        {children}
      </div>
    )
  }
)

InputIcon.displayName = 'InputIcon'

export type InputLeadingIconProps = InputElementProps

export const InputLeadingIcon = forwardRef<
  HTMLDivElement,
  PropsWithChildren<InputLeadingIconProps>
>(({ className, ...others }, ref) => (
  <InputIcon ref={ref} className={cx(className, 'left-lg')} {...others} />
))

InputLeadingIcon.displayName = 'InputLeadingIcon'

export type InputTrailingIconProps = InputElementProps

export const InputTrailingIcon = forwardRef<
  HTMLDivElement,
  PropsWithChildren<InputTrailingIconProps>
>(({ className, ...others }, ref) => (
  <InputIcon ref={ref} className={cx(className, 'right-lg')} {...others} />
))

InputTrailingIcon.displayName = 'InputTrailingIcon'
