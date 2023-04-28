import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const OfferFill = React.forwardRef(
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
          '<path d="M21.4239 13.405L10.4774 2.41322C10.3128 2.24793 10.1481 2.16529 9.98354 2.08264C9.81893 2 9.65432 2 9.40741 2L4.05761 2.82645C3.7284 2.82645 3.48148 2.99174 3.23457 3.15702C2.98765 3.4876 2.82305 3.81818 2.82305 3.98347L2 9.52066C2 9.68595 2 9.93388 2.0823 10.0992C2.16461 10.2645 2.24691 10.4298 2.41152 10.5124L13.358 21.5041C13.6872 21.8347 14.1811 22 14.6749 22C15.1687 22 15.5802 21.8347 15.9918 21.5041L21.5062 15.9669C21.8354 15.6364 22 15.1405 22 14.6446C21.9177 14.2314 21.7531 13.8182 21.4239 13.405ZM7.84362 9.43802C7.02058 9.43802 6.36214 8.77686 6.36214 7.95041C6.36214 7.12397 7.02058 6.46281 7.84362 6.46281C8.66667 6.46281 9.3251 7.12397 9.3251 7.95041C9.3251 8.77686 8.66667 9.43802 7.84362 9.43802Z"/>',
      }}
    />
  )
)

export const tags = ['offer-fill', 'account']
