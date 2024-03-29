import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlashlightOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="FlashlightOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m18.25,4.69c0-1.49-1.26-2.69-2.81-2.69h-6.88c-1.55,0-2.81,1.21-2.81,2.69v2.53c0,.59.29,1.1.55,1.45.27.37.62.72.91,1.02l.12.12c.26.26.47.47.62.66.08.1.12.16.14.2v7.92c0,1.88,1.59,3.42,3.56,3.42h.68c1.97,0,3.56-1.53,3.56-3.42v-7.91s.07-.1.14-.2c.16-.19.37-.4.62-.66l.12-.13c.29-.29.63-.65.91-1.02.26-.35.55-.86.55-1.45v-2.53Zm-9.69-.73h6.88c.35,0,.65.22.74.53H7.82c.09-.31.38-.53.74-.53Zm5.3,14.62c0,.81-.68,1.47-1.53,1.47h-.68c-.84,0-1.52-.66-1.52-1.47v-5.11h0v-2.88c0-.58-.37-1.07-.58-1.34-.23-.27-.51-.55-.75-.8l-.12-.12c-.3-.3-.54-.56-.71-.79-.09-.12-.13-.21-.16-.27-.02-.04-.03-.07-.03-.07v-.76h8.43v.76s0,.03-.02.07c-.02.06-.08.14-.16.27-.18.23-.42.49-.72.79l-.12.12c-.25.25-.53.53-.75.8-.22.27-.59.76-.59,1.34v7.99Z"/><path d="m11.92,13.44c-.33,0-.59.11-.82.32-.23.22-.33.48-.33.78s.11.57.33.78c.22.22.5.32.82.32s.59-.11.82-.32c.22-.22.33-.48.33-.78s-.11-.57-.33-.78c-.23-.22-.5-.32-.82-.32Z"/>',
      }}
    />
  )
)

FlashlightOutline.displayName = 'FlashlightOutline'

export const tags = ['FlashlightOutline', '']
