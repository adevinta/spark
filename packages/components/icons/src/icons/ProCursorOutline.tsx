import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ProCursorOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ProCursorOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m8.31,3c0-.55.45-1,1-1s1,.45,1,1v2.09c0,.55-.45,1-1,1s-1-.45-1-1v-2.09Zm-4.61,2.1c-.39-.39-.39-1.02,0-1.41.39-.39,1.02-.39,1.41,0l1.4,1.39c.39.39.39,1.02,0,1.41-.39.39-1.02.39-1.41,0l-1.4-1.39Zm2.41,4.17c0-.55-.45-1-1-1h-2.1c-.55,0-1,.45-1,1s.45,1,1,1h2.1c.55,0,1-.45,1-1Zm-.3,2.08c.39-.39,1.02-.39,1.41,0,.39.39.39,1.02,0,1.41l-1.4,1.39c-.39.39-1.02.39-1.41,0-.39-.39-.39-1.03,0-1.41l1.4-1.39Zm8.43-6.96c-.39-.39-1.02-.39-1.41,0l-1.4,1.39c-.39.39-.39,1.02,0,1.41.39.39,1.02.39,1.41,0l1.4-1.39c.39-.39.39-1.02,0-1.41Z"/><path fill-rule="evenodd" d="m7.02,9.63c-.12-.35-.14-.73-.06-1.1.08-.36.27-.7.53-.96.26-.26.6-.45.96-.53.36-.08.74-.06,1.09.06l11.16,3.86c.32.05.61.19.85.42.28.28.44.66.44,1.06s-.16.78-.44,1.06c-.23.23-.53.37-.84.42l-5.07,1.78-1.83,5.03c-.05.32-.2.61-.42.84-.28.28-.66.44-1.06.44s-.78-.16-1.06-.44c-.23-.23-.38-.53-.43-.85l-3.83-11.09h0Zm7.52,4.34l4.35-1.53-9.97-3.45,3.43,9.92,1.59-4.35c.1-.28.33-.5.61-.6Z"/>',
      }}
    />
  )
)

ProCursorOutline.displayName = 'ProCursorOutline'

export const tags = ['ProCursorOutline', '']
