import { cva, type VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

export type TextLinkProps = React.HTMLProps<HTMLAnchorElement> & StylesProps

const textLinkStyles = cva(
  [
    'inline-flex gap-sm items-center font-bold',
    'focus-visible:ring-2 focus-visible:ring-outline-high focus-visible:outline-none',
  ],
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
      underline: {
        true: 'underline',
        false: 'hover:underline focus:underline',
      },
    },
    defaultVariants: {
      intent: 'current',
      underline: true,
    },
  }
)

export type StylesProps = VariantProps<typeof textLinkStyles>

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, className, intent = 'current', underline = true, ...props }, ref) => {
    return (
      <a className={textLinkStyles({ className, intent, underline })} ref={ref} {...props}>
        {children}
      </a>
    )
  }
)
