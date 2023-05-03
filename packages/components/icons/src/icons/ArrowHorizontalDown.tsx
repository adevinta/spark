import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowHorizontalDown = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 10.6731C3.68342 10.309 4.31658 10.309 4.70711 10.6731L12 17.4053L19.2929 10.6731C19.6834 10.309 20.3166 10.309 20.7071 10.6731C21.0976 11.0372 21.0976 11.6276 20.7071 11.9917L13.2004 18.9232C13.0474 19.0717 12.8641 19.1904 12.6613 19.2723C12.4526 19.3565 12.2275 19.4 12 19.4C11.7725 19.4 11.5474 19.3565 11.3387 19.2723C11.1359 19.1904 10.9526 19.0718 10.7996 18.9232L3.29289 11.9917C2.90237 11.6276 2.90237 11.0372 3.29289 10.6731Z"/>',
      }}
    />
  )
)

ArrowHorizontalDown.displayName = 'ArrowHorizontalDown'

export const tags = ['arrow-horizontal-down', 'arrows']
