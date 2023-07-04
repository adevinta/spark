import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagAt = React.forwardRef(
  ({ title, fill = 'none', stroke = 'none', ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill="#FF4B55" d="M24 9.73H0V4.904c0-.228.185-.414.414-.414h23.172c.229 0 .414.186.414.414v4.828ZM23.586 20.213H.414A.414.414 0 0 1 0 19.8v-4.828h24V19.8a.414.414 0 0 1-.414.413Z"/><path fill="#F5F5F5" d="M0 9.73h24v5.241H0z"/>',
      }}
    />
  )
)

FlagAt.displayName = 'FlagAt'

export const tags = ['FlagAT', '']
