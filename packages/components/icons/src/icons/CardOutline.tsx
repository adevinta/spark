import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CardOutline = React.forwardRef(
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
          '<path d="M17.7618 14.901H13.7099C13.175 14.901 12.7374 15.3346 12.7374 15.8646C12.7374 16.3945 13.175 16.8282 13.7099 16.8282H17.7618C18.2966 16.8282 18.7342 16.3945 18.7342 15.8646C18.7342 15.3346 18.2966 14.901 17.7618 14.901Z"/><path d="M19.6418 5H4.35818C3.05348 5 2 6.0439 2 7.33672V17.6633C2 18.9561 3.05348 20 4.35818 20H19.6418C20.9465 20 22 18.9561 22 17.6633V7.33672C22 6.0439 20.9465 5 19.6418 5ZM4.35818 18.0808C4.13128 18.0808 3.94489 17.8961 3.94489 17.6713V11.7532H20.0632V17.6713C20.0632 17.8961 19.8768 18.0808 19.6499 18.0808H4.35818ZM4.35818 6.92719H19.6418C19.8687 6.92719 20.0551 7.11188 20.0551 7.33672V9.81799H3.94489V7.33672C3.94489 7.11188 4.13128 6.92719 4.35818 6.92719Z"/>',
      }}
    />
  )
)

export const tags = ['card-outline', 'account']
