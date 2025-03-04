import React from 'react'

import { IconProps } from '../Types'

export const UserCheckOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ref,
  ...props
}: IconProps) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-title="UserCheckOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m21.6,12.58c.44.33.53.96.2,1.4l-5.7,7.62c-.16.21-.4.35-.66.39-.26.04-.53-.03-.74-.19l-3.81-2.85c-.44-.33-.53-.96-.2-1.4.33-.44.96-.53,1.4-.2l3.01,2.25,5.1-6.81c.33-.44.96-.53,1.4-.2ZM9.23,4c-1.17,0-2.12.95-2.12,2.12s.95,2.12,2.12,2.12,2.12-.95,2.12-2.12-.95-2.12-2.12-2.12Zm-4.12,2.12c0-2.27,1.84-4.12,4.12-4.12s4.12,1.84,4.12,4.12-1.84,4.12-4.12,4.12-4.12-1.84-4.12-4.12Z"/><path fill-rule="evenodd" d="m10.25,13.52c-1.01-.2-2.06-.1-3.02.3-.96.4-1.77,1.07-2.35,1.92-.57.86-.88,1.87-.88,2.9v1.08h2.46c.55,0,1,.45,1,1s-.45,1-1,1h-3.46c-.55,0-1-.45-1-1v-2.08c0-1.43.43-2.83,1.22-4.01.79-1.19,1.92-2.11,3.24-2.66,1.32-.55,2.77-.69,4.18-.41,1.4.28,2.69.97,3.7,1.98.39.39.39,1.02,0,1.41-.39.39-1.02.39-1.41,0-.73-.73-1.66-1.23-2.68-1.43Z"/>',
    }}
  />
)

UserCheckOutline.displayName = 'UserCheckOutline'

export const tags = ['UserCheckOutline', '']
