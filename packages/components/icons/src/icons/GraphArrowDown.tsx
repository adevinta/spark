import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const GraphArrowDown = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 6.70063C2.68341 6.29982 3.31658 6.29982 3.7071 6.70063L8.53842 11.6591L11.5076 8.61179C11.8239 8.29356 12.2493 8.11534 12.6922 8.11534C13.1352 8.11534 13.5605 8.29359 13.8769 8.61183L13.884 8.61901L20 14.896V11.6895C20 11.1227 20.4477 10.6632 21 10.6632C21.5523 10.6632 22 11.1227 22 11.6895V17.3737C22 17.9405 21.5523 18.4 21 18.4H15.4616C14.9093 18.4 14.4616 17.9405 14.4616 17.3737C14.4616 16.8069 14.9093 16.3474 15.4616 16.3474H18.5858L12.6922 10.2988L9.72307 13.3462C9.40673 13.6644 8.98139 13.8426 8.53842 13.8426C8.09546 13.8426 7.67016 13.6644 7.35382 13.3461L7.34667 13.339L2.29289 8.15206C1.90237 7.75126 1.90237 7.10143 2.29289 6.70063Z"/>',
      }}
    />
  )
)

GraphArrowDown.displayName = 'GraphArrowDown'

export const tags = ['graph-arrow-down', 'arrows']
