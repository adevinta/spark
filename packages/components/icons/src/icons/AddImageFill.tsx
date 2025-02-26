import React from 'react'

import { IconProps } from '../Types'

export const AddImageFill = ({
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
    data-title="AddImageFill"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m6.5,11.72c-.42,0-.85-.34-.85-.84v-2.68h-2.8c-.42,0-.85-.42-.85-.84s.34-.84.85-.84h2.8v-2.85c0-.42.34-.84.85-.84.42,0,.85.34.85.84v2.85h2.8c.42,0,.85.42.85.84s-.34.84-.85.84h-2.8v2.68c0,.42-.34.84-.85.84Z"/><path fill-rule="evenodd" d="m19.95,9.72c.5,0,1.07.23,1.44.6h0c.36.35.6.84.6,1.43v7.39c0,.5-.23,1.07-.6,1.43-.35.35-.84.6-1.44.6H6.23c-.5,0-1.07-.23-1.44-.6-.36-.35-.6-.84-.6-1.43v-7.73c.25,1.13,1.3,1.83,2.32,1.83,1.45,0,2.38-1.19,2.38-2.35v-1.17h1.27c1.45,0,2.38-1.19,2.38-2.35,0-.03,0-.08,0-.08h3c.25,0,.49.12.64.32l1.65,2.12h2.14Zm-10.55,5.04c0,2.04,1.69,3.61,3.65,3.61s3.65-1.57,3.65-3.61-1.59-3.61-3.65-3.61-3.65,1.57-3.65,3.61Z"/>',
    }}
  />
)

AddImageFill.displayName = 'AddImageFill'

export const tags = ['AddImageFill', '']
