import { Slot } from '@spark-ui/slot'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { type ComponentPropsWithoutRef, forwardRef } from 'react'

const textLinkStyles = cva(
  ['inline-flex items-center', 'focus-visible:u-ring focus-visible:outline-none'],
  {
    variants: {
      intent: {
        current: 'text-current hover:opacity-dim-1',
        main: 'text-main hover:text-main-hovered',
        support: 'text-support hover:text-support-hovered',
        accent: 'text-accent hover:text-accent-hovered',
        basic: 'text-basic hover:text-basic-hovered',
        success: 'text-success hover:text-success-hovered',
        alert: 'text-alert hover:text-alert-hovered',
        danger: 'text-error hover:text-error-hovered',
        info: 'text-info hover:text-info-hovered',
        neutral: 'text-neutral hover:text-neutral-hovered',
      },
      /** By default, TextLink inherits the current font weight. Use `bold` to highlight it. */
      bold: {
        true: 'font-bold',
      },
      /**
       * Underline is enabled by default.
       * You can remove it, but be careful about a11y, as you should make obvious to users what is a link or not.
       */
      underline: {
        true: 'underline',
        false: 'hover:underline focus:underline',
      },
    },
    defaultVariants: {
      intent: 'current',
      bold: false,
      underline: true,
    },
  }
)

export type StylesProps = VariantProps<typeof textLinkStyles>

export type TextLinkProps = ComponentPropsWithoutRef<'a'> &
  StylesProps & {
    /**
     * Change the component to the HTML tag or custom component of the only child.
     */
    asChild?: boolean
  }

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      asChild = false,
      bold = false,
      children,
      className,
      intent = 'current',
      underline = true,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'a'

    return (
      <Component
        ref={ref}
        className={textLinkStyles({ className, bold, intent, underline })}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
