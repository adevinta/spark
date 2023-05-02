import { VisuallyHidden } from '@spark-ui/visually-hidden'
import React from 'react'

import { iconStyles, IconVariantsProps } from './Icon.styles'

export interface IconProps extends IconVariantsProps, React.SVGProps<SVGElement> {
  /**
   * The svg icon that will be wrapped
   */
  children: React.ReactElement
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label?: string
}

export function Icon({
  label,
  className,
  size = 'current',
  intent = 'current',
  children,
  ...others
}: IconProps) {
  const child = React.Children.only(children)

  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
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
