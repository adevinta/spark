import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Close = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 20.0741L13.925 12.3959L21.5 4.80936C22.0333 4.27581 22.0333 3.40878 21.5 2.87522C20.9667 2.34167 20.1 2.34167 19.5667 2.87522L11.9917 10.4534L4.33333 2.80019C3.8 2.26664 2.93333 2.26664 2.4 2.80019C1.86667 3.33375 1.86667 4.20077 2.4 4.73433L10.0583 12.3959L2.4 20.049C1.86667 20.5826 1.86667 21.4496 2.4 21.9832C2.93333 22.5167 3.8 22.5167 4.33333 21.9832L11.9917 14.3217L19.6667 21.9999C20.2 22.5334 21.0667 22.5334 21.6 21.9999C22.1333 21.4663 22.1333 20.5993 21.6 20.0657V20.0741Z"/>',
      }}
    />
  )
)

export const tags = ['close', 'arrows']
