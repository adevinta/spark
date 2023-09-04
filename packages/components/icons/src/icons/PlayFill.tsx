import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PlayFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="PlayFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m12,22c5.52,0,10-4.48,10-10S17.52,2,12,2,2,6.48,2,12s4.48,10,10,10Z"/><path d="m9.69,8.15l6.15,3.85-6.15,3.85v-7.69Z"/>',
      }}
    />
  )
)

PlayFill.displayName = 'PlayFill'

export const tags = ['PlayFill', '']
