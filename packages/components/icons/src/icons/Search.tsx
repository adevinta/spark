import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Search = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5006 4.15123C6.8835 4.15123 3.95124 7.08347 3.95124 10.7006C3.95124 14.3177 6.8835 17.2499 10.5006 17.2499C14.1178 17.2499 17.05 14.3177 17.05 10.7006C17.05 7.08347 14.1178 4.15123 10.5006 4.15123ZM2 10.7006C2 6.00584 5.80586 2.20001 10.5006 2.20001C15.1954 2.20001 19.0013 6.00584 19.0013 10.7006C19.0013 15.3953 15.1954 19.2011 10.5006 19.2011C5.80586 19.2011 2 15.3953 2 10.7006Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1281 15.3282C15.5091 14.9472 16.1268 14.9472 16.5078 15.3282L21.7142 20.5345C22.0953 20.9155 22.0953 21.5333 21.7142 21.9143C21.3332 22.2953 20.7155 22.2953 20.3345 21.9143L15.1281 16.7079C14.7471 16.3269 14.7471 15.7092 15.1281 15.3282Z"/>',
      }}
    />
  )
)

export const tags = ['search', 'actions']
