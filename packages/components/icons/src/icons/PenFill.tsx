import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PenFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8336 6.11029C21.7504 5.86069 21.584 5.6111 21.3344 5.44471L18.8385 2.94879C18.6721 2.78239 18.4225 2.616 18.1729 2.4496C17.8401 2.28321 17.5905 2.20001 17.3409 2.20001C17.0914 2.20001 16.7586 2.28321 16.509 2.36641C16.2594 2.4496 16.0098 2.616 15.8434 2.86559L4.11257 14.5132C4.02937 14.5964 3.94618 14.6796 3.94618 14.846L2.03264 21.2522C1.94944 21.5018 2.03264 21.7514 2.19903 22.001C2.44863 22.1674 2.69822 22.2506 2.94781 22.1674L9.354 20.337C9.4372 20.337 9.6036 20.2538 9.68679 20.1706L21.3344 8.43981C21.5008 8.27342 21.6672 8.02383 21.8336 7.77423C21.9168 7.44144 22 7.19185 22 6.94226C22 6.69267 21.9168 6.35988 21.8336 6.11029Z"/>',
      }}
    />
  )
)

PenFill.displayName = 'PenFill'

export const tags = ['pen-fill', 'actions']
