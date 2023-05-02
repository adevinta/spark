import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const LikeFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.61047 3.20001C4.47262 3.20001 2 5.99671 2 9.35722C2 12.1142 3.39876 14.0984 3.97217 14.8611C5.85936 17.3731 8.40205 19.0367 10.7565 20.577C11.0112 20.7437 11.2637 20.9089 11.513 21.0736C11.7618 21.238 12.0775 21.2424 12.3304 21.085C12.546 20.9508 12.7639 20.8162 12.9834 20.6807C15.4422 19.1622 18.1038 17.5184 20.0514 14.8946C20.6977 14.0253 21.9997 12.0565 22 9.35477C22.0034 5.99641 19.53 3.20001 16.3925 3.20001C14.6028 3.20001 13.0234 4.11647 12.0008 5.52506C10.9794 4.11621 9.39988 3.20001 7.61047 3.20001Z"/>',
      }}
    />
  )
)

export const tags = ['like-fill', 'actions']
