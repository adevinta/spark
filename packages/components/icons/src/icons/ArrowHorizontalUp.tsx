import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowHorizontalUp = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5942L4.70711 18.0996C4.31658 18.5002 3.68342 18.5002 3.29289 18.0996C2.90237 17.6991 2.90237 17.0497 3.29289 16.6492L10.7996 8.9245C10.9526 8.76114 11.1359 8.63059 11.3387 8.54054C11.5474 8.44785 11.7725 8.40002 12 8.40002C12.2275 8.40002 12.4526 8.44785 12.6613 8.54054C12.8641 8.63059 13.0474 8.76114 13.2004 8.9245L20.7071 16.6492C21.0976 17.0497 21.0976 17.6991 20.7071 18.0996C20.3166 18.5002 19.6834 18.5002 19.2929 18.0996L12 10.5942Z"/>',
      }}
    />
  )
)

ArrowHorizontalUp.displayName = 'ArrowHorizontalUp'

export const tags = ['arrow-horizontal-up', 'arrows']
