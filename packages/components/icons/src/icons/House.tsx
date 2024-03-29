import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const House = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="House"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m5.2,12.7c-.1,0-.2-.1-.4-.1-.5,0-1,.4-1.1.8v5.6c0,2.2,1.8,4,4,4h8.6c2.2,0,4-1.8,4-4v-5.4c-.1-.5-.6-.8-1.1-.8-.1,0-.3,0-.4.1-.4.2-.8.6-.8,1.1v5c0,.9-.8,1.7-1.7,1.7H7.7c-.9,0-1.7-.8-1.7-1.7v-5.1c0-.6-.3-1-.8-1.2Zm9.1,5.7c.6-.5,1-1.3,1-2.2v-1.9c0-1.6-1.3-2.9-2.8-2.9h-.9c-1.6,0-2.8,1.3-2.8,2.9v1.9c0,.9.4,1.7,1,2.2.5.4,1.1.7,1.8.7h.9c.7-.1,1.3-.3,1.8-.7Zm.5-16.2c-1.6-1.6-4.1-1.6-5.6,0L.9,10.6c-.4.4-.4,1.2,0,1.6.2.2.5.3.8.3s.6-.1.8-.3L10.8,3.8c.7-.7,1.7-.7,2.4,0l8.3,8.4c.2.2.5.3.8.3s.6-.1.8-.3c.4-.4.4-1.2,0-1.6L14.8,2.2Zm-2.3,11.5h-.9c-.3,0-.5.2-.5.6v1.9c0,.3.2.6.5.6h.9c.3,0,.5-.2.5-.6v-1.9c0-.3-.2-.6-.5-.6Z"/>',
      }}
    />
  )
)

House.displayName = 'House'

export const tags = ['House', '']
