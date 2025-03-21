import React from 'react'

import { IconProps } from '../Types'

export const MailOpenFill = ({
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
    data-title="MailOpenFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m19.53,20c1.4,0,2.47-1.15,2.47-2.66v-8c-.08-2.93-2.23-5.34-5.02-5.34h-8.4c.99.09,1.89.44,2.63,1.07.33.27.66.62.91,1.07.49.8.82,1.78.82,2.75v8.44c0,.18,0,.36-.08.53h-2.47c.33,0,.49-.27.49-.53v-8.45c0-1.42-1.07-2.57-2.31-2.75h-.25c-1.4,0-2.55,1.24-2.55,2.75v8.44c0,.27.25.53.49.53h-3.28c-.57,0-.99.44-.99,1.07s.41,1.07.99,1.07m16.22-5.78c0,.53-.41,1.07-.99,1.07s-.99-.44-.99-1.07v-1.15h-2.72c-.57,0-.99-.44-.99-1.07s.49-1.07.99-1.07h4.69v3.28h0Z"/>',
    }}
  />
)

MailOpenFill.displayName = 'MailOpenFill'

export const tags = ['MailOpenFill', '']
