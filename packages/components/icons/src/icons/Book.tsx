import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Book = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Book"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.53,7.85c-.45,0-.81.37-.81.83v.95c0,.46.36.83.81.83h2.79c.45,0,.81-.37.81-.83v-.95c0-.46-.36-.83-.81-.83h-2.79Zm-.12.83c0-.07.05-.12.12-.12h2.79c.06,0,.12.05.12.12v.95c0,.07-.05.12-.12.12h-2.79c-.06,0-.12-.05-.12-.12v-.95Z"/><path fill-rule="evenodd" d="m7,5.83c0-.46.36-.83.81-.83h8.37c.45,0,.81.37.81.83v10.92c0,.2-.16.36-.35.36h-.21l-.29.54s-.02.08,0,.12l.29.54h.21c.19,0,.35.16.35.36s-.16.36-.35.36H7.81c-.45,0-.81-.37-.81-.83V5.83Zm9.3,0v10.56h-6.74V5.71h6.63c.06,0,.12.05.12.12Zm-.66,11.27l-.1.19c-.14.25-.14.56,0,.81l.1.19h-7.83c-.06,0-.12-.05-.12-.12v-.95c0-.07.05-.12.12-.12h7.83Zm-7.83-.71s-.08,0-.12,0V5.83c0-.07.05-.12.12-.12h1.05v10.68h-1.05Z"/>',
      }}
    />
  )
)

Book.displayName = 'Book'

export const tags = ['Book', '']
