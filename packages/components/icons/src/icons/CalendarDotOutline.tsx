import React from 'react'

import { IconProps } from '../Types'

export const CalendarDotOutline = ({
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
    data-title="CalendarDotOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m15.25,14.14c-.8,0-1.45.62-1.45,1.39v1.46c0,.77.65,1.39,1.45,1.39h1.52c.8,0,1.45-.62,1.45-1.39v-1.46c0-.77-.65-1.39-1.45-1.39h-1.52Z"/><path fill-rule="evenodd" d="m8.74,3.11c0-.61-.52-1.11-1.16-1.11s-1.16.5-1.16,1.11v.58h-.61c-2.11,0-3.81,1.64-3.81,3.65v11c0,2.01,1.7,3.65,3.81,3.65h12.38c2.11,0,3.81-1.63,3.81-3.65V7.34c0-2.02-1.71-3.65-3.81-3.65h-.61v-.58c0-.61-.52-1.11-1.16-1.11s-1.16.5-1.16,1.11v.58h-6.51v-.58Zm-2.93,2.81h.61v.58c0,.61.52,1.11,1.16,1.11s1.16-.5,1.16-1.11v-.58h6.51v.58c0,.61.52,1.11,1.16,1.11s1.16-.5,1.16-1.11v-.58h.61c.83,0,1.49.64,1.49,1.42v1.43H4.32v-1.43c0-.79.67-1.43,1.49-1.43Zm-1.49,5.08h15.35v7.36c0,.79-.66,1.42-1.48,1.42H5.81c-.82,0-1.48-.64-1.48-1.43v-7.35Z"/>',
    }}
  />
)

CalendarDotOutline.displayName = 'CalendarDotOutline'

export const tags = ['CalendarDotOutline', '']
