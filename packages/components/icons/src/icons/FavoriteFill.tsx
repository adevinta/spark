import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FavoriteFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.27592 20.157C8.75914 20.3828 9.28766 20.5 9.82297 20.5H17.5122C19.2836 20.5 20.7911 19.235 21.0648 17.519L21.9649 11.8732C22.2376 10.1625 20.8887 8.61695 19.1228 8.61695H14.3999V5.29205C14.3999 4.02618 13.3533 3 12.0623 3C11.2162 3 10.4361 3.44835 10.0227 4.17227L7.03488 9.40451C6.85456 9.72027 6.75988 10.0761 6.75988 10.438V18.1134C6.75988 18.9289 7.23813 19.672 7.98908 20.0229L8.27592 20.157ZM3.43305 9.66293C3.05298 9.66293 2.68848 9.81097 2.41973 10.0745C2.15098 10.338 2 10.6954 2 11.0681L2 18.2782C2 18.651 2.15098 19.0083 2.41973 19.2719C2.68848 19.5354 3.05298 19.6834 3.43305 19.6834L4.14726 19.6832C4.54431 19.683 4.86608 19.3673 4.86608 18.978V10.3678C4.86608 10.1807 4.79027 10.0013 4.65535 9.86906C4.52041 9.7368 4.33741 9.66255 4.14664 9.66263L3.43305 9.66293Z"/>',
      }}
    />
  )
)

export const tags = ['favorite-fill', 'account']
