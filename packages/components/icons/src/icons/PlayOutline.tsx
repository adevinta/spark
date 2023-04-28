import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PlayOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.14446C7.55104 4.14446 3.94444 7.75105 3.94444 12.2C3.94444 16.649 7.55104 20.2556 12 20.2556C16.449 20.2556 20.0556 16.649 20.0556 12.2C20.0556 7.75105 16.449 4.14446 12 4.14446ZM2 12.2C2 6.67716 6.47715 2.20001 12 2.20001C17.5228 2.20001 22 6.67716 22 12.2C22 17.7229 17.5228 22.2 12 22.2C6.47715 22.2 2 17.7229 2 12.2Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.44536 7.87744C9.75449 7.70611 10.1322 7.71603 10.4319 7.90335L15.9875 11.3756C16.2718 11.5532 16.4444 11.8648 16.4444 12.2C16.4444 12.5352 16.2718 12.8468 15.9875 13.0245L10.4319 16.4967C10.1322 16.684 9.75449 16.6939 9.44536 16.5226C9.13624 16.3513 8.94444 16.0257 8.94444 15.6722V8.72779C8.94444 8.37436 9.13624 8.04877 9.44536 7.87744ZM10.8889 10.4819V13.9181L13.6378 12.2L10.8889 10.4819Z"/>',
      }}
    />
  )
)

export const tags = ['play-outline', 'actions']
