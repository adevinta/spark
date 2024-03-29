import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Dress = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Dress"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.11,9.22c.35.35.91.35,1.25,0l3.37-3.42c.35-.35.35-.92,0-1.27L18.53.26c-.17-.17-.39-.26-.62-.26H6.1c-.24,0-.46.09-.62.26L1.26,4.53c-.35.35-.35.92,0,1.27l3.37,3.42c.35.35.91.35,1.25,0l1.02-1.03v2.11s-.02.02-.02.03c-.11.27-.09.56.02.8v.87c0,.39-.11.78-.35,1.28-.17.35-.37.7-.6,1.11-.12.2-.24.42-.37.66-.78,1.42-1.66,3.27-1.94,6.08-.04.36,0,.73.11,1.07.11.35.3.66.53.93.24.27.53.49.86.64.33.15.68.22,1.04.23h11.63c.36,0,.71-.08,1.04-.23.33-.15.62-.36.86-.63.24-.27.42-.59.53-.94.11-.35.15-.71.11-1.07-.29-2.81-1.16-4.66-1.94-6.08-.14-.24-.26-.46-.38-.66-.24-.41-.43-.76-.6-1.11-.24-.5-.35-.89-.35-1.28v-.87c.11-.25.14-.53.02-.8,0-.01-.02-.02-.02-.03v-2.11l1.02,1.03h.02Zm-12.86-1.9l-2.12-2.15,3.33-3.37h11.06l3.33,3.37-2.12,2.15-1.9-1.93c-.26-.26-.63-.33-.97-.19-.34.14-.54.47-.54.83v3.96c-1.07.39-2.19.6-3.33.6s-2.26-.21-3.33-.6v-3.96c0-.36-.22-.69-.54-.83-.33-.14-.71-.06-.97.19l-1.9,1.93h0Zm13.35,14c0,.11,0,.23-.04.33-.03.11-.09.21-.17.29-.08.08-.17.15-.27.2-.1.05-.21.07-.33.07H6.18c-.11,0-.23-.02-.33-.07-.1-.05-.2-.11-.27-.2-.07-.08-.13-.18-.17-.29-.03-.11-.05-.22-.04-.33.26-2.48,1.02-4.09,1.73-5.39.11-.19.21-.38.32-.57.26-.44.5-.89.7-1.31.29-.6.5-1.25.51-1.97,1.09.32,2.2.49,3.34.49s2.25-.17,3.34-.49c.02.73.24,1.38.51,1.97.2.42.45.86.7,1.31.11.19.22.38.32.57.72,1.29,1.48,2.9,1.73,5.39h.04Z"/>',
      }}
    />
  )
)

Dress.displayName = 'Dress'

export const tags = ['Dress', '']
