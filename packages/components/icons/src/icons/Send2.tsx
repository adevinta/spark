import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Send2 = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.601 14.9657C21.0207 14.7653 21.3743 14.4543 21.6216 14.0679C21.8689 13.6815 22 13.2352 22 12.7798C22 12.3244 21.8689 11.8781 21.6216 11.4917C21.3743 11.1053 21.0207 10.7943 20.601 10.5939L4.85294 3.16742C4.54384 2.93064 4.16046 2.80005 3.76326 2.80005C3.29561 2.80005 2.84712 2.98107 2.51645 3.30329C2.18577 3.62551 2 4.06254 2 4.51823C2 4.90423 2.13329 5.27684 2.37505 5.57762L5.90887 12.7845L2.43411 20.0266C2.19443 20.3266 2.06234 20.6976 2.06234 21.0819C2.06234 21.5376 2.24811 21.9746 2.57879 22.2968C2.90946 22.619 3.35796 22.8 3.8256 22.8C4.22358 22.8 4.60769 22.6689 4.91712 22.4313L20.6 14.9662L20.601 14.9657ZM18.126 11.6537L4.47851 5.21779L7.63431 11.6537H18.126ZM7.7605 13.6582L4.53413 20.3827L18.6609 13.6582H7.7605Z"/>',
      }}
    />
  )
)

export const tags = ['send2', 'contact']
