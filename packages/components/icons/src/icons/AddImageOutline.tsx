import React from 'react'

import { IconProps } from '../Types'

export const AddImageOutline = ({
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
    data-title="AddImageOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m12.02,7.77c0-.55.44-1,.99-1h2.09c.31,0,.6.15.79.39l1.67,2.2h2.16c.56,0,1.19.26,1.61.67.39.4.67.95.67,1.62v7.85c0,.57-.25,1.2-.67,1.62-.39.4-.94.67-1.61.67H5.42c-.56,0-1.19-.26-1.61-.67-.39-.4-.67-.95-.67-1.62v-6.14c0-.55.44-1,.99-1s.99.45.99,1v6.14c0,.05,0,.09.02.11.01.03.03.06.07.09,0,0,0,0,0,0,0,0,0,0,.03.02.02.01.05.03.07.04.03.01.06.02.08.02.02,0,.03,0,.03,0h14.3c.05,0,.09,0,.11-.02.03-.01.06-.03.09-.07,0,0,0,0,0,0,0,0,0,0,.02-.03.01-.02.03-.05.04-.07.01-.03.02-.06.02-.08,0-.02,0-.03,0-.03v-7.85c0-.05,0-.09-.02-.11-.01-.03-.03-.06-.07-.09,0,0,0,0,0,0,0,0,0,0-.03-.02-.02-.01-.05-.03-.07-.04-.03-.01-.06-.02-.08-.02-.02,0-.03,0-.03,0h-2.65c-.31,0-.6-.15-.79-.39l-1.67-2.2h-1.6c-.55,0-.99-.45-.99-1Z"/><path fill-rule="evenodd" d="m8.59,14.86c0-2.25,1.82-3.97,3.94-3.97,2.23,0,3.94,1.84,3.94,3.97,0,2.25-1.82,3.97-3.94,3.97s-3.94-1.73-3.94-3.97Zm3.94-1.97c-1.06,0-1.96.86-1.96,1.97s.9,1.97,1.96,1.97,1.96-.86,1.96-1.97-.86-1.97-1.96-1.97Zm-6.97-2.69c0,.5.41.83.83.83.5,0,.83-.42.83-.83v-2.67h2.73c.5,0,.83-.42.83-.83s-.41-.83-.83-.83h-2.73v-2.83c0-.5-.41-.83-.83-.83-.5,0-.83.42-.83.83v2.83h-2.73c-.5,0-.83.42-.83.83s.41.83.83.83h2.73v2.67Z"/>',
    }}
  />
)

AddImageOutline.displayName = 'AddImageOutline'

export const tags = ['AddImageOutline', '']
