import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Garden = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Garden"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m16.5,6.47l-.75-.95-.75.95v2.53h-.75v-2.67c0-.07.02-.14.05-.2l.04-.06,1.12-1.43c.13-.17.37-.19.53-.05l.05.05,1.12,1.43c.04.05.07.12.08.19v.07s0,2.67,0,2.67h1.89c.2,0,.36.17.36.38v3c0,.21-.16.38-.36.38h-1.89v6.35c0,.2-.13.36-.31.39h-.07s-2.25,0-2.25,0c-.18,0-.34-.14-.37-.33v-.07s0-6.35,0-6.35h-.75v6.35c0,.2-.13.36-.31.39h-.07s-2.25,0-2.25,0c-.18,0-.34-.14-.37-.33v-.07s0-6.35,0-6.35h-.75v6.35c0,.2-.13.36-.31.39h-.07s-2.25,0-2.25,0c-.18,0-.34-.14-.37-.33v-.07s0-6.35,0-6.35h-1.89c-.2,0-.36-.17-.36-.38v-3c0-.21.16-.38.36-.38h1.89v-2.67c0-.07.02-.14.05-.2l.04-.06,1.12-1.43c.13-.17.37-.19.53-.05l.05.05,1.12,1.43c.04.05.07.12.08.19v.07s0,2.67,0,2.67h.75v-2.67c0-.07.02-.14.05-.2l.04-.06,1.12-1.43c.13-.17.37-.19.53-.05l.05.05,1.12,1.43c.04.05.07.12.08.19v.07s0,2.67,0,2.67h3v-2.53Zm-7.5,6.28h-1.5v5.95h1.5v-5.95Zm3.75,0h-1.5v5.95h1.5v-5.95Zm6.07-3H5.18v2.25h13.64v-2.25Zm-10.57-4.23l-.75.95v2.53h1.5v-2.53l-.75-.95Zm4.5,3.48v-2.53l-.75-.95-.75.95v2.53h1.5Zm2.25,3.75v5.95h1.5v-5.95h-1.5Z"/>',
      }}
    />
  )
)

Garden.displayName = 'Garden'

export const tags = ['Garden', '']
