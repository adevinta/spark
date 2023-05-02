import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Computer = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2C0.9 2 0 2.92093 0 4.04651V17.6865C0 18.8121 0.9 19.733 2 19.733H8.61L7.88 21.6056H7C6.36 21.6056 5.83 22.1377 5.83 22.8028C5.83 23.4679 6.35 24 7 24H8.69H15.31H17C17.64 24 18.17 23.4679 18.17 22.8028C18.17 22.1377 17.65 21.6056 17 21.6056H16.12L15.39 19.733H22C23.1 19.733 24 18.8121 24 17.6865V4.04651C24 2.92093 23.1 2 22 2ZM13.61 21.6158H10.39L11.12 19.7433H12.87L13.6 21.6158H13.61ZM21.67 17.3488H13.69H10.31H2.33V4.38419H21.66V17.3488H21.67Z"/>',
      }}
    />
  )
)

Computer.displayName = 'Computer'

export const tags = ['computer', 'categories']
