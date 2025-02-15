import React from 'react'

import { IconProps } from '../Types'

export const RemoveOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ref,
  ...props
}: IconProps) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-title="RemoveOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m7.91,10.94c-.57,0-1.02.45-1.02,1s.46,1,1.02,1h8.51c.57,0,1.02-.45,1.02-1s-.46-1-1.02-1H7.91Z"/><path fill-rule="evenodd" d="m12,2C6.45,2,2,6.5,2,12s4.45,10,10,10,10-4.5,10-10S17.55,2,12,2Zm-7.95,10c0-4.44,3.59-8,7.95-8s7.95,3.56,7.95,8-3.59,8-7.95,8-7.95-3.56-7.95-8Z"/>',
    }}
  />
)

RemoveOutline.displayName = 'RemoveOutline'

export const tags = ['RemoveOutline', '']
