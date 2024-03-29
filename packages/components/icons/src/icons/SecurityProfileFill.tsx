import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SecurityProfileFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SecurityProfileFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m13.09,2.19c-.7-.25-1.47-.25-2.17,0l-5.9,2.07c-1.31.46-2.22,1.71-2.18,3.13.07,3.17.43,6.06,2.28,9.06,1.5,2.43,3.63,4.31,6.12,5.39h0c.49.21,1.04.21,1.53,0h0c2.5-1.08,4.63-2.97,6.13-5.4,1.85-3,2.21-5.89,2.27-9.05.03-1.42-.87-2.67-2.18-3.13l-5.9-2.07Zm-.97,16.85c-1.97,0-4.33-2.05-5.12-3.69,1.97-1.64,7.48-2.05,10,0-.55,1.23-2.52,3.69-4.88,3.69Zm2.8-10.05c0,1.52-1.21,2.75-2.71,2.75s-2.71-1.23-2.71-2.75,1.21-2.75,2.71-2.75,2.71,1.23,2.71,2.75Z"/>',
      }}
    />
  )
)

SecurityProfileFill.displayName = 'SecurityProfileFill'

export const tags = ['SecurityProfileFill', '']
