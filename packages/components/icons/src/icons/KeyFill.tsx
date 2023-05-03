import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const KeyFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.45377 14.2227C6.4538 14.2227 5.63548 13.4102 5.63548 12.4177C5.63548 11.4253 6.4538 10.6128 7.45377 10.6128C8.45375 10.6128 9.27206 11.4253 9.27206 12.4177C9.27206 13.4102 8.45375 14.2227 7.45377 14.2227ZM12.5902 10.6127C11.7269 8.18443 9.18116 6.55031 6.33539 7.11029C4.25378 7.52528 2.56299 9.17691 2.1255 11.2444C1.38052 14.7368 4.05379 17.8334 7.4537 17.8334C9.82697 17.8334 11.8453 16.3251 12.5902 14.2226H16.5451V16.0276C16.5451 17.02 17.3634 17.8334 18.3634 17.8334C19.3634 17.8334 20.1817 17.02 20.1817 16.0276V14.2226C21.1825 14.2226 22 13.4101 22 12.4177C22 11.4252 21.1825 10.6127 20.1817 10.6127H12.5902Z"/>',
      }}
    />
  )
)

KeyFill.displayName = 'KeyFill'

export const tags = ['key-fill', 'account']
