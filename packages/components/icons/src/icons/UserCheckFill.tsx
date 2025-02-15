import React from 'react'

import { IconProps } from '../Types'

export const UserCheckFill = ({
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
    data-title="UserCheckFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m9.23,2c-2.27,0-4.12,1.84-4.12,4.12s1.84,4.12,4.12,4.12,4.12-1.84,4.12-4.12-1.84-4.12-4.12-4.12Zm3.13,19.72l-2.27-1.7c-1.03-.77-1.24-2.24-.47-3.27.77-1.03,2.24-1.24,3.27-.47l1.27.95c.37.28.89.2,1.17-.17l.14-.19c.32-.43.43-.99.22-1.49-.05-.13-.11-.25-.17-.37-.29-.58-.68-1.15-1.24-1.55-1-.97-2.26-1.64-3.64-1.91-1.4-.28-2.85-.14-4.18.41-1.32.55-2.45,1.47-3.24,2.66-.79,1.19-1.22,2.58-1.22,4.01v2.08c0,.55.45,1,1,1h9.36Z"/><path fill-rule="evenodd" d="m21.6,12.58c.44.33.53.96.2,1.4l-5.71,7.62c-.16.21-.4.35-.66.39-.26.04-.53-.03-.74-.19l-3.81-2.85c-.44-.33-.53-.96-.2-1.4.33-.44.96-.53,1.4-.2l3.01,2.25,5.11-6.81c.33-.44.96-.53,1.4-.2Z"/>',
    }}
  />
)

UserCheckFill.displayName = 'UserCheckFill'

export const tags = ['UserCheckFill', '']
