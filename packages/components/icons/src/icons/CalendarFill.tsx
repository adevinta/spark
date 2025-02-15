import React from 'react'

import { IconProps } from '../Types'

export const CalendarFill = ({
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
    data-title="CalendarFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m6.63,12.29c-.58,0-1.04.45-1.04,1s.47,1,1.04,1h7.16c.58,0,1.04-.45,1.04-1s-.47-1-1.04-1h-7.16Zm0,3c-.58,0-1.04.45-1.04,1s.47,1,1.04,1h3.58c.58,0,1.04-.45,1.04-1s-.47-1-1.04-1h-3.58Z"/><path fill-rule="evenodd" d="m8.57,3c0-.55-.47-1-1.04-1s-1.04.45-1.04,1v.71h-.75c-2.06,0-3.73,1.6-3.73,3.57v11.14c0,1.97,1.66,3.57,3.73,3.57h12.55c2.06,0,3.73-1.59,3.73-3.57V7.28c0-1.97-1.67-3.57-3.73-3.57h-.75v-.71c0-.55-.47-1-1.04-1s-1.04.45-1.04,1v.71h-6.87v-.71Zm-4.48,7.86h15.82v7.58c0,.87-.73,1.57-1.64,1.57H5.73c-.9,0-1.64-.7-1.64-1.57v-7.57Z"/>',
    }}
  />
)

CalendarFill.displayName = 'CalendarFill'

export const tags = ['CalendarFill', '']
