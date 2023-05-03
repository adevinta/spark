import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowLeft = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.53868 6.67642C8.9371 7.05586 8.95002 7.68386 8.56754 8.0791L5.34622 11.408H21C21.5523 11.408 22 11.8521 22 12.4C22 12.9479 21.5523 13.3921 21 13.3921H5.34622L8.56754 16.7209C8.95002 17.1162 8.9371 17.7442 8.53868 18.1236C8.14027 18.5031 7.50724 18.4902 7.12477 18.095L2.27861 13.0871C1.90713 12.7032 1.90713 12.0969 2.27861 11.713L7.12477 6.70505C7.50724 6.30981 8.14027 6.29699 8.53868 6.67642Z"/>',
      }}
    />
  )
)

ArrowLeft.displayName = 'ArrowLeft'

export const tags = ['arrow-left', 'arrows']
