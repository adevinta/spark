import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="FlagFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m15.3,7.83l3.55-4.23c.24-.29.3-.7.14-1.04-.16-.35-.49-.57-.87-.57H5.87c-.53,0-.96.43-.96.97v18.05c0,.54.42.98.96.98s.96-.43.96-.98v-7.36h11.3c.37,0,.72-.23.87-.57.16-.35.1-.75-.14-1.04l-3.55-4.22h0Z"/>',
      }}
    />
  )
)

FlagFill.displayName = 'FlagFill'

export const tags = ['FlagFill', '']
