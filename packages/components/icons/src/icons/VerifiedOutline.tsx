import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const VerifiedOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="VerifiedOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12.48,4.1c-.31-.11-.65-.11-.96,0l-5.73,2.02c-.59.21-.97.76-.96,1.36.06,2.96.4,5.41,1.95,7.93,1.28,2.07,3.08,3.66,5.15,4.56.04.02.08.02.12,0,2.08-.9,3.88-2.49,5.16-4.57,1.55-2.53,1.89-4.97,1.95-7.93.01-.6-.37-1.15-.96-1.36l-5.73-2.02Zm-1.62-1.9c.74-.26,1.54-.26,2.28,0l5.73,2.02c1.38.49,2.33,1.8,2.3,3.31-.07,3.1-.42,5.97-2.25,8.95-1.48,2.41-3.59,4.28-6.07,5.36h0c-.54.23-1.15.23-1.69,0h0c-2.48-1.08-4.58-2.95-6.06-5.35-1.83-2.98-2.18-5.85-2.25-8.95-.03-1.5.92-2.82,2.3-3.31l5.73-2.02Zm5.46,6.07c.43.35.49.99.14,1.42l-4.18,5.12c-.15.18-.34.33-.56.43-.22.1-.45.15-.69.15h0c-.24,0-.48-.06-.69-.17-.21-.11-.4-.26-.55-.45l-1.63-2.11c-.34-.44-.26-1.07.18-1.41.44-.34,1.06-.26,1.4.18l1.32,1.71,3.86-4.72c.35-.43.98-.49,1.41-.14Zm-4.96,5.26h0s0,0,0,0Z"/>',
      }}
    />
  )
)

VerifiedOutline.displayName = 'VerifiedOutline'

export const tags = ['VerifiedOutline', '']
