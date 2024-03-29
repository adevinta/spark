import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeliveryHandsOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="DeliveryHandsOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m20.14,2h-9.73c-1.03,0-1.86.84-1.86,1.88v9.84c0,.14.02.29.05.41-.8-.69-1.81-1.1-2.87-1.1h-2.77c-.54,0-.97.44-.97.99s.43.99.97.99h2.76c.66,0,1.28.26,1.75.73.23.23.4.49.52.78h-2.96c-.54,0-.97.44-.97.99s.43.99.97.99h6.9c.48,0,.93.19,1.26.53.27.27.44.62.5.99H2.97c-.54,0-.97.44-.97.99s.43.99.97.99h11.03c.44,0,.87-.18,1.18-.5.31-.32.49-.74.49-1.19,0-1-.39-1.97-1.09-2.67-.7-.71-1.65-1.1-2.64-1.1h-1.9c-.09-.4-.23-.77-.43-1.12.24.12.51.19.8.19h9.73c1.02,0,1.86-.84,1.86-1.88V3.88c0-1.04-.83-1.88-1.86-1.88Zm-5.66,1.97h1.58v2.95h-1.58v-2.95Zm5.57,9.67h-9.55V3.97h2.02v3.49c0,.38.15.74.42,1.01.27.27.62.42,1,.42h2.65c.38,0,.73-.15,1-.42.27-.27.42-.63.42-1.01v-3.49h2.03v9.67h0Z"/><path fill-rule="evenodd" d="m16.6,11.4c-.54,0-.98.44-.98.99s.43.99.98.99h2.21c.54,0,.98-.44.98-.99s-.43-.99-.98-.99h-2.21Z"/>',
      }}
    />
  )
)

DeliveryHandsOutline.displayName = 'DeliveryHandsOutline'

export const tags = ['DeliveryHandsOutline', '']
