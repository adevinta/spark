import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeliveryTruckOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="DeliveryTruckOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m20.88,7.92c-.7-.71-1.66-1.11-2.65-1.11h-3.19v-.42c0-.63-.25-1.24-.69-1.68-.44-.45-1.04-.7-1.67-.7H4.36c-.62,0-1.22.25-1.67.7-.44.45-.69,1.05-.69,1.68v9.83c0,.54.43.99.97.99h.56c.43,1.62,1.87,2.8,3.61,2.8s3.17-1.2,3.61-2.8h1.82c.43,1.62,1.87,2.8,3.61,2.8s3.17-1.2,3.61-2.8h1.26c.53,0,.97-.44.97-.99v-5.62c0-1-.39-1.97-1.1-2.68h-.02Zm-16.82-1.83c.07-.08.18-.13.29-.13h8.33c.11,0,.22.04.29.13.07.08.12.19.12.29v7.64c-.25.36-.43.77-.55,1.2h-1.82c-.43-1.62-1.87-2.8-3.61-2.8-1.36,0-2.53.73-3.19,1.83v-7.87c0-.11.04-.22.12-.29Zm3.07,11.95c-1,0-1.81-.82-1.81-1.83s.81-1.83,1.81-1.83,1.81.82,1.81,1.83-.81,1.83-1.81,1.83Zm9.02,0c-1,0-1.81-.82-1.81-1.83s.81-1.83,1.81-1.83,1.81.82,1.81,1.83-.81,1.83-1.81,1.83Zm3.89-2.8h-.28c-.43-1.62-1.87-2.8-3.61-2.8-.39,0-.76.08-1.11.19v-3.84h3.19c.47,0,.94.19,1.27.53.34.35.52.81.52,1.29v4.63h0Z"/>',
      }}
    />
  )
)

DeliveryTruckOutline.displayName = 'DeliveryTruckOutline'

export const tags = ['DeliveryTruckOutline', '']
