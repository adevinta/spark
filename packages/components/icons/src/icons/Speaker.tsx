import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Speaker = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Speaker"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M16,19.5H8c-0.55,0-1-0.45-1-1V5.5c0-0.55,0.45-1,1-1H16c0.55,0,1,0.45,1,1V18.5 C17,19.05,16.55,19.5,16,19.5z M8,5.25c-0.14,0-0.25,0.11-0.25,0.25V18.5c0,0.13,0.11,0.25,0.25,0.25H16 c0.13,0,0.25-0.11,0.25-0.25V5.5c0-0.14-0.11-0.25-0.25-0.25H8z"/><path d="M12 10.5c-1.11 0-2-.9-2-2s.9-2 2-2 2 .9 2 2S13.1 10.5 12 10.5zM12 7.24c-.69 0-1.25.56-1.25 1.25S11.3 9.75 12 9.75c.69 0 1.25-.56 1.25-1.25S12.69 7.24 12 7.24zM12 15.49c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1S12.54 15.49 12 15.49zM12 14.25c-.14 0-.25.11-.25.25 0 .27.49.27.49 0C12.24 14.36 12.13 14.25 12 14.25z"/><path d="M12,17.49c-1.65,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.65,17.49,12,17.49z M12,12.25 c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25c1.24,0,2.25-1.01,2.25-2.25S13.23,12.25,12,12.25z"/>',
      }}
    />
  )
)

Speaker.displayName = 'Speaker'

export const tags = ['Speaker', '']
