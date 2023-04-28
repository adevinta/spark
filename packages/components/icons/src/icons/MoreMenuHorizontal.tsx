import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MoreMenuHorizontal = React.forwardRef(
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
          '<path d="M19.6923 14.7C20.9668 14.7 22 13.6927 22 12.45 22 11.2074 20.9668 10.2 19.6923 10.2 18.4178 10.2 17.3847 11.2074 17.3847 12.45 17.3847 13.6927 18.4178 14.7 19.6923 14.7ZM11.9998 14.7C13.2743 14.7 14.3075 13.6927 14.3075 12.45 14.3075 11.2074 13.2743 10.2 11.9998 10.2 10.7253 10.2 9.69211 11.2074 9.69211 12.45 9.69211 13.6927 10.7253 14.7 11.9998 14.7ZM4.30767 14.7C5.58216 14.7 6.61534 13.6927 6.61534 12.45 6.61534 11.2074 5.58216 10.2 4.30767 10.2 3.03318 10.2 2 11.2074 2 12.45 2 13.6927 3.03318 14.7 4.30767 14.7Z"/>',
      }}
    />
  )
)

export const tags = ['more-menu-horizontal', 'actions']
