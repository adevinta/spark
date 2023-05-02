import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AddFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.59985C4.23858 2.59985 2 4.83843 2 7.59985V17.5999C2 20.3613 4.23858 22.5999 7 22.5999H17C19.7614 22.5999 22 20.3613 22 17.5999V7.59985C22 4.83843 19.7614 2.59985 17 2.59985H7ZM12.8329 8.31417C12.8329 7.85393 12.4598 7.48083 11.9996 7.48083C11.5394 7.48083 11.1663 7.85393 11.1663 8.31417V11.7665H7.71411C7.25387 11.7665 6.88078 12.1396 6.88078 12.5999C6.88078 13.0601 7.25387 13.4332 7.71411 13.4332H11.1663V16.8856C11.1663 17.3458 11.5394 17.7189 11.9996 17.7189C12.4598 17.7189 12.8329 17.3458 12.8329 16.8856V13.4332H16.2855C16.7458 13.4332 17.1189 13.0601 17.1189 12.5999C17.1189 12.1396 16.7458 11.7665 16.2855 11.7665H12.8329V8.31417Z"/>',
      }}
    />
  )
)

AddFill.displayName = 'AddFill'

export const tags = ['add-fill', 'images']
