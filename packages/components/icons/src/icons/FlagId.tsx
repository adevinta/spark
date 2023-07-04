import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagId = React.forwardRef(
  ({ title, fill = 'none', stroke = 'none', ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill="#C8414B" d="M24 12.351H0V4.903c0-.228.185-.414.414-.414h23.172c.229 0 .414.186.414.414v7.448Z"/><path fill="#F5F5F5" d="M0 12.351h24V19.8a.414.414 0 0 1-.414.413H.414A.414.414 0 0 1 0 19.8V12.35Z"/>',
      }}
    />
  )
)

FlagId.displayName = 'FlagId'

export const tags = ['FlagID', '']
