import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const NeutralFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="NeutralFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m12,2C6.47,2,2,6.47,2,12s4.47,10,10,10,10-4.47,10-10S17.53,2,12,2Zm4.88,14.47H7.12c-.57,0-.98-.41-.98-.98s.41-.98.98-.98h9.76c.57,0,.98.41.98.98s-.49.98-.98.98Zm-9.27-6.91c0-.73.57-1.3,1.3-1.3s1.3.57,1.3,1.3-.57,1.3-1.3,1.3-1.3-.57-1.3-1.3Zm7.48-1.38c.73,0,1.3.57,1.3,1.3s-.57,1.3-1.3,1.3-1.3-.57-1.3-1.3c-.08-.65.57-1.3,1.3-1.3Z"/>',
      }}
    />
  )
)

NeutralFill.displayName = 'NeutralFill'

export const tags = ['NeutralFill', '']
