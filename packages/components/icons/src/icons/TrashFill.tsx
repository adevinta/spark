import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const TrashFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1964 6.45001H18.1071H16.0982C16.0982 5.28335 15.6161 4.20001 14.8929 3.45001C14.0893 2.61668 13.0446 2.20001 11.9196 2.20001C10.7946 2.20001 9.75 2.61668 8.94643 3.45001C8.14286 4.28335 7.74107 5.36668 7.74107 6.45001H5.8125H3.72321C3.32143 6.45001 3 6.78335 3 7.20001C3 7.61668 3.32143 7.95001 3.72321 7.95001H5.08929V20.0333C5.08929 20.6167 5.33036 21.2 5.73214 21.5333C6.05357 21.95 6.61607 22.2 7.17857 22.2H16.8214C17.3839 22.2 17.9464 21.95 18.2679 21.5333C18.6696 21.1167 18.9107 20.5333 18.9107 20.0333V7.95001H20.2768C20.6786 7.95001 21 7.61668 21 7.20001C20.9196 6.78335 20.5982 6.45001 20.1964 6.45001ZM10.0714 4.45001C10.5536 3.95001 11.2768 3.61668 12 3.61668C12.7232 3.61668 13.4464 3.95001 13.9286 4.45001C14.4107 4.95001 14.7321 5.70001 14.7321 6.36668H9.26786C9.26786 5.70001 9.58929 5.03335 10.0714 4.45001Z"/>',
      }}
    />
  )
)

TrashFill.displayName = 'TrashFill'

export const tags = ['trash-fill', 'actions']
