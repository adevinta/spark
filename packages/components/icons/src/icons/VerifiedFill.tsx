import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const VerifiedFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="VerifiedFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m13.14,2.2c-.74-.26-1.54-.26-2.28,0l-5.73,2.02c-1.38.49-2.33,1.8-2.3,3.31.07,3.1.42,5.98,2.25,8.95,1.48,2.4,3.59,4.28,6.06,5.35h0c.54.23,1.15.23,1.69,0h0c2.48-1.08,4.59-2.95,6.07-5.36,1.83-2.98,2.18-5.85,2.25-8.95.03-1.5-.92-2.82-2.3-3.31l-5.73-2.02Zm3.31,7.49c.35-.43.29-1.06-.14-1.42-.43-.35-1.06-.29-1.41.14l-3.86,4.72-1.32-1.71c-.34-.44-.97-.52-1.4-.18-.44.34-.51.97-.18,1.41l1.63,2.11c.15.19.33.35.55.45.22.11.45.17.69.17.24,0,.47-.05.69-.15.22-.1.41-.25.56-.43h0s4.18-5.12,4.18-5.12Z"/>',
      }}
    />
  )
)

VerifiedFill.displayName = 'VerifiedFill'

export const tags = ['VerifiedFill', '']
