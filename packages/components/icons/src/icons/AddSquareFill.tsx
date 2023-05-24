import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AddSquareFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M7 2.286a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-10a5 5 0 0 0-5-5H7ZM12.833 8a.833.833 0 0 0-1.667 0v3.453H7.714a.833.833 0 1 0 0 1.666h3.452v3.453a.833.833 0 1 0 1.667 0v-3.453h3.452a.833.833 0 1 0 0-1.666h-3.452V8Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

AddSquareFill.displayName = 'AddSquareFill'

export const tags = ['AddSquareFill', '']
