import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Balcony = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 20.2H5V11.575C5 11.3678 5.16789 11.2 5.375 11.2C5.55909 11.2 5.71221 11.3326 5.74396 11.5075L5.75 11.575V11.95H8V5.94995C8 5.53574 8.33579 5.19995 8.75 5.19995H16.25C16.6642 5.19995 17 5.53574 17 5.94995V11.95H19.25V11.575C19.25 11.3678 19.4179 11.2 19.625 11.2C19.8091 11.2 19.9622 11.3326 19.994 11.5075L20 11.575V20.2ZM19.25 19.45V18.7H5.75V19.45H19.25ZM19.25 17.95V12.7H17V17.95H19.25ZM8 12.7H5.75V17.95H8V12.7ZM12.125 12.7H8.75V17.95H12.125V12.7ZM16.25 12.7H12.875V17.95H16.25V12.7ZM12.125 5.94995H8.75V11.95H12.125V10.45H11.375C11.1679 10.45 11 10.2821 11 10.075C11 9.89086 11.1327 9.73774 11.3076 9.70599L11.375 9.69995H12.125V5.94995ZM16.25 5.94995H12.875V11.95H16.25V5.94995Z"/>',
      }}
    />
  )
)

export const tags = ['balcony', 'criteria', 'immobilierneuf']
