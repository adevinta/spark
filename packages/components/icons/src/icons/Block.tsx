import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Block = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.83932 19.7801C4.86512 19.8135 4.89332 19.8455 4.92392 19.8761C4.95452 19.9067 4.98662 19.935 5.01998 19.9608C6.82197 21.7175 9.28459 22.7998 12 22.7998C17.5228 22.7998 22 18.3227 22 12.7998C22 10.0855 20.9186 7.6238 19.1631 5.822C19.1368 5.78776 19.108 5.75483 19.0766 5.72347C19.0452 5.69211 19.0123 5.66328 18.9781 5.63696C17.1763 3.88132 14.7144 2.7998 12 2.7998C6.47715 2.7998 2 7.27696 2 12.7998C2 15.5154 3.08241 17.9781 4.83932 19.7801ZM4 12.7998C4 8.38153 7.58172 4.7998 12 4.7998C13.8488 4.7998 15.5511 5.42693 16.9058 6.48006L5.68025 17.7056C4.62713 16.3509 4 14.6486 4 12.7998ZM18.32 7.8943C19.373 9.24896 20 10.9512 20 12.7998C20 17.2181 16.4183 20.7998 12 20.7998C10.1514 20.7998 8.44916 20.1728 7.0945 19.1198L18.32 7.8943Z"/>',
      }}
    />
  )
)

Block.displayName = 'Block'

export const tags = ['block', 'alert']
