import React from 'react'

import { IconProps } from '../Types'

export const FireFill = ({
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
    data-title="FireFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m11.27,2.16c-.24-.08-.49-.16-.73-.16s-.57.08-.82.24l-.08.08c-.24.16-.41.4-.49.73s0,.65.16.89c.82,1.38,1.22,2.91,1.22,4.37,0,1.13-.24,2.1-.73,2.91-.49-.49-.82-1.13-1.14-1.78-.08-.16-.24-.4-.57-.49-.33-.08-.57-.08-.82.08-1.06.57-1.88,1.38-2.45,2.43-.57,1.05-.9,2.18-.82,3.32,0,.97.24,1.94.73,2.91.41.89,1.06,1.7,1.79,2.35.73.65,1.63,1.21,2.61,1.54.98.32,1.96.49,2.94.4,2.45,0,4.4-.81,5.79-2.1,1.39-1.29,2.04-3.15,2.12-5.1.16-4.61-3.1-10.03-8.72-12.62Zm.49,15.37c0-.57.41-.97.98-.97.49,0,.98-.16,1.3-.57.33-.32.57-.81.57-1.29,0-.57.41-.97.98-.97s.98.4.98.97c0,.97-.41,1.94-1.14,2.67-.73.73-1.63,1.13-2.69,1.13-.57,0-.98-.4-.98-.97Z"/><path d="m12.74,18.5c.98,0,1.96-.4,2.69-1.13.73-.73,1.14-1.62,1.14-2.67,0-.57-.41-.97-.98-.97s-.98.4-.98.97c0,.49-.16.97-.57,1.29-.33.32-.82.57-1.3.57-.57,0-.98.4-.98.97s.41.97.98.97Z"/>',
    }}
  />
)

FireFill.displayName = 'FireFill'

export const tags = ['FireFill', '']
