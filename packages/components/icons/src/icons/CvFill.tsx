import React from 'react'

import { IconProps } from '../Types'

export const CvFill = ({
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
    data-title="CvFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m20.58,9.33l-7.31-7.17c-.17-.08-.34-.17-.51-.17h-7.31c-.59,0-1.1.17-1.53.58-.42.42-.68,1-.68,1.58v15.75c0,.58.25,1.17.68,1.5.42.42.93.58,1.53.58h13.08c.59,0,1.19-.25,1.53-.67.42-.42.68-1,.68-1.5v-10c0-.17,0-.33-.17-.5Zm-12.23-1.67h2.89c.42,0,.76.33.76.75s-.25.75-.68.75h-2.97c-.42,0-.76-.33-.76-.75s.34-.75.76-.75Zm7.31,10.08h-7.31c-.42,0-.76-.33-.76-.75s.34-.75.76-.75h7.31c.42,0,.76.33.76.75s-.34.75-.76.75Zm0-4.25h-7.31c-.42,0-.76-.33-.76-.75s.34-.75.76-.75h7.31c.42,0,.76.33.76.75s-.34.75-.76.75Z"/>',
    }}
  />
)

CvFill.displayName = 'CvFill'

export const tags = ['CvFill', '']
