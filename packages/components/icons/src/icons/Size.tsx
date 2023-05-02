import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Size = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3 8.19995C19.6866 8.19995 20 8.4971 20 8.86365V16.5363C20 16.9028 19.6866 17.2 19.3 17.2H5.7C5.3134 17.2 5 16.9028 5 16.5363V8.86365C5 8.4971 5.3134 8.19995 5.7 8.19995H19.3ZM7.25 8.94995H5.75V14.9492L15.1162 14.95C15.3282 14.95 15.5 15.1178 15.5 15.325C15.5 15.509 15.3642 15.6622 15.1852 15.6939L15.1162 15.7L5.75 15.6992V16.45H19.25V8.94995H17V11.5333C17 11.7634 16.8321 11.95 16.625 11.95C16.4409 11.95 16.2878 11.8026 16.256 11.6082L16.25 11.5333V8.94995H14.75V10.7129C14.75 10.9819 14.5821 11.2 14.375 11.2C14.1909 11.2 14.0378 11.0277 14.006 10.8005L14 10.7129V8.94995H12.5V11.5333C12.5 11.7634 12.3321 11.95 12.125 11.95C11.9409 11.95 11.7878 11.8026 11.756 11.6082L11.75 11.5333V8.94995H10.25V10.7129C10.25 10.9819 10.0821 11.2 9.875 11.2C9.69091 11.2 9.53779 11.0277 9.50604 10.8005L9.5 10.7129V8.94995H8V11.5333C8 11.7634 7.83211 11.95 7.625 11.95C7.44091 11.95 7.28779 11.8026 7.25604 11.6082L7.25 11.5333V8.94995Z"/>',
      }}
    />
  )
)

Size.displayName = 'Size'

export const tags = ['size', 'criteria', 'mode']
