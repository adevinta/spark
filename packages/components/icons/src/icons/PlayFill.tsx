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
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M12 22.2C17.5228 22.2 22 17.7229 22 12.2C22 6.67716 17.5228 2.20001 12 2.20001C6.47715 2.20001 2 6.67716 2 12.2C2 17.7229 6.47715 22.2 12 22.2Z"/><path d="M9.69231 8.35386L15.8462 12.2L9.69231 16.0462V8.35386Z"/>',
      }}
    />
  )
)

export const tags = ['play-fill', 'actions']
