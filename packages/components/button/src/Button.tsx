import { Slot, wrapPolymorphicSlot } from '@spark-ui/slot'
import { Spinner } from '@spark-ui/spinner'
import { cx } from 'class-variance-authority'
import React, { MouseEvent, PropsWithChildren } from 'react'

import { buttonStyles, type ButtonStylesProps } from './Button.styles'

export interface ButtonProps
  extends PropsWithChildren<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>>,
    ButtonStylesProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * Display a spinner to indicate to the user that the button is loading something after they interacted with it.
   */
  isLoading?: boolean
  /**
   * If your loading state should only display a spinner, it's better to specify a label for it (a11y).
   */
  loadingLabel?: string
  /**
   * If your loading state should also display a label, you can use this prop instead of `loadingLabel`.
   * **Please note that using this can result in layout shifting when the Button goes from loading state to normal state.**
   */
  loadingText?: string
  spinnerPlacement?: 'left' | 'right'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      design = 'filled',
      disabled = false,
      intent = 'main',
      isLoading = false,
      loadingLabel,
      loadingText,
      onClick,
      shape = 'rounded',
      size = 'md',
      spinnerPlacement = 'left',
      asChild,
      className,
      ...others
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button'
    const isDisabled = !!disabled || isLoading

    /**
     * When using `asChild` (polymorphic) it's possible that the button becomes another HTML element.
     * Depending on its tag, it could break the `disabled` html attribute preventing the clicks on a disabled button.
     */
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) event.preventDefault()
      if (onClick) onClick(event)
    }

    const spinner = isLoading ? (
      <Spinner
        size="current"
        className={loadingText ? 'inline-block' : 'absolute'}
        {...(loadingLabel && { 'aria-label': loadingLabel })}
      />
    ) : null

    return (
      <Component
        data-spark-component="button"
        ref={ref}
        className={buttonStyles({
          className,
          design,
          disabled: isDisabled,
          intent,
          shape,
          size,
        })}
        disabled={isDisabled}
        aria-live={isLoading ? 'assertive' : 'off'}
        onClick={handleClick}
        {...others}
      >
        {wrapPolymorphicSlot(asChild, children, slotted =>
          isLoading ? (
            <>
              {spinnerPlacement === 'left' && spinner}
              {loadingText && loadingText}
              {spinnerPlacement === 'right' && spinner}
              <div
                aria-hidden
                className={cx('inline-flex gap-md', loadingText ? 'hidden' : 'opacity-0')}
              >
                {slotted}
              </div>
            </>
          ) : (
            slotted
          ),
        )}
      </Component>
    )
  },
)

Button.displayName = 'Button'
