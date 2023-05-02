import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HomeFill = React.forwardRef(
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
          '<path d="M21.7386 11.5L12.4939 2.25C12.1608 1.91667 11.7444 1.91667 11.4112 2.25L2.24986 11.5C1.91671 11.8333 1.91671 12.25 2.24986 12.5833C2.583 12.9167 2.99942 12.9167 3.33256 12.5833L4.66513 11.1667V21.1667C4.66513 21.5 4.91499 21.8333 5.24813 21.9167C5.33141 21.9167 5.49798 22 5.58127 22H18.4072C18.4905 22 18.6571 22 18.7403 21.9167C19.1568 21.9167 19.4899 21.5833 19.4899 21.1667V11.25L20.7392 12.5C21.0723 12.8333 21.4888 12.8333 21.8219 12.5C22.0718 12.25 22.0718 11.75 21.7386 11.5Z"/>',
      }}
    />
  )
)

HomeFill.displayName = 'HomeFill'

export const tags = ['home-fill', 'account']
