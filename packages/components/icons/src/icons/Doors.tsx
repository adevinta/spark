import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Doors = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Doors"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.61,4.5c.07,0,.13.02.19.06l6.85,4.44c.53.34.85.95.85,1.6v3.74c0,.15-.08.28-.21.34-1.24.6-2.08,1.17-2.54,1.7-.45.53-.93,1.49-1.41,2.89-.05.15-.19.25-.34.25H6.29c-.99,0-1.79-.84-1.79-1.88V6.37c0-1.04.8-1.88,1.79-1.88h5.33Zm-.1.75h-5.23c-.56,0-1.01.45-1.07,1.02v.11s0,11.25,0,11.25c0,.62.48,1.12,1.07,1.12h8.48l.11-.29c.41-1.12.83-1.94,1.26-2.49l.1-.12c.46-.53,1.21-1.07,2.26-1.62l.3-.15v-3.5c0-.35-.16-.68-.42-.89l-.09-.07-6.76-4.38Zm-2.14,7.5c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-2.25,0-2.25,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s2.25,0,2.25,0Zm2.08-6c.07,0,.14.02.19.06l4.34,3c.31.22.51.59.51,1,0,.65-.49,1.19-1.09,1.19H7.11c-.2,0-.36-.18-.36-.4v-2.88c0-1.09.81-1.98,1.81-1.98h2.89Zm-.1.75h-2.77c-.6,0-1.08.54-1.08,1.21v2.54s7.89,0,7.89,0c.18,0,.32-.14.35-.33v-.07c0-.14-.06-.27-.16-.34l-4.23-3.01Z"/>',
      }}
    />
  )
)

Doors.displayName = 'Doors'

export const tags = ['Doors', '']
