import React from 'react'

import { IconProps } from '../Types'

export const SendOutline = ({
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
    data-title="SendOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m20.6,14.17c.42-.2.77-.51,1.02-.9.25-.39.38-.83.38-1.29s-.13-.9-.38-1.29c-.25-.39-.6-.7-1.02-.9L4.85,2.37c-.31-.24-.69-.37-1.09-.37-.47,0-.92.18-1.25.5-.33.32-.52.76-.52,1.21,0,.39.13.76.38,1.06l3.53,7.21-3.47,7.24c-.24.3-.37.67-.37,1.06,0,.46.19.89.52,1.22.33.32.78.5,1.25.5.4,0,.78-.13,1.09-.37l15.68-7.47h0Zm-2.48-3.31L4.48,4.42l3.16,6.44h10.49Zm-10.37,2l-3.23,6.72,14.13-6.72H7.76Z"/>',
    }}
  />
)

SendOutline.displayName = 'SendOutline'

export const tags = ['SendOutline', '']
