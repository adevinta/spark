import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Children, cloneElement, ComponentPropsWithoutRef, ReactNode } from 'react'

import { iconStyles, IconVariantsProps } from './Icon.styles'

export interface IconProps extends IconVariantsProps, ComponentPropsWithoutRef<'svg'> {
  /**
   * The svg icon that will be wrapped
   */
  children: ReactNode
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label?: string
}

export const Icon = ({
  label,
  className,
  size = 'current',
  intent = 'current',
  children,
  ...others
}: IconProps) => {
  const child = Children.only(children)

  return (
    <>
      {cloneElement(child as React.ReactElement, {
        className: iconStyles({ className, size, intent }),
        'data-spark-component': 'icon',
        'aria-hidden': 'true',
        focusable: 'false',
        ...others,
      })}

      {label && <VisuallyHidden>{label}</VisuallyHidden>}
    </>
  )
}

Icon.displayName = 'Icon'
