import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowRight = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4613 6.67642C15.0629 7.05586 15.05 7.68386 15.4325 8.0791L18.6538 11.408H3C2.44772 11.408 2 11.8521 2 12.4C2 12.9479 2.44772 13.3921 3 13.3921H18.6538L15.4325 16.7209C15.05 17.1162 15.0629 17.7442 15.4613 18.1236C15.8597 18.5031 16.4928 18.4902 16.8752 18.095L21.7214 13.0871C22.0929 12.7032 22.0929 12.0969 21.7214 11.713L16.8752 6.70505C16.4928 6.30981 15.8597 6.29699 15.4613 6.67642Z"/>',
      }}
    />
  )
)

export const tags = ['arrow-right', 'arrows']
