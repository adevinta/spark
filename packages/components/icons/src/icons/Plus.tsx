import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Plus = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 2.40002C12.5521 2.40002 12.9998 2.84774 12.9998 3.40002V11.3447H21C21.5523 11.3447 22 11.7924 22 12.3447C22 12.897 21.5523 13.3447 21 13.3447H12.9998V21.4C12.9998 21.9523 12.5521 22.4 11.9998 22.4C11.4475 22.4 10.9998 21.9523 10.9998 21.4V13.3447H3C2.44772 13.3447 2 12.897 2 12.3447C2 11.7924 2.44772 11.3447 3 11.3447H10.9998V3.40002C10.9998 2.84774 11.4475 2.40002 11.9998 2.40002Z"/>',
      }}
    />
  )
)

export const tags = ['plus', 'arrows']
