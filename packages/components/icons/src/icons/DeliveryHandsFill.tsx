import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeliveryHandsFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="DeliveryHandsFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m20.06,2h-2.11v5.42c0,.41-.16.74-.41.99-.25.25-.65.41-.98.41h-2.68c-.41,0-.72-.16-.97-.41-.25-.25-.41-.66-.41-.99V2h-2.11c-1.05,0-1.86.82-1.86,1.89v9.86c0,.16,0,.25.08.41.07.28.2.53.35.76-.21-.25-.34-.53-.43-.84-.81-.66-1.78-1.07-2.83-1.07h-2.73c-.57,0-.97.41-.97.99s.41.99.97.99h2.75c.65,0,1.29.25,1.78.74.24.25.41.49.48.82H2.97c-.57,0-.97.41-.97.99s.41.99.97.99h8.91c.48,0,.89.16,1.29.49.24.25.41.58.48.99H2.97c-.57,0-.97.41-.97.99s.41.99.97.99h11.01c.41,0,.89-.16,1.13-.49.32-.33.48-.74.48-1.15,0-.99-.41-1.97-1.05-2.63-.73-.74-1.62-1.07-2.59-1.07h-1.86c-.08-.4-.23-.73-.39-1.13.22.07.43.14.72.14h9.72c1.05,0,1.86-.82,1.86-1.89V3.89c-.08-1.07-.89-1.89-1.94-1.89Zm-1.29,11.35h-2.18c-.57,0-.97-.41-.97-.99s.41-.99.97-.99h2.18c.57,0,.97.41.97.99s-.41.99-.97.99Z"/>',
      }}
    />
  )
)

DeliveryHandsFill.displayName = 'DeliveryHandsFill'

export const tags = ['DeliveryHandsFill', '']
