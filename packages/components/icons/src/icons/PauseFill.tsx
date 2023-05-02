import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PauseFill = React.forwardRef(
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
          '<path d="M12 2.20001C6.5 2.20001 2 6.70001 2 12.2C2 17.7 6.5 22.2 12 22.2C17.5 22.2 22 17.7 22 12.2C22 6.70001 17.5 2.20001 12 2.20001ZM14.8333 15.7833C14.8333 16.2 14.5 16.5333 14.0833 16.5333C13.6667 16.5333 13.3333 16.2 13.3333 15.7833V8.61668C13.3333 8.20001 13.6667 7.86668 14.0833 7.86668C14.5 7.86668 14.8333 8.20001 14.8333 8.61668V15.7833ZM10.5833 8.61668V15.7833C10.5833 16.2 10.25 16.5333 9.83333 16.5333C9.41667 16.5333 9.08333 16.2 9.08333 15.7833V8.61668C9.08333 8.20001 9.41667 7.86668 9.83333 7.86668C10.25 7.86668 10.5833 8.20001 10.5833 8.61668Z"/>',
      }}
    />
  )
)

PauseFill.displayName = 'PauseFill'

export const tags = ['pause-fill', 'actions']
