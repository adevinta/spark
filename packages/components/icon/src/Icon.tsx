import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import React, { PropsWithChildren } from 'react'

import { iconVariants, IconVariantsProps } from './Icon.variants'

export interface IconProps
  extends PropsWithChildren,
    IconVariantsProps,
    React.SVGProps<SVGElement> {
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label?: string
}

export function Icon({ label, className, size = 'small', children, ...others }: IconProps) {
  const child = React.Children.only(children)

  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        className: iconVariants({ className, size }),
        'aria-hidden': 'true',
        focusable: 'false',
        ...others,
      })}

      {label && <VisuallyHidden.Root>{label}</VisuallyHidden.Root>}
    </>
  )
}
