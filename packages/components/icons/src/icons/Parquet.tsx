import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Parquet = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Parquet"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.31,18.74l-1.57-1.57,1.44-1.44,1.57,1.57v1.44h-1.44Zm-12.06-3.06l3.06,3.06h-3.06v-3.06Zm1.44-10.43l1.49,1.49-1.44,1.44-1.5-1.49v-1.44h1.44Zm12.06,3.08l-3.09-3.08h3.09v3.08Zm-2.67,1.32s-.05-.09-.08-.13c-.04-.04-.08-.07-.13-.08l-1.79-1.79,1.47-1.46,3.21,3.21v2.93l-2.67-2.67Zm-1.8,2.12l1.43-1.43,3.05,3.04v2.86l-4.48-4.47Zm.33-6.52l.4.4-1.47,1.46-1.87-1.87h2.93Zm-3.99,0l4.56,4.56-1.43,1.43-5.99-5.99h2.86Zm-3.34,3.46l1.44-1.44,7.94,7.93-1.44,1.44-7.93-7.93Zm-2.03,3l1.84,1.84-1.45,1.45-.39-.39v-2.9Zm1.17-2.8s.03.05.05.07c.02.02.05.03.07.05l4.7,4.7-1.45,1.45-4.54-4.53v-2.91l1.17,1.17Zm2.95,9.82l-3.2-3.2,1.45-1.45,4.66,4.65h-2.91Zm3.97,0l-3.02-3.02,1.45-1.45,3.11,3.11s.03.05.05.07c.02.02.05.03.07.05l1.24,1.24h-2.91Zm5.78-14.24H4.88c-.21,0-.38.17-.38.37v14.24c0,.21.17.37.38.37h4.29s.04.01.06.01.04,0,.06-.01h9.84c.21,0,.38-.17.38-.37V4.87c0-.21-.17-.37-.38-.37Z"/>',
      }}
    />
  )
)

Parquet.displayName = 'Parquet'

export const tags = ['Parquet', '']
