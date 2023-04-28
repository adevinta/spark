import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowVerticalRight = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29632 2.67864C6.91236 3.06111 6.8999 3.69415 7.26851 4.09256L14.9546 12.4L7.26851 20.7075C6.8999 21.1059 6.91236 21.7389 7.29632 22.1214C7.68029 22.5039 8.29037 22.491 8.65898 22.0926L16.5292 13.586C16.6784 13.431 16.7955 13.2477 16.8756 13.0478C16.958 12.8421 17 12.6217 17 12.4C17 12.1783 16.958 11.958 16.8756 11.7522C16.7955 11.5523 16.6784 11.369 16.5292 11.2141L8.65898 2.70749C8.29037 2.30908 7.68029 2.29616 7.29632 2.67864Z"/>',
      }}
    />
  )
)

export const tags = ['arrow-vertical-right', 'arrows']
