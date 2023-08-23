import { Slot, wrapPolymorphicSlot } from '@spark-ui/slot'
import { Spinner, type SpinnerProps } from '@spark-ui/spinner'
import { cx } from 'class-variance-authority'
import React, { type PropsWithChildren, useEffect, useRef } from 'react'

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
      shape = 'rounded',
      size = 'md',
      spinnerPlacement = 'left',
      asChild,
      className,
      ...others
    },
    ref,
  ) => {
    const innerRef = useRef(null)
    const buttonRef = ref || innerRef

    const Component = asChild ? Slot : 'button'

    const shouldNotInteract = !!disabled || isLoading

    useEffect(() => {
      /*
       * While button is loading, we want to block interactions just as `disabled` HTML attribute would do,
       * but still preserving focus interactions.
       * For this reason we kind of recreate the disabled events blockage, but with some specifics.
       */
      if (typeof buttonRef === 'function' || !buttonRef?.current) return

      const buttonElement = buttonRef.current

      const blockEvent: EventListener = event => {
        event.preventDefault()
        event.stopPropagation()
      }

      const blockedEvents: (keyof GlobalEventHandlersEventMap)[] = [
        'click',
        'mousedown',
        'mouseup',
        'mouseenter',
        'mouseleave',
        'mouseover',
        'mouseout',
        'keydown',
        'keypress',
        'keyup',
        'submit',
      ]

      if (shouldNotInteract) {
        blockedEvents.forEach(eventName => buttonElement.addEventListener(eventName, blockEvent))
      } else {
        blockedEvents.forEach(eventName => buttonElement.removeEventListener(eventName, blockEvent))
      }

      return () => {
        blockedEvents.forEach(eventName => buttonElement.removeEventListener(eventName, blockEvent))
      }
    }, [shouldNotInteract, buttonRef])

    const spinnerProps = {
      size: 'current' as SpinnerProps['size'],
      className: loadingText ? 'inline-block' : 'absolute',
      ...(loadingLabel && { 'aria-label': loadingLabel }),
    }

    return (
      <Component
        data-spark-component="button"
        ref={buttonRef}
        className={buttonStyles({
          className,
          design,
          disabled: shouldNotInteract,
          intent,
          shape,
          size,
        })}
        disabled={!!disabled}
        aria-busy={isLoading}
        aria-live={isLoading ? 'assertive' : 'off'}
        {...others}
      >
        {wrapPolymorphicSlot(asChild, children, slotted =>
          isLoading ? (
            <>
              {spinnerPlacement === 'left' && <Spinner {...spinnerProps} />}
              {loadingText && loadingText}
              {spinnerPlacement === 'right' && <Spinner {...spinnerProps} />}

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
