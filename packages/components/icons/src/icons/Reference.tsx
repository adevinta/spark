import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Reference = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6121 5.19995C17.8025 5.19995 17.9609 5.33223 17.9938 5.50667L18 5.57388V19.826C18 20.0096 17.8628 20.1623 17.6818 20.1939L17.6121 20.2H6.3879C6.19747 20.2 6.03909 20.0677 6.00625 19.8932L6 19.826V8.18794C6 8.12078 6.01875 8.0553 6.05369 7.99812L6.09394 7.94397L8.42852 5.32991C8.48747 5.2639 8.56795 5.22033 8.65561 5.20555L8.72248 5.19995H17.6121ZM17.25 5.94782L8.991 5.9477L8.96539 8.20229C8.96539 8.42384 9 8.94995 8.6578 8.94391L8.59039 8.94995H6.75V19.452H17.25V5.94782ZM15.375 17.2C15.5821 17.2 15.75 17.3678 15.75 17.575C15.75 17.759 15.6173 17.9122 15.4424 17.9439L15.375 17.95H13.875C13.6679 17.95 13.5 17.7821 13.5 17.575C13.5 17.3909 13.6327 17.2377 13.8076 17.206L13.875 17.2H15.375ZM12.375 13.45C12.5821 13.45 12.75 13.6178 12.75 13.825C12.75 14.009 12.6173 14.1622 12.4424 14.1939L12.375 14.2H8.625C8.41789 14.2 8.25 14.0321 8.25 13.825C8.25 13.6409 8.38266 13.4877 8.55759 13.456L8.625 13.45H12.375ZM14.625 11.95C14.8321 11.95 15 12.1178 15 12.325C15 12.509 14.8673 12.6622 14.6924 12.6939L14.625 12.7H8.625C8.41789 12.7 8.25 12.5321 8.25 12.325C8.25 12.1409 8.38266 11.9877 8.55759 11.956L8.625 11.95H14.625ZM8.25 6.64595L6.75 8.19995V8.2022L8.25 8.20229V6.64595ZM15.375 6.69995C15.5821 6.69995 15.75 6.86784 15.75 7.07495C15.75 7.25905 15.6173 7.41216 15.4424 7.44391L15.375 7.44995H11.625C11.4179 7.44995 11.25 7.28206 11.25 7.07495C11.25 6.89086 11.3827 6.73774 11.5576 6.70599L11.625 6.69995H15.375Z"/>',
      }}
    />
  )
)

export const tags = ['reference', 'criteria', 'immobilier']
