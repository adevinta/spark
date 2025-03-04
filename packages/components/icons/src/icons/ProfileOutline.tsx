import React from 'react'

import { IconProps } from '../Types'

export const ProfileOutline = ({
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
    data-title="ProfileOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m12,5.38c-2.28,0-4.13,1.85-4.13,4.13s1.85,4.12,4.13,4.12,4.12-1.85,4.12-4.12-1.85-4.13-4.12-4.13Zm-2.13,4.13c0-1.17.95-2.13,2.13-2.13s2.12.95,2.12,2.13-.95,2.12-2.12,2.12-2.13-.95-2.13-2.12Z"/><path fill-rule="evenodd" d="m4.95,19.09c-1.82-1.81-2.95-4.32-2.95-7.09C2,6.48,6.48,2,12,2s10,4.48,10,10c0,2.77-1.13,5.28-2.95,7.09v.03s-.38.33-.38.33c-1.77,1.59-4.11,2.55-6.67,2.55h0c-.06,0-.13,0-.19,0-2.49-.05-4.75-1-6.47-2.55l-.39-.33v-.03Zm-.95-7.09c0-4.42,3.58-8,8-8s8,3.58,8,8c0,2.04-.77,3.91-2.03,5.32-1.39-1.76-3.58-2.84-5.97-2.84s-4.59,1.08-5.97,2.84c-1.26-1.41-2.03-3.28-2.03-5.32Zm7.65,7.99c.11,0,.21,0,.32,0h.03c1.65,0,3.19-.5,4.46-1.36-1-1.32-2.63-2.16-4.46-2.16s-3.46.84-4.46,2.16c1.19.8,2.6,1.29,4.12,1.36Z"/>',
    }}
  />
)

ProfileOutline.displayName = 'ProfileOutline'

export const tags = ['ProfileOutline', '']
