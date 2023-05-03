import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowDoubleLeft = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4613 2.69234C13.8537 3.08255 13.8542 3.71571 13.4624 4.10656L5.14794 12.4L13.4624 20.6935C13.8542 21.0843 13.8537 21.7175 13.4613 22.1077C13.0688 22.4979 12.433 22.4974 12.0412 22.1066L3.51314 13.6001C3.35336 13.4471 3.22568 13.264 3.13757 13.0613C3.04682 12.8526 3 12.6275 3 12.4C3 12.1725 3.04682 11.9475 3.13757 11.7387C3.22568 11.536 3.35336 11.3529 3.51314 11.2L12.0412 2.69349C12.433 2.30265 13.0688 2.30214 13.4613 2.69234ZM20.7059 2.69292C21.098 3.08344 21.098 3.71661 20.7059 4.10713L12.3784 12.4L20.7059 20.6929C21.098 21.0834 21.098 21.7166 20.7059 22.1071C20.3137 22.4977 19.6779 22.4977 19.2858 22.1071L10.7278 13.5847C10.4165 13.2683 10.2421 12.843 10.2421 12.4C10.2421 11.9571 10.4165 11.5317 10.7279 11.2154L10.7349 11.2083L19.2858 2.69292C19.6779 2.30239 20.3137 2.30239 20.7059 2.69292Z"/>',
      }}
    />
  )
)

ArrowDoubleLeft.displayName = 'ArrowDoubleLeft'

export const tags = ['arrow-double-left', 'arrows']
