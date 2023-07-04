import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagVn = React.forwardRef(
  ({ title, fill = 'none', stroke = 'none', ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill="#FF4B55" d="M23.586 20.213H.414A.414.414 0 0 1 0 19.8V4.903c0-.228.185-.414.414-.414h23.172c.229 0 .414.186.414.414V19.8a.414.414 0 0 1-.414.413Z"/><path fill="#FFE15A" d="m12.193 7.662 1.107 3.319 3.498.027a.204.204 0 0 1 .119.367l-2.814 2.078 1.055 3.335a.204.204 0 0 1-.312.227L12 14.981l-2.846 2.034a.204.204 0 0 1-.312-.227l1.055-3.335-2.814-2.078a.204.204 0 0 1 .12-.367l3.497-.027 1.107-3.319a.204.204 0 0 1 .386 0Z"/>',
      }}
    />
  )
)

FlagVn.displayName = 'FlagVn'

export const tags = ['FlagVN', '']
