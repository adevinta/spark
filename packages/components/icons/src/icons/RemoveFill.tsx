import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const RemoveFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.1997C22 17.7226 17.5228 22.1997 12 22.1997C6.47715 22.1997 2 17.7226 2 12.1997C2 6.67686 6.47715 2.19971 12 2.19971C17.5228 2.19971 22 6.67686 22 12.1997ZM7.83333 11.1997C7.28105 11.1997 6.83333 11.6474 6.83333 12.1997C6.83333 12.752 7.28105 13.1997 7.83333 13.1997H16.3718C16.9241 13.1997 17.3718 12.752 17.3718 12.1997C17.3718 11.6474 16.9241 11.1997 16.3718 11.1997H7.83333Z"/>',
      }}
    />
  )
)

RemoveFill.displayName = 'RemoveFill'

export const tags = ['RemoveFill', '']
