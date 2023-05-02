import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowVerticalLeft = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7037 2.67864C17.0876 3.06111 17.1001 3.69415 16.7315 4.09256L9.04545 12.4L16.7315 20.7075C17.1001 21.1059 17.0876 21.7389 16.7037 22.1214C16.3197 22.5039 15.7096 22.491 15.341 22.0926L7.47077 13.586C7.32159 13.431 7.20447 13.2477 7.1244 13.0478C7.04199 12.8421 7 12.6217 7 12.4C7 12.1783 7.04199 11.958 7.1244 11.7522C7.20447 11.5523 7.32159 11.369 7.47077 11.2141L15.341 2.70749C15.7096 2.30908 16.3197 2.29616 16.7037 2.67864Z"/>',
      }}
    />
  )
)

export const tags = ['arrow-vertical-left', 'arrows']
