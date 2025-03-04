import React from 'react'

import { IconProps } from '../Types'

export const AlarmOffOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ref,
  ...props
}: IconProps) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-title="AlarmOffOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m15.02,4.42c-.32-.15-.64-.28-.98-.39-.04-1.13-.98-2.03-2.14-2.03s-2.09.9-2.14,2.03c-1.07.34-2.05.92-2.85,1.72-1.32,1.31-2.06,3.08-2.06,4.93s-.2,3.1-.48,4.02c-.16.54.15,1.1.7,1.25.54.16,1.11-.15,1.27-.69.34-1.15.56-2.64.56-4.59,0-1.31.53-2.57,1.47-3.5.94-.93,2.21-1.45,3.54-1.45.77,0,1.53.18,2.21.51.51.25,1.12.04,1.37-.46.25-.5.04-1.11-.46-1.35Z"/><path fill-rule="evenodd" d="m18.1,7.34l3.6-3.54c.4-.39.4-1.03,0-1.43s-1.05-.39-1.45,0L2.3,20.04c-.4.39-.4,1.03,0,1.43.4.39,1.05.39,1.45,0l1.88-1.85h3.14c.18.69.59,1.29,1.15,1.72.57.43,1.26.66,1.98.66s1.41-.23,1.98-.66c.57-.43.97-1.03,1.15-1.72h0s2.98,0,2.98,0c.96,0,1.82-.43,2.19-1.3.33-.79.14-1.67-.26-2.39-.5-.9-.98-2.45-.98-5.25,0-1.17-.3-2.32-.86-3.33Zm-1.54,1.52l-8.88,8.74h10.33c.19,0,.27-.04.28-.05h0s.06-.25-.17-.66c-.71-1.29-1.23-3.2-1.23-6.21,0-.63-.12-1.24-.35-1.81Z"/>',
    }}
  />
)

AlarmOffOutline.displayName = 'AlarmOffOutline'

export const tags = ['AlarmOffOutline', '']
