import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Size = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Size"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.8,7.5c.39,0,.7.3.7.66v7.67c0,.37-.31.66-.7.66H5.2c-.39,0-.7-.3-.7-.66v-7.67c0-.37.31-.66.7-.66h13.6Zm-12.05.75h-1.5v6h9.37c.21,0,.38.17.38.38,0,.18-.14.34-.31.37h-.07s-9.37,0-9.37,0v.75h13.5v-7.5h-2.25v2.58c0,.23-.17.42-.38.42-.18,0-.34-.15-.37-.34v-.07s0-2.58,0-2.58h-1.5v1.76c0,.27-.17.49-.38.49-.18,0-.34-.17-.37-.4v-.09s0-1.76,0-1.76h-1.5v2.58c0,.23-.17.42-.38.42-.18,0-.34-.15-.37-.34v-.07s0-2.58,0-2.58h-1.5v1.76c0,.27-.17.49-.38.49-.18,0-.34-.17-.37-.4v-.09s0-1.76,0-1.76h-1.5v2.58c0,.23-.17.42-.38.42-.18,0-.34-.15-.37-.34v-.07s0-2.58,0-2.58Z"/>',
      }}
    />
  )
)

Size.displayName = 'Size'

export const tags = ['Size', '']
