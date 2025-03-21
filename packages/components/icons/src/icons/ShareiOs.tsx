import React from 'react'

import { IconProps } from '../Types'

export const ShareiOs = ({
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
    data-title="ShareiOS"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m10.98,5.41v7.28c0,.55.46,1,1.02,1s1.02-.45,1.02-1v-7.28l1.08,1.06c.4.39,1.04.39,1.44,0,.4-.39.4-1.02,0-1.41l-2.83-2.77c-.13-.12-.28-.21-.44-.25-.09-.03-.18-.04-.28-.04-.29,0-.55.12-.74.31l-2.81,2.76c-.4.39-.4,1.02,0,1.41.4.39,1.04.39,1.44,0l1.08-1.06Z"/><path d="m4.87,9.9h1.42c.56,0,1.02-.45,1.02-1s-.46-1-1.02-1h-1.63c-.45,0-.9.16-1.26.46-.35.31-.58.76-.58,1.25v10.68c0,.49.23.94.58,1.25.35.31.8.46,1.26.46h14.66c.45,0,.9-.16,1.26-.46.35-.31.58-.76.58-1.25v-10.68c0-.49-.23-.94-.58-1.25-.35-.31-.8-.46-1.26-.46h-1.63c-.56,0-1.02.45-1.02,1s.46,1,1.02,1h1.42v10.1H4.87v-10.1Z"/>',
    }}
  />
)

ShareiOs.displayName = 'ShareiOs'

export const tags = ['ShareiOS', '']
