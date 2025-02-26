import React from 'react'

import { IconProps } from '../Types'

export const CardOutline = ({
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
    data-title="CardOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m17.76,14.4h-4.05c-.53,0-.97.43-.97.96s.44.96.97.96h4.05c.53,0,.97-.43.97-.96s-.44-.96-.97-.96Z"/><path d="m19.64,4.5H4.36c-1.3,0-2.36,1.04-2.36,2.34v10.33c0,1.29,1.05,2.34,2.36,2.34h15.28c1.3,0,2.36-1.04,2.36-2.34V6.84c0-1.29-1.05-2.34-2.36-2.34Zm-15.28,13.08c-.23,0-.41-.18-.41-.41v-5.92h16.12v5.92c0,.22-.19.41-.41.41H4.36Zm0-11.15h15.28c.23,0,.41.18.41.41v2.48H3.94v-2.48c0-.22.19-.41.41-.41Z"/>',
    }}
  />
)

CardOutline.displayName = 'CardOutline'

export const tags = ['CardOutline', '']
