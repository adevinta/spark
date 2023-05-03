import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HomeOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7126 11.3106 12.683 2.28744C12.2999 1.90419 11.6918 1.90419 11.3086 2.28744L2.28738 11.3106C1.90421 11.6938 1.90421 12.302 2.28738 12.6853 2.67055 13.0685 3.27863 13.0685 3.66181 12.6853L12 4.35368 20.3382 12.6936C20.7214 13.0769 21.3294 13.0769 21.7126 12.6936 22.0958 12.3104 22.0958 11.7021 21.7126 11.3189V11.3106ZM18.2474 13.1102C17.7143 13.1102 17.2728 13.5434 17.2728 14.085V20.0587H6.7272V14.085C6.7272 13.5518 6.29404 13.1102 5.7526 13.1102 5.21116 13.1102 4.77801 13.5434 4.77801 14.085V21.0252C4.77801 21.5584 5.21116 22 5.7526 22H18.2474C18.7805 22 19.222 21.5668 19.222 21.0252V14.085C19.222 13.5518 18.7888 13.1102 18.2474 13.1102Z"/>',
      }}
    />
  )
)

HomeOutline.displayName = 'HomeOutline'

export const tags = ['home-outline', 'account']
