import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlertOutline = React.forwardRef(
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
          '<path d="M12.0002 7.92925C11.4187 7.92925 10.9473 8.40067 10.9473 8.98219L10.9473 13.7998C10.9473 14.3814 11.4187 14.8528 12.0002 14.8528 12.5817 14.8528 13.0532 14.3814 13.0532 13.7998L13.0532 8.98219C13.0532 8.40067 12.5817 7.92925 12.0002 7.92925ZM12.0001 15.8832C11.1969 15.8832 10.5457 16.5343 10.5457 17.3376 10.5457 18.1408 11.1969 18.792 12.0001 18.792 12.8034 18.792 13.4546 18.1408 13.4546 17.3376 13.4546 16.5343 12.8034 15.8832 12.0001 15.8832Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.7998C6.47715 2.7998 2 7.27696 2 12.7998C2 18.3227 6.47715 22.7998 12 22.7998C17.5228 22.7998 22 18.3227 22 12.7998C22 7.27696 17.5228 2.79981 12 2.7998ZM4.10588 12.7998C4.10588 8.44001 7.6402 4.90569 12 4.90569C16.3598 4.90569 19.8941 8.44001 19.8941 12.7998C19.8941 17.1596 16.3598 20.6939 12 20.6939C7.6402 20.6939 4.10588 17.1596 4.10588 12.7998Z"/>',
      }}
    />
  )
)

AlertOutline.displayName = 'AlertOutline'

export const tags = ['alert-outline', 'alert']
