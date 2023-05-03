import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Duplex = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 19.8428C18 20.0401 17.842 20.2 17.6471 20.2H6.35294C6.15802 20.2 6 20.0401 6 19.8428V5.55709C6 5.35985 6.15802 5.19995 6.35294 5.19995H17.6471C17.842 5.19995 18 5.35985 18 5.55709V19.8428ZM17.25 5.94995H6.75V19.45L10.5 19.4492V16.075C10.5 15.8909 10.6327 15.7377 10.8076 15.706L10.875 15.7H13.875C14.0821 15.7 14.25 15.8678 14.25 16.075V19.4492L17.25 19.45L17.2493 13.45H6.75V12.7H17.2493V7.44995H6.75V6.69995H17.2493L17.25 5.94995ZM13.5 16.45H11.25V19.4492H13.5V16.45ZM10.125 8.19995C10.3321 8.19995 10.5 8.36784 10.5 8.57495V10.825C10.5 11.0321 10.3321 11.2 10.125 11.2H7.875C7.66789 11.2 7.5 11.0321 7.5 10.825V8.57495C7.5 8.36784 7.66789 8.19995 7.875 8.19995H10.125ZM16.125 8.19995C16.3321 8.19995 16.5 8.36784 16.5 8.57495V10.825C16.5 11.0321 16.3321 11.2 16.125 11.2H13.875C13.6679 11.2 13.5 11.0321 13.5 10.825V8.57495C13.5 8.36784 13.6679 8.19995 13.875 8.19995H16.125ZM9.75 8.94995H8.25V10.45H9.75V8.94995ZM15.75 8.94995H14.25V10.45H15.75V8.94995Z"/>',
      }}
    />
  )
)

Duplex.displayName = 'Duplex'

export const tags = ['duplex', 'criteria', 'immobilierneuf']
