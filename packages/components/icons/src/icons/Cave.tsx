import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Cave = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Cave"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.69,15.36h0v3.38h-4.12v-.82c0-.21-.17-.38-.38-.38h-1.48v-.82c0-.21-.17-.38-.38-.38h-1.48v-.82c0-.21-.17-.38-.38-.38h-1.48v-.44h9.69v.67Zm-11.37,0h0v-.68h.93v.82c0,.21.17.38.38.38h1.48v.82c0,.21.17.38.38.38h1.48v.82c0,.21.17.38.38.38h1.48v.44h-6.5v-3.37Zm4.68-1.43h1.97v-4.55h-1.97v4.55Zm-4.68-5.69l5.7-2.94,5.67,2.92v5.71h-3.96v-4.93c0-.21-.17-.38-.38-.38h-2.73c-.21,0-.38.17-.38.38v4.93h-3.93v-5.69Zm12.31,5.69h-.18v-5.32h0c.06.03.11.04.17.04.14,0,.27-.07.34-.2.1-.19.02-.42-.16-.51l-6.6-3.41c-.11-.06-.24-.06-.35,0l-6.61,3.41c-.19.1-.26.32-.16.51.09.18.3.25.48.17v5.31h-.18c-.21,0-.38.17-.38.38s.17.38.38.38h.18v.67h0v3.76c0,.21.17.38.38.38h12.13c.21,0,.38-.17.38-.38v-3.75h0v-.68h.18c.21,0,.38-.17.38-.38s-.17-.38-.38-.38Z"/>',
      }}
    />
  )
)

Cave.displayName = 'Cave'

export const tags = ['Cave', '']
