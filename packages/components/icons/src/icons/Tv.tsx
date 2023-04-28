import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Tv = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7619 14.4225H19.2381V6.93085H4.7619V14.4225ZM11.4987 16.4691H12.5021V15.1534H11.4987V16.4691ZM19.619 6.19995H4.38095C4.17067 6.19995 4 6.36367 4 6.5654V14.788C4 14.9905 4.17067 15.1534 4.38095 15.1534H10.736V16.4691H8.37181C8.16152 16.4691 7.99086 16.6328 7.99086 16.8345C7.99086 17.0362 8.16152 17.2 8.37181 17.2H15.6282C15.8385 17.2 16.0091 17.0362 16.0091 16.8345C16.0091 16.6328 15.8385 16.4691 15.6282 16.4691H13.264V15.1534H19.619C19.8293 15.1534 20 14.9905 20 14.788V6.5654C20 6.36367 19.8293 6.19995 19.619 6.19995Z"/>',
      }}
    />
  )
)

export const tags = ['tv', 'criteria', 'holidays']
