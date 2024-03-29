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
      data-title="Tv"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m4.76,14.72h14.48v-7.49H4.76v7.49Zm6.74,2.05h1v-1.32h-1v1.32Zm8.12-10.27H4.38c-.21,0-.38.16-.38.37v8.22c0,.2.17.37.38.37h6.36v1.32h-2.36c-.21,0-.38.16-.38.37s.17.37.38.37h7.26c.21,0,.38-.16.38-.37s-.17-.37-.38-.37h-2.36v-1.32h6.35c.21,0,.38-.16.38-.37V6.87c0-.2-.17-.37-.38-.37Z"/>',
      }}
    />
  )
)

Tv.displayName = 'Tv'

export const tags = ['Tv', '']
