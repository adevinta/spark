import React from 'react'

import { IconProps } from '../Types'

export const MapCursorFill = ({
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
    data-title="MapCursorFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m21.87,5.14c.14-.42.17-.87.07-1.3-.1-.43-.32-.83-.63-1.14-.31-.31-.71-.53-1.14-.63-.43-.1-.88-.08-1.3.07L3.48,7.48c-.37.05-.72.21-.99.48-.32.32-.49.74-.49,1.19s.18.88.49,1.19c.27.27.61.43.98.48l7.17,2.54,2.6,7.16c.05.37.21.71.48.98.32.32.74.49,1.19.49s.88-.18,1.19-.49c.27-.27.44-.62.48-.99l5.28-15.38h0Z"/>',
    }}
  />
)

MapCursorFill.displayName = 'MapCursorFill'

export const tags = ['MapCursorFill', '']
