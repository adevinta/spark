import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const GraphArrowUp = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 18.0994C2.68341 18.5002 3.31658 18.5002 3.7071 18.0994L8.53842 13.1409L11.5076 16.1883C11.8239 16.5065 12.2493 16.6847 12.6922 16.6847C13.1352 16.6847 13.5605 16.5065 13.8769 16.1882L13.884 16.181L20 9.90406V13.1106C20 13.6774 20.4477 14.1369 21 14.1369C21.5523 14.1369 22 13.6774 22 13.1106V7.42634C22 6.85952 21.5523 6.40002 21 6.40002H15.4616C14.9093 6.40002 14.4616 6.85952 14.4616 7.42634C14.4616 7.99316 14.9093 8.45266 15.4616 8.45266H18.5858L12.6922 14.5012L9.72307 11.4539C9.40673 11.1356 8.98139 10.9574 8.53842 10.9574C8.09546 10.9574 7.67016 11.1357 7.35382 11.4539L7.34667 11.4611L2.29289 16.648C1.90237 17.0488 1.90237 17.6986 2.29289 18.0994Z"/>',
      }}
    />
  )
)

GraphArrowUp.displayName = 'GraphArrowUp'

export const tags = ['graph-arrow-up', 'arrows']
