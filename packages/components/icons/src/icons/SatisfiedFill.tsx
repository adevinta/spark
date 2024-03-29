import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SatisfiedFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SatisfiedFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m12,2C6.47,2,2,6.47,2,12s4.47,10,10,10,10-4.47,10-10S17.53,2,12,2Zm-5.53,11.71c-.16-.49.16-1.06.65-1.22.49-.16,1.06.16,1.22.65.57,1.95,2.76,3.17,4.72,2.68,1.22-.49,2.2-1.46,2.52-2.68.16-.49.65-.81,1.22-.65.49.16.81.65.65,1.22-.49,1.87-2.03,3.33-3.82,3.98h-.08c-2.93.81-6.26-.98-7.07-3.98Zm2.19-6.83c.65,0,1.22.24,1.71.73.49.49.73,1.06.73,1.71,0,.57-.41.98-.98.98s-.98-.41-.98-.98c0-.08-.08-.24-.08-.33s-.33-.16-.41-.16-.24.08-.32.16-.08.16-.08.24c0,.57-.41.98-.98.98s-.98-.41-.98-.98c0-.65.24-1.22.73-1.71s.98-.65,1.63-.65Zm8.05,3.33c-.57,0-.98-.41-.98-.98,0-.08-.08-.24-.08-.33s-.16-.08-.33-.08c-.08,0-.24.08-.33.08-.08.08-.08.16-.08.33,0,.57-.41.98-.98.98s-.98-.41-.98-.98c0-.65.24-1.22.73-1.71.41-.41,1.06-.73,1.71-.73s1.22.24,1.71.73c.49.49.73,1.06.73,1.71-.16.57-.57.98-1.14.98Z"/>',
      }}
    />
  )
)

SatisfiedFill.displayName = 'SatisfiedFill'

export const tags = ['SatisfiedFill', '']
