import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MoreMenuVertical = React.forwardRef(
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
          '<path d="M11.25 6.8154C12.4926 6.8154 13.5 5.78221 13.5 4.5077 13.5 3.2332 12.4926 2.20001 11.25 2.20001 10.0074 2.20001 9 3.2332 9 4.5077 9 5.78221 10.0074 6.8154 11.25 6.8154ZM11.25 14.5077C12.4926 14.5077 13.5 13.4745 13.5 12.2 13.5 10.9255 12.4926 9.89232 11.25 9.89232 10.0074 9.89232 9 10.9255 9 12.2 9 13.4745 10.0074 14.5077 11.25 14.5077ZM11.25 22.2C12.4926 22.2 13.5 21.1668 13.5 19.8923 13.5 18.6178 12.4926 17.5846 11.25 17.5846 10.0074 17.5846 9 18.6178 9 19.8923 9 21.1668 10.0074 22.2 11.25 22.2Z"/>',
      }}
    />
  )
)

export const tags = ['more-menu-vertical', 'actions']
