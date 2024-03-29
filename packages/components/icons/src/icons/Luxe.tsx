import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Luxe = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Luxe"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m5.77,10.28h3.58l1.88,5.92-5.47-5.92Zm1.49-3.2l1.64,2.42h-3.28l1.64-2.42Zm4.56-.3l1.84,2.72h-3.28l1.12-1.66c.12-.18.07-.42-.1-.54-.18-.12-.42-.07-.54.1l-1.22,1.8-1.64-2.43h3.82Zm4.74-.11l1.84,2.72h-3.28l1.09-1.6c.13-.17.1-.42-.07-.55-.17-.13-.41-.1-.54.07,0,0-.01.02-.02.03l-1.19,1.75-1.64-2.43h3.81Zm-1.88,3.5h3.58l-5.34,5.78,1.76-5.78Zm-4.51,0h3.71l-1.81,5.95-1.89-5.95Zm9.32-.38c0-.13-.07-.24-.17-.32l-2.24-3.31c-.07-.1-.19-.17-.32-.16H7.22c-.11.01-.21.07-.28.16l-2.38,3.51c-.1.15-.09.35.04.49l7.12,7.72c.14.16.39.17.54.02,0,0,.01-.01.02-.02l7.12-7.72c.09-.1.1-.24.07-.37Z"/>',
      }}
    />
  )
)

Luxe.displayName = 'Luxe'

export const tags = ['Luxe', '']
