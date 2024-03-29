import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ComputerAccessory = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ComputerAccessory"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m12,19.5c-2.76,0-5-2.24-5-5v-5c0-2.76,2.24-5,5-5s5,2.24,5,5v5c0,2.76-2.24,5-5,5Zm0-14.25c-2.34,0-4.25,1.91-4.25,4.25v5c0,2.34,1.91,4.25,4.25,4.25s4.25-1.91,4.25-4.25v-5c0-2.34-1.91-4.25-4.25-4.25Z"/><path d="m12,10.88c-.21,0-.38-.17-.38-.38v-3c0-.21.17-.38.38-.38s.38.17.38.38v3c0,.21-.17.38-.38.38Z"/>',
      }}
    />
  )
)

ComputerAccessory.displayName = 'ComputerAccessory'

export const tags = ['ComputerAccessory', '']
