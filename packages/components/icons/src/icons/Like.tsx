import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Like = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Like"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m4.94,19.5c-.52,0-.94-.41-.94-.93v-6.65c0-.48.4-.87.89-.87h4.54c.77,0,1.16-.76,1.33-1.39l.61-3.44c.07-.94.85-1.68,1.8-1.72,1.18,0,1.59.96,1.8,1.68.29,1.1.22,2.25-.19,3.31h2.85c.67-.02,1.31.26,1.74.76.55.81.75,1.8.56,2.75l-.59,4.47c0,.54-.22,1.06-.61,1.44-.39.38-.91.59-1.46.59H4.94Zm4.1-7.69h-4.18c-.06,0-.12.05-.12.11v6.65s.02.09.05.12c.03.03.07.05.12.05h4.12v-6.93Zm4.11-6.56c-.57.05-1.02.51-1.04,1.08l-.62,3.48c-.24,1.1-.86,1.78-1.68,1.96v6.97s7.45,0,7.45,0c.72,0,1.29-.57,1.29-1.28l.6-4.56c.15-.74,0-1.51-.4-2.15-.29-.33-.72-.51-1.16-.49h-1.94c-1.29,0-1.54-.03-1.71-.27-.07-.12-.09-.26-.05-.39.45-1.01.56-2.13.32-3.21-.31-1.06-.71-1.15-1.06-1.15Z"/>',
      }}
    />
  )
)

Like.displayName = 'Like'

export const tags = ['Like', '']
