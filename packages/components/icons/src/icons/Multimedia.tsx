import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Multimedia = React.forwardRef(
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
          '<path d="M17 0H7C5.34 0 4 1.34 4 3V21C4 22.66 5.34 24 7 24H17C18.66 24 20 22.66 20 21V3C20 1.34 18.66 0 17 0ZM17.6 21C17.6 21.33 17.33 21.6 17 21.6H7C6.67 21.6 6.4 21.33 6.4 21V3C6.4 2.67 6.67 2.4 7 2.4H10.09C10.21 2.75 10.54 3 10.93 3H13.13C13.52 3 13.84 2.75 13.97 2.4H17C17.33 2.4 17.6 2.67 17.6 3V21Z"/><path d="M11.93 19C11.43 19 11.03 19.4 11.03 19.9C11.03 20.4 11.43 20.8 11.93 20.8C12.43 20.8 12.83 20.4 12.83 19.9C12.83 19.4 12.43 19 11.93 19Z"/>',
      }}
    />
  )
)

Multimedia.displayName = 'Multimedia'

export const tags = ['multimedia', 'categories']
