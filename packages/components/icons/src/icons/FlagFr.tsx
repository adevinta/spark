import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagFr = React.forwardRef(
  ({ title, fill = 'none', stroke = 'none', ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill="#41479B" d="M8 20.213H.414A.414.414 0 0 1 0 19.8V4.903c0-.228.185-.414.414-.414H8v15.724Z"/><path fill="#F5F5F5" d="M8 4.489h8v15.724H8z"/><path fill="#FF4B55" d="M23.586 20.213H16V4.49h7.586c.229 0 .414.186.414.414V19.8a.414.414 0 0 1-.414.413Z"/>',
      }}
    />
  )
)

FlagFr.displayName = 'FlagFr'

export const tags = ['FlagFR', '']
