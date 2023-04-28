import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowDoubleRight = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5387 2.69234C10.1463 3.08255 10.1458 3.71571 10.5376 4.10656L18.8521 12.4L10.5376 20.6935C10.1458 21.0843 10.1463 21.7175 10.5387 22.1077C10.9312 22.4979 11.567 22.4974 11.9588 22.1066L20.4869 13.6001C20.6466 13.4471 20.7743 13.264 20.8624 13.0613C20.9532 12.8526 21 12.6275 21 12.4C21 12.1725 20.9532 11.9475 20.8624 11.7387C20.7743 11.536 20.6466 11.3529 20.4869 11.2L11.9588 2.69349C11.567 2.30265 10.9312 2.30214 10.5387 2.69234ZM3.29411 2.69292C2.90196 3.08344 2.90196 3.71661 3.29411 4.10713L11.6216 12.4L3.29411 20.6929C2.90196 21.0834 2.90196 21.7166 3.29411 22.1071C3.68627 22.4977 4.32207 22.4977 4.71422 22.1071L13.2722 13.5847C13.5835 13.2683 13.7579 12.843 13.7579 12.4C13.7579 11.9571 13.5835 11.5317 13.2721 11.2154L13.2651 11.2083L4.71422 2.69292C4.32207 2.30239 3.68627 2.30239 3.29411 2.69292Z"/>',
      }}
    />
  )
)

export const tags = ['arrow-double-right', 'arrows']
