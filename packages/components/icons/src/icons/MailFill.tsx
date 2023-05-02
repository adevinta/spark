import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MailFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.9917 13.5428H22V17.3539C22 19.2552 20.484 20.8 18.6181 20.8H5.38192C3.51603 20.8 2 19.2552 2 17.3539V8.2462C2 6.34488 3.51603 4.80005 5.38192 4.80005H18.6181C20.4173 4.80005 21.8917 6.24302 21.9917 8.05098V13.5428ZM10.477 14.8435L3.91281 9.67057C3.47432 9.32502 3.39315 8.68214 3.73066 8.23425C4.06865 7.78573 4.69895 7.70195 5.13806 8.04799L11.7023 13.2209C11.7736 13.2771 11.8772 13.3169 11.9956 13.3169C12.1141 13.3169 12.2177 13.2771 12.289 13.221L18.8532 8.04799C19.2923 7.70195 19.9226 7.78573 20.2606 8.23425C20.5981 8.68214 20.5169 9.32502 20.0785 9.67057L13.5143 14.8435C13.0786 15.1868 12.5403 15.3662 11.9956 15.3662C11.451 15.3662 10.9127 15.1869 10.477 14.8435Z"/>',
      }}
    />
  )
)

export const tags = ['mail-fill', 'contact']
