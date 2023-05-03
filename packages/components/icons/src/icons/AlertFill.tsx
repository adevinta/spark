import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlertFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.7998C2 7.27696 6.47715 2.7998 12 2.7998C17.5228 2.7998 22 7.27696 22 12.7998C22 18.3227 17.5228 22.7998 12 22.7998C6.47715 22.7998 2 18.3227 2 12.7998ZM10.5083 16.9208C10.5083 16.1176 11.1595 15.4664 11.9627 15.4664C12.766 15.4664 13.4171 16.1176 13.4171 16.9208C13.4171 17.7241 12.766 18.3753 11.9627 18.3753C11.1595 18.3753 10.5083 17.7241 10.5083 16.9208ZM10.9098 8.56548C10.9098 7.98395 11.3813 7.51253 11.9628 7.51253C12.5443 7.51253 13.0157 7.98395 13.0157 8.56547L13.0157 13.3831C13.0157 13.9646 12.5443 14.4361 11.9628 14.4361C11.3813 14.4361 10.9098 13.9646 10.9098 13.3831L10.9098 8.56548Z"/>',
      }}
    />
  )
)

AlertFill.displayName = 'AlertFill'

export const tags = ['alert-fill', 'alert']
