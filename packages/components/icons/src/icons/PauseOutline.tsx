import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PauseOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.15123C7.55478 4.15123 3.95122 7.75479 3.95122 12.2C3.95122 16.6452 7.55478 20.2488 12 20.2488C16.4452 20.2488 20.0488 16.6452 20.0488 12.2C20.0488 7.75479 16.4452 4.15123 12 4.15123ZM2 12.2C2 6.67716 6.47715 2.20001 12 2.20001C17.5228 2.20001 22 6.67716 22 12.2C22 17.7229 17.5228 22.2 12 22.2C6.47715 22.2 2 17.7229 2 12.2Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.91733 7.75351C10.4561 7.75351 10.8929 8.19031 10.8929 8.72912V15.671C10.8929 16.2098 10.4561 16.6466 9.91733 16.6466 9.37852 16.6466 8.94172 16.2098 8.94172 15.671V8.72912C8.94172 8.19031 9.37852 7.75351 9.91733 7.75351ZM14.0826 7.75351C14.6214 7.75351 15.0582 8.19031 15.0582 8.72912V15.671C15.0582 16.2098 14.6214 16.6466 14.0826 16.6466 13.5438 16.6466 13.107 16.2098 13.107 15.671V8.72912C13.107 8.19031 13.5438 7.75351 14.0826 7.75351Z"/>',
      }}
    />
  )
)

PauseOutline.displayName = 'PauseOutline'

export const tags = ['pause-outline', 'actions']
