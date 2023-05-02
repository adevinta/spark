import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CopyFill = React.forwardRef(
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
          '<path d="M8.12621 2.86668C7.79612 3.28335 7.54854 3.78335 7.54854 4.36668V16.45C7.54854 17.0333 7.79612 17.6167 8.20874 17.95C8.62136 18.3667 9.19903 18.6167 9.69418 18.6167H18.8544C19.432 18.6167 20.0097 18.3667 20.3398 17.95C20.7524 17.5333 21 16.95 21 16.45V7.20001C21 7.03335 20.9175 6.78335 20.7524 6.70001L16.5437 2.45001C16.3786 2.28335 16.2136 2.20001 16.0485 2.20001H9.69418C9.11651 2.20001 8.53884 2.45001 8.12621 2.86668Z"/><path d="M6.14563 22.2H16.0485C16.4612 22.2 16.7913 21.8667 16.7913 21.45C16.7913 21.0333 16.4612 20.7 16.0485 20.7H6.14563C5.98058 20.7 5.81553 20.6167 5.65049 20.5333C5.48544 20.3667 5.48544 20.2 5.48544 20.0333V7.20001C5.48544 6.78335 5.15534 6.45001 4.74272 6.45001C4.3301 6.45001 4 6.78335 4 7.20001V20.0333C4 20.6167 4.24757 21.2 4.66019 21.5333C5.07282 21.95 5.56796 22.2 6.14563 22.2Z"/>',
      }}
    />
  )
)

CopyFill.displayName = 'CopyFill'

export const tags = ['copy-fill', 'actions']
