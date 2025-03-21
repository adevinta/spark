import React from 'react'

import { IconProps } from '../Types'

export const Plus = ({
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
    data-title="Plus"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m12,2c.55,0,1,.45,1,1v7.94h8c.55,0,1,.45,1,1s-.45,1-1,1h-8v8.06c0,.55-.45,1-1,1s-1-.45-1-1v-8.06H3c-.55,0-1-.45-1-1s.45-1,1-1h8V3c0-.55.45-1,1-1Z"/>',
    }}
  />
)

Plus.displayName = 'Plus'

export const tags = ['Plus', '']
