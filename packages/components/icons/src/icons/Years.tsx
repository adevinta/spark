import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Years = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5.19995C15.6909 5.19995 15.8497 5.33261 15.8826 5.50754L15.8889 5.57495V5.94995H18.6316C18.8124 5.94995 18.9629 6.08261 18.9941 6.25754L19 6.32495V19.825C19 20.0321 18.8351 20.2 18.6316 20.2H5.36842C5.16495 20.2 5 20.0321 5 19.825V6.32495C5 6.11784 5.16495 5.94995 5.36842 5.94995H8.11111V5.57495C8.11111 5.36784 8.28522 5.19995 8.5 5.19995C8.69091 5.19995 8.8497 5.33261 8.88262 5.50754L8.88889 5.57495V5.94995H15.1111V5.57495C15.1111 5.36784 15.2852 5.19995 15.5 5.19995ZM18.2214 9.69995H5.777L5.77778 19.45H18.2222L18.2214 9.69995ZM17.0256 13.45C17.2569 13.45 17.4444 13.6178 17.4444 13.825V18.325C17.4444 18.5321 17.2569 18.7 17.0256 18.7H6.97436C6.74306 18.7 6.55556 18.5321 6.55556 18.325V13.825C6.55556 13.6178 6.74306 13.45 6.97436 13.45H17.0256ZM16.6667 14.2H7.33333V17.95H16.6667V14.2ZM8.11111 6.69995H5.77778L5.777 8.94995H18.2214L18.2222 6.69995H15.8889V7.82495C15.8889 8.03206 15.7148 8.19995 15.5 8.19995C15.3091 8.19995 15.1503 8.06729 15.1174 7.89236L15.1111 7.82495V6.69995H8.88889V7.82495C8.88889 8.03206 8.71478 8.19995 8.5 8.19995C8.30909 8.19995 8.1503 8.06729 8.11738 7.89236L8.11111 7.82495V6.69995Z"/>',
      }}
    />
  )
)

Years.displayName = 'Years'

export const tags = ['years', 'criteria', 'automobile']
