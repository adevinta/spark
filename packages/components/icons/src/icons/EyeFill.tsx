import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const EyeFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.45C22 12.0633 21.8585 11.6902 21.6029 11.4031C19.9844 9.63751 16.3005 6.20001 12 6.20001C7.69951 6.20001 4.01559 9.63751 2.39712 11.4031C2.1415 11.6902 2 12.0633 2 12.45C2 12.8368 2.1415 13.2098 2.39712 13.4969C4.01559 15.2625 7.69951 18.7 12 18.7C16.3005 18.7 19.9844 15.2625 21.6029 13.4969C21.8585 13.2098 22 12.8368 22 12.45ZM9.68802 12.4501C9.68802 11.1557 10.7232 10.1064 12.0001 10.1064C13.277 10.1064 14.3122 11.1557 14.3122 12.4501C14.3122 13.7445 13.277 14.7939 12.0001 14.7939C10.7232 14.7939 9.68802 13.7445 9.68802 12.4501ZM12.0001 8.54386C9.87189 8.54386 8.14662 10.2927 8.14662 12.4501C8.14662 14.6075 9.87189 16.3564 12.0001 16.3564C14.1283 16.3564 15.8536 14.6075 15.8536 12.4501C15.8536 10.2927 14.1283 8.54386 12.0001 8.54386Z"/>',
      }}
    />
  )
)

export const tags = ['eye-fill', 'actions']
