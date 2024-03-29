import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Card = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Card"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m22.3,20H1.7C.76,20,0,19.24,0,18.3V5.7C0,4.76.76,4,1.7,4h20.6c.94,0,1.7.76,1.7,1.7v12.61c0,.93-.76,1.7-1.7,1.7ZM1.7,4.79c-.5,0-.91.41-.91.91v12.61c0,.5.41.91.91.91h20.6c.5,0,.91-.41.91-.91V5.7c0-.5-.41-.91-.91-.91H1.7Z"/><path d="m15.23,15.19H3.02c-.22,0-.39-.18-.39-.39s.18-.39.39-.39h12.22c.22,0,.39.18.39.39s-.18.39-.39.39Zm-4.64,1.93H3.03c-.21,0-.39-.15-.41-.36-.02-.24.16-.43.39-.43h7.55c.21,0,.4.15.41.36.02.23-.16.43-.39.43Zm13.03-10.24H.15v2.78h23.47v-2.78Z"/>',
      }}
    />
  )
)

Card.displayName = 'Card'

export const tags = ['Card', '']
