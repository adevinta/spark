import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CameraFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.17647 4.59985C8.91726 4.59985 8.67317 4.72372 8.51765 4.93418L6.64706 7.46553H4.23529C3.64246 7.46553 3.0739 7.70454 2.6547 8.13C2.2355 8.55546 2 9.1325 2 9.73418V18.3312C2 18.9329 2.2355 19.5099 2.6547 19.9354C3.0739 20.3608 3.64246 20.5999 4.23529 20.5999H19.7647C20.3575 20.5999 20.9261 20.3608 21.3453 19.9354C21.7645 19.5099 22 18.9329 22 18.3312V9.73418C22 9.1325 21.7645 8.55546 21.3453 8.13C20.9261 7.70454 20.3575 7.46553 19.7647 7.46553H17.3529L15.4824 4.93418C15.3268 4.72372 15.0827 4.59985 14.8235 4.59985H9.17647ZM12.0002 9.6413C9.79102 9.6413 8.00016 11.4589 8.00016 13.701C8.00016 15.9431 9.79102 17.7607 12.0002 17.7607C14.2093 17.7607 16.0002 15.9431 16.0002 13.701C16.0002 11.4589 14.2093 9.6413 12.0002 9.6413Z"/>',
      }}
    />
  )
)

CameraFill.displayName = 'CameraFill'

export const tags = ['camera-fill', 'images']
