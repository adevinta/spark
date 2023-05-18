import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Minus = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.9999C2 11.379 2.44772 10.8756 3 10.8756H21C21.5523 10.8756 22 11.379 22 11.9999C22 12.6208 21.5523 13.1242 21 13.1242H3C2.44772 13.1242 2 12.6208 2 11.9999Z"/>',
      }}
    />
  )
)

Minus.displayName = 'Minus'

export const tags = ['Minus', '']
