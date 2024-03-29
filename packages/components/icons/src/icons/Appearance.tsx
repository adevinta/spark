import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Appearance = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Appearance"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m4.6,4.71h14.8c.55,0,1,.47,1,1.04s-.45,1.04-1,1.04H4.6c-.55,0-1-.47-1-1.04s.45-1.04,1-1.04Zm0,3.75h14.8c1.43,0,2.6-1.22,2.6-2.71s-1.17-2.71-2.6-2.71H4.6c-1.43,0-2.6,1.22-2.6,2.71s1.17,2.71,2.6,2.71Zm0,8.75h14.8c.55,0,1,.47,1,1.04s-.45,1.04-1,1.04H4.6c-.55,0-1-.47-1-1.04s.45-1.04,1-1.04Zm0,3.75h14.8c1.43,0,2.6-1.22,2.6-2.71s-1.17-2.71-2.6-2.71H4.6c-1.43,0-2.6,1.22-2.6,2.71s1.17,2.71,2.6,2.71Zm-.42-11.25h15.64c1.2,0,2.18.97,2.18,2.18,0,1.2-.98,2.18-2.18,2.18H4.18c-1.2,0-2.18-.98-2.18-2.18,0-1.2.98-2.18,2.18-2.18Z"/>',
      }}
    />
  )
)

Appearance.displayName = 'Appearance'

export const tags = ['Appearance', '']
