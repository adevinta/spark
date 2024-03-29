import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Messenger = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Messenger"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,2C6.36,2,2,6.13,2,11.7c0,2.91,1.19,5.44,3.14,7.17.16.13.26.35.27.57l.05,1.78c.04.57.61.94,1.13.71l1.98-.87c.17-.06.36-.09.53-.06.9.27,1.9.4,2.9.4,5.64,0,10-4.13,10-9.7S17.64,2,12,2Zm6.58,7.42l-3.01,4.75c-.48.74-1.51.94-2.23.38l-2.4-1.76c-.22-.16-.52-.16-.74,0l-3.25,2.44c-.43.34-1-.17-.7-.64l3.01-4.75c.48-.74,1.51-.94,2.23-.41l2.4,1.79c.23.16.52.16.74,0l3.25-2.44c.43-.34,1,.17.7.64Z"/>',
      }}
    />
  )
)

Messenger.displayName = 'Messenger'

export const tags = ['Messenger', '']
