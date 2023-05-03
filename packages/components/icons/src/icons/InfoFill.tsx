import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const InfoFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.7998C2 7.27696 6.47715 2.7998 12 2.7998C17.5228 2.79981 22 7.27696 22 12.7998C22 18.3227 17.5228 22.7998 12 22.7998C6.47715 22.7998 2 18.3227 2 12.7998ZM13.0156 17.3223C13.0156 17.9038 12.5442 18.3753 11.9626 18.3753C11.3811 18.3753 10.9097 17.9038 10.9097 17.3223L10.9097 12.5047C10.9097 11.9231 11.3811 11.4517 11.9626 11.4517C12.5442 11.4517 13.0156 11.9231 13.0156 12.5047L13.0156 17.3223ZM13.4171 8.96695C13.4171 9.7702 12.766 10.4214 11.9627 10.4214C11.1595 10.4214 10.5083 9.7702 10.5083 8.96695C10.5083 8.1637 11.1595 7.51253 11.9627 7.51253C12.766 7.51253 13.4171 8.1637 13.4171 8.96695Z"/>',
      }}
    />
  )
)

InfoFill.displayName = 'InfoFill'

export const tags = ['info-fill', 'alert']
