import React from 'react'

import { IconProps } from '../Types'

export const TypingFill = ({
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
    data-title="TypingFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m17.9,2H6.02c-2.18,0-4.02,1.83-4.02,3.98v8.96c0,2.24,1.84,3.98,4.1,3.98h10.88l3.85,2.9c.17.08.25.17.42.17.08,0,.25,0,.33-.08.25-.08.42-.33.42-.66V6.07c0-2.24-1.84-4.07-4.1-4.07Zm-4.35,8.22c0,.75-.67,1.41-1.42,1.41s-1.42-.66-1.42-1.41.67-1.41,1.42-1.41,1.42.58,1.42,1.41Zm-4.69,0c0,.75-.67,1.41-1.42,1.41s-1.42-.66-1.42-1.41.67-1.41,1.42-1.41,1.42.58,1.42,1.41Zm7.87-1.41c.75,0,1.42.66,1.42,1.41s-.67,1.41-1.42,1.41-1.42-.66-1.42-1.41.67-1.41,1.42-1.41Z"/>',
    }}
  />
)

TypingFill.displayName = 'TypingFill'

export const tags = ['TypingFill', '']
