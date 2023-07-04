import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagCh = React.forwardRef(
  ({ title, fill = 'none', stroke = 'none', ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill="#FF4B55" d="M23.586 20.213H.414A.414.414 0 0 1 0 19.8V4.903c0-.228.185-.414.414-.414h23.172c.229 0 .414.186.414.414V19.8a.414.414 0 0 1-.414.413Z"/><path fill="#F5F5F5" d="M16.552 10.696h-2.897V7.8a.414.414 0 0 0-.414-.414H10.76a.414.414 0 0 0-.414.414v2.896H7.448a.414.414 0 0 0-.414.414v2.483c0 .228.186.414.414.414h2.897v2.896c0 .229.185.414.414.414h2.482a.414.414 0 0 0 .414-.414v-2.897h2.897a.414.414 0 0 0 .413-.413V11.11a.414.414 0 0 0-.413-.414Z"/>',
      }}
    />
  )
)

FlagCh.displayName = 'FlagCh'

export const tags = ['FlagCH', '']
