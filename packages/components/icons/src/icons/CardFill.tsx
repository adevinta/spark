import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CardFill = React.forwardRef(
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
          '<path d="M19.7593 5H4.15768C2.91286 5 2 5.9116 2 7.1547V9.97238H22V7.1547C21.917 5.9116 21.0041 5 19.7593 5ZM2 11.4641V17.8453C2 19.0055 2.99585 20 4.15768 20H19.8423C21.0041 20 22 19.0055 22 17.8453V11.4641H2ZM13.7012 15.1934H17.8506C18.2656 15.1934 18.5975 15.5249 18.5975 15.9392 18.5975 16.3536 18.2656 16.6851 17.8506 16.6851H13.7012C13.2863 16.6851 12.9544 16.3536 12.9544 15.9392 12.9544 15.5249 13.2863 15.1934 13.7012 15.1934Z"/>',
      }}
    />
  )
)

CardFill.displayName = 'CardFill'

export const tags = ['card-fill', 'account']
