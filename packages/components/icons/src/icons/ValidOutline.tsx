import React from 'react'

import { IconProps } from '../Types'

export const ValidOutline = ({
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
    data-title="ValidOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m17.29,9.14c.36-.42.3-1.05-.12-1.41-.42-.36-1.05-.3-1.41.12l-5.35,6.32-2.11-2.4c-.36-.41-1-.45-1.41-.09-.41.36-.46,1-.09,1.41l2.35,2.67c.16.18.36.33.58.43.22.1.46.15.71.14.24,0,.47-.06.69-.16.22-.1.41-.25.57-.44l5.59-6.6Z"/><path fill-rule="evenodd" d="m12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2ZM4,12c0-4.42,3.58-8,8-8s8,3.58,8,8-3.58,8-8,8-8-3.58-8-8Z"/>',
    }}
  />
)

ValidOutline.displayName = 'ValidOutline'

export const tags = ['ValidOutline', '']
