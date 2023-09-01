import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SpeedmeterOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SpeedmeterOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m2,12C2,6.48,6.48,2,12,2s10,4.48,10,10-4.48,10-10,10S2,17.52,2,12Zm10-7.91c-4.37,0-7.91,3.54-7.91,7.91,0,.84.13,1.64.37,2.4h6.95l3.83-6.38c.3-.49.94-.65,1.43-.36.49.3.65.94.36,1.43l-3.19,5.31h5.7c.24-.76.37-1.56.37-2.4,0-4.37-3.54-7.91-7.91-7.91Zm6.52,12.4h-6.5s-.02,0-.03,0h-6.5c1.43,2.07,3.81,3.42,6.52,3.42s5.09-1.36,6.52-3.42Z"/>',
      }}
    />
  )
)

SpeedmeterOutline.displayName = 'SpeedmeterOutline'

export const tags = ['SpeedmeterOutline', '']
