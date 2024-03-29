import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const View = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="View"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.35,18.74c-.01-.58,0-1.77.07-2.99.02-.05.03-.1.03-.15,0-.03-.01-.05-.02-.08.08-1.29.22-2.54.47-3.05h.84v6.27s-1.39,0-1.39,0Zm-12.1-6.27h.84c.25.52.39,1.8.47,3.1,0,.01,0,.02,0,.04,0,.03,0,.05.01.07.07,1.25.08,2.48.07,3.07h-1.38s0-6.28,0-6.28Zm2.2-7.21c.49,3.1-.59,5.88-1.28,6.46h-.92v-6.46s2.21,0,2.21,0Zm-.12,10.72h9.32c-.05,1.16-.05,2.24-.04,2.76H7.39c0-.52,0-1.6-.05-2.76Zm3.34-6.55c0-.73.59-1.32,1.32-1.32s1.32.59,1.32,1.32c0,.05,0,.11-.01.16-.02.16.06.31.21.38.43.21.7.63.7,1.11,0,.56-.38,1.05-.92,1.19-.11.03-.21.11-.25.22-.12.3-.37.53-.67.63v-1.49l.74-.61c.16-.13.18-.37.05-.53-.13-.16-.37-.18-.53-.05l-.26.21v-.54c0-.21-.17-.38-.38-.38s-.38.17-.38.38v1.32l-.16-.14c-.16-.13-.39-.12-.53.04-.13.16-.12.39.04.53l.65.56v.7c-.3-.11-.54-.33-.67-.63-.04-.11-.14-.19-.25-.22-.54-.14-.92-.63-.92-1.19,0-.48.27-.9.69-1.11.14-.07.23-.22.21-.38,0-.05-.01-.11-.01-.16Zm6.02,5.8h-4.32v-1.33c.55-.11,1.02-.45,1.28-.95.78-.28,1.31-1.02,1.31-1.87,0-.68-.34-1.29-.89-1.66,0-1.14-.93-2.07-2.07-2.07s-2.07.93-2.07,2.07c-.56.36-.89.98-.89,1.66,0,.84.53,1.58,1.31,1.87.26.5.74.84,1.28.95v1.33h-4.33c-.08-1.21-.23-2.39-.51-3.05.97-1,1.87-3.95,1.44-6.92h7.56c-.43,2.97.47,5.92,1.44,6.92-.28.66-.43,1.84-.52,3.05Zm2.05-3.51h-.93c-.7-.57-1.77-3.36-1.28-6.47h2.2s0,6.47,0,6.47Zm.75.39s0-.01,0-.02,0-.01,0-.02v-7.2c0-.1-.04-.2-.11-.27-.07-.07-.17-.11-.27-.11H7.86s-.1,0-.15,0c0,0,0,0,0,0h-2.83c-.1,0-.2.04-.27.11-.07.07-.11.17-.11.26v7.18s0,.02,0,.03c0,.01,0,.02,0,.03v7c0,.21.17.38.38.38h14.24c.21,0,.37-.18.37-.38v-7.01Z"/>',
      }}
    />
  )
)

View.displayName = 'View'

export const tags = ['View', '']
