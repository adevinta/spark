import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Calendar2Fill = React.forwardRef(
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
          '<path d="M15.2462 14.7441C14.4439 14.7441 13.7934 15.367 13.7934 16.1354V17.5955C13.7934 18.3639 14.4439 18.9868 15.2462 18.9868H16.7708C17.5731 18.9868 18.2235 18.3639 18.2235 17.5955V16.1354C18.2235 15.367 17.5731 14.7441 16.7708 14.7441H15.2462Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.58111 2.6001C8.22298 2.6001 8.74332 3.09842 8.74332 3.71313V4.29285H15.2567V3.71313C15.2567 3.09842 15.777 2.6001 16.4189 2.6001C17.0608 2.6001 17.5811 3.09842 17.5811 3.71313V4.29285H18.1865C20.2898 4.29285 22 5.9205 22 7.94025V18.9527C22 20.97 20.2969 22.6001 18.191 22.6001H5.80825C3.69905 22.6001 2 20.9621 2 18.9479V7.94502C2 5.92798 3.70738 4.29285 5.81355 4.29285H6.41889V3.71313C6.41889 3.09842 6.93923 2.6001 7.58111 2.6001ZM19.6756 11.5972H4.32442V18.9479C4.32442 19.7385 4.98885 20.374 5.80825 20.374H18.191C19.0137 20.374 19.6756 19.7401 19.6756 18.9527V11.5972Z"/>',
      }}
    />
  )
)

Calendar2Fill.displayName = 'Calendar2Fill'

export const tags = ['calendar2-fill', 'calendar']
