import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HotelFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="HotelFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m2.95,5.5c-.26,0-.49.09-.68.26-.18.18-.27.4-.27.65v11.18c0,.25.09.47.27.65h0c.18.18.41.26.68.26s.49-.08.68-.26h0c.18-.18.27-.4.27-.65v-1.77h16.21v1.77c0,.25.09.47.27.65h0c.18.18.41.26.68.26s.49-.08.68-.26h0c.18-.18.27-.4.27-.65v-6.93c0-.93-.34-1.73-1.02-2.38-.68-.66-1.51-.99-2.48-.99h-5.8c-.45,0-.84.16-1.16.46-.32.31-.48.68-.48,1.12v5.12H3.89v-7.58c0-.25-.09-.47-.27-.65-.18-.18-.41-.26-.68-.26Z"/><path d="m7.36,8.14c-.73,0-1.35.24-1.86.73-.51.49-.76,1.09-.76,1.79s.25,1.3.76,1.79c.5.49,1.13.73,1.86.73s1.35-.24,1.86-.73c.51-.49.76-1.09.76-1.79s-.25-1.3-.76-1.79c-.5-.49-1.13-.73-1.86-.73Z"/>',
      }}
    />
  )
)

HotelFill.displayName = 'HotelFill'

export const tags = ['HotelFill', '']
