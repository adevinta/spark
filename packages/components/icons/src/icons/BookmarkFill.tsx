import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BookmarkFill = React.forwardRef(
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
          '<path d="M5 5.48489V21.001C5 21.4158 5.24725 21.7477 5.57692 21.9137C5.90659 22.0796 6.31868 21.9966 6.64835 21.7477L12.5 16.7693L18.3516 21.7477C18.6813 21.9966 19.011 22.0796 19.4231 21.9137C19.7527 21.7477 20 21.4158 20 21.001V5.48489C19.9176 3.5765 18.3516 2 16.5385 2H8.37912C6.48352 2 5 3.5765 5 5.48489Z"/>',
      }}
    />
  )
)

BookmarkFill.displayName = 'BookmarkFill'

export const tags = ['BookmarkFill', '']
