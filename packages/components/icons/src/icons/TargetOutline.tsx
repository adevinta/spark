import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const TargetOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="TargetOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,2c.55,0,1,.45,1,1v1.84c3.19.44,5.72,2.97,6.16,6.16h1.84c.55,0,1,.45,1,1s-.45,1-1,1h-1.84c-.44,3.19-2.97,5.72-6.16,6.16v1.84c0,.55-.45,1-1,1-.55,0-1-.45-1-1v-1.84c-3.19-.44-5.72-2.97-6.16-6.16h-1.84c-.55,0-1-.45-1-1s.45-1,1-1h1.84c.44-3.19,2.97-5.72,6.16-6.16v-1.84c0-.55.45-1,1-1Zm0,4.77c-2.89,0-5.23,2.34-5.23,5.23s2.34,5.23,5.23,5.23,5.23-2.34,5.23-5.23-2.34-5.23-5.23-5.23Zm-2,5.26c0-1.1.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Z"/>',
      }}
    />
  )
)

TargetOutline.displayName = 'TargetOutline'

export const tags = ['TargetOutline', '']
