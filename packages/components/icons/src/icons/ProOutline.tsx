import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ProOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ProOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m15.61,6.57h-.95v-1.72c0-.31-.25-.56-.56-.56h-1.34v-1.72c0-.31-.26-.57-.57-.57h-.39c-.32,0-.57.26-.57.57v1.72h-1.34c-.31,0-.56.25-.56.56v1.72h-.95c-.32,0-.57.26-.57.57v14.85h8.39V7.14c0-.32-.26-.57-.57-.57Zm-1.25,2.76h-4.74c-.26,0-.47-.21-.47-.47s.21-.47.47-.47h4.74c.26,0,.47.21.47.47s-.21.47-.47.47Zm0,2.29h-4.74c-.26,0-.47-.21-.47-.47s.21-.47.47-.47h4.74c.26,0,.47.21.47.47s-.21.47-.47.47Zm0,2.29h-4.74c-.26,0-.47-.21-.47-.47s.21-.47.47-.47h4.74c.26,0,.47.21.47.47s-.21.47-.47.47Zm0,2.29h-4.74c-.26,0-.47-.21-.47-.47s.21-.47.47-.47h4.74c.26,0,.47.21.47.47s-.21.47-.47.47Zm0,2.29h-4.74c-.26,0-.47-.21-.47-.47s.21-.47.47-.47h4.74c.26,0,.47.21.47.47s-.21.47-.47.47Z"/><path d="m6.46,9.78h-1.18v-.92c0-.31-.26-.57-.57-.57h-.39c-.31,0-.57.25-.57.57v.92h-1.18c-.31,0-.57.26-.57.57v11.08c0,.32.26.57.57.57h3.89c.31,0,.57-.26.57-.57v-11.08c0-.32-.26-.57-.57-.57Zm13.78,0h1.18c.31,0,.57.26.57.57v11.08c0,.32-.26.57-.57.57h-3.89c-.32,0-.57-.26-.57-.57v-11.08c0-.32.26-.57.57-.57h1.18v-.92c0-.31.26-.57.57-.57h.39c.32,0,.57.25.57.57v.92Z"/>',
      }}
    />
  )
)

ProOutline.displayName = 'ProOutline'

export const tags = ['ProOutline', '']
