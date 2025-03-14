import React from 'react'

import { IconProps } from '../Types'

export const CameraFill = ({
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
    data-title="CameraFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m9.18,4c-.26,0-.5.12-.66.33l-1.87,2.53h-2.41c-.59,0-1.16.24-1.58.66-.42.43-.65,1-.65,1.6v8.6c0,.6.24,1.18.65,1.6.42.43.99.66,1.58.66h15.53c.59,0,1.16-.24,1.58-.66.42-.43.65-1,.65-1.6v-8.6c0-.6-.24-1.18-.65-1.6-.42-.43-.99-.66-1.58-.66h-2.41l-1.87-2.53c-.16-.21-.4-.33-.66-.33h-5.65Zm2.82,5.04c-2.21,0-4,1.82-4,4.06s1.79,4.06,4,4.06,4-1.82,4-4.06-1.79-4.06-4-4.06Z"/>',
    }}
  />
)

CameraFill.displayName = 'CameraFill'

export const tags = ['CameraFill', '']
