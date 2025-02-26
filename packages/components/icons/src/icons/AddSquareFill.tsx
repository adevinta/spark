import React from 'react'

import { IconProps } from '../Types'

export const AddSquareFill = ({
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
    data-title="AddSquareFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m7,2c-2.76,0-5,2.24-5,5h0v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5V7c0-2.76-2.24-5-5-5,0,0-10,0-10,0Zm5.83,5.71c0-.46-.37-.83-.83-.83s-.83.37-.83.83h0v3.45h-3.45c-.46,0-.83.37-.83.83s.37.83.83.83h3.45v3.45c0,.46.37.83.83.83s.83-.37.83-.83v-3.45h3.45c.46,0,.83-.37.83-.83s-.37-.83-.83-.83h-3.45v-3.45Z"/>',
    }}
  />
)

AddSquareFill.displayName = 'AddSquareFill'

export const tags = ['AddSquareFill', '']
