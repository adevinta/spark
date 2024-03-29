import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Function = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Function"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m13.12,5c1.04,0,1.88.82,1.88,1.84v1.11h2.71c.95,0,1.72.76,1.78,1.72v.12s0,7.37,0,7.37c0,1.02-.8,1.84-1.79,1.84H6.29c-.99,0-1.79-.82-1.79-1.84v-7.37c0-1.02.8-1.84,1.79-1.84h2.71v-1.11c0-.98.77-1.78,1.75-1.84h.12s2.25,0,2.25,0Zm-3.38,7.37h-4.54v4.79c0,.57.43,1.05.97,1.1h.1s11.43,0,11.43,0c.59,0,1.07-.49,1.07-1.11v-4.79h-4.54v1.17c0,.15-.13.28-.31.3h-.07s-3.75,0-3.75,0c-.21,0-.38-.14-.38-.31v-1.17Zm3.75,0h-3v.74h3v-.74Zm4.21-3.68H6.29c-.59,0-1.07.49-1.07,1.11v1.84s4.54,0,4.54,0v-1.17c0-.15.13-.28.31-.3h.07s3.75,0,3.75,0c.21,0,.38.14.38.31v1.17h4.54v-1.84c0-.57-.42-1.05-.97-1.1h-.1Zm-4.21,2.21h-3v.74h3v-.74Zm-.38-5.16h-2.25c-.62,0-1.12.49-1.12,1.11v1.11h4.5v-1.11c0-.57-.45-1.05-1.02-1.1h-.11Z"/>',
      }}
    />
  )
)

Function.displayName = 'Function'

export const tags = ['Function', '']
