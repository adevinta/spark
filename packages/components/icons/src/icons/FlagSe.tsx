import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagSe = React.forwardRef(
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
          '<path d="M23.586 20.213H.414A.414.414 0 0 1 0 19.8V4.903c0-.228.185-.414.414-.414h23.172c.229 0 .414.186.414.414V19.8a.414.414 0 0 1-.414.413Z"/><path d="M24 11.11H9.931V4.49H7.448v6.62H0v2.483h7.448v6.62h2.483v-6.62H24V11.11Z"/>',
      }}
    />
  )
)

FlagSe.displayName = 'FlagSe'

export const tags = ['FlagSE', '']
