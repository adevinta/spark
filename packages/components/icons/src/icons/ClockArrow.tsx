import React from 'react'

import { IconProps } from '../Types'

export const ClockArrow = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ref,
  ...props
}: IconProps) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-title="ClockArrow"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="m17.54,3.69c1.65,1.1,2.94,2.67,3.7,4.5v.03c.76,1.83.96,3.84.57,5.78s-1.34,3.73-2.74,5.13c-1.4,1.38-3.18,2.31-5.11,2.69-1.93.38-3.93.18-5.75-.57-1.82-.75-3.38-2.01-4.48-3.64-1.1-1.63-1.7-3.54-1.73-5.5,0-1.88.48-3.72,1.4-5.36l-.19.04c-.25.06-.52.02-.74-.11-.22-.13-.38-.35-.44-.6-.06-.25-.02-.51.11-.74.13-.22.35-.38.6-.44l2.78-.7h.11c.06,0,.13,0,.19,0h.18l.18.07h.08s.06.04.08.07c.03.02.06.04.09.06.01.03.03.05.05.07.04.05.08.1.11.16.03.06.06.12.08.18v.07l.69,2.79c.06.25.02.51-.11.74-.13.22-.35.38-.6.44-.25.06-.52.02-.74-.11-.22-.13-.38-.35-.44-.6l-.21-.83c-.89,1.43-1.35,3.08-1.35,4.77,0,1.6.47,3.16,1.36,4.48.89,1.33,2.15,2.36,3.62,2.97,1.48.61,3.1.77,4.67.46,1.17-.24,2.27-.73,3.22-1.44.96-.71,1.74-1.63,2.3-2.68.56-1.05.88-2.21.94-3.4.06-1.19-.15-2.38-.61-3.48-.61-1.48-1.64-2.74-2.97-3.64-1.33-.89-2.89-1.37-4.49-1.37-.24-.02-.47-.13-.63-.31-.16-.18-.26-.41-.26-.66s.09-.48.26-.66c.16-.18.39-.29.63-.31,1.98,0,3.93.59,5.58,1.69Z"/><path d="m15.16,15.39l-3.63-1.8c-.17-.08-.31-.2-.41-.36-.1-.15-.16-.33-.16-.52v-5.56c-.01-.14,0-.27.05-.4.04-.13.11-.25.2-.35.09-.1.2-.18.33-.24.12-.05.26-.08.4-.08s.27.03.4.08c.12.05.24.14.33.24s.16.22.2.35c.04.13.06.27.05.4v4.96l3.09,1.54c.2.13.36.32.42.55.07.23.05.48-.06.69-.1.22-.28.39-.51.48-.22.09-.47.1-.7.01Z"/>',
    }}
  />
)

ClockArrow.displayName = 'ClockArrow'

export const tags = ['ClockArrow', '']
