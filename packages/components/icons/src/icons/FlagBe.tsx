import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagBe = React.forwardRef(
  ({ title, fill = 'none', stroke = 'none', ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill="#4E6579" d="M8.002 20.212H.412A.413.413 0 0 1 0 19.8V4.903c0-.23.188-.413.412-.413h7.585v15.722h.005Z"/><path fill="#FAE042" d="M8.002 4.49h8.002v15.722H8.002z"/><path fill="#ED2939" d="M23.587 20.212h-7.589V4.49h7.585c.23 0 .412.188.412.413V19.8a.406.406 0 0 1-.408.412Z"/>',
      }}
    />
  )
)

FlagBe.displayName = 'FlagBe'

export const tags = ['FlagBE', '']
