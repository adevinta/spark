import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ParkingEstate = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ParkingEstate"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.13,4c.2,0,.37.16.37.36v9.96c0,.2-.16.36-.37.36h-3.17v4.95c0,.19-.14.34-.32.37h-.07s-3.14,0-3.14,0c-.22,0-.39-.17-.39-.38v-4.95h-3.17c-.18,0-.33-.13-.36-.29v-.06s0-9.96,0-9.96c0-.2.16-.36.37-.36h10.27Zm-3.95,10.67h-2.36v4.57h2.36v-4.57Zm3.54-9.9H7.29v9.14h9.43V4.76Zm-8.25,7.62c.22,0,.39.17.39.38s-.18.38-.39.38-.39-.17-.39-.38.18-.38.39-.38Zm7.07,0c.22,0,.39.17.39.38s-.18.38-.39.38-.39-.17-.39-.38.18-.38.39-.38Zm-2.88-6.1c.89,0,1.63.77,1.7,1.77v.13c0,1.05-.76,1.9-1.7,1.9h-1.44v1.9c0,.21-.18.39-.39.39-.19,0-.35-.14-.39-.32v-.07s0-5.32,0-5.32c0-.06.01-.11.03-.16.06-.14.18-.23.33-.23h1.87Zm0,.8h-1.44s0,2.21,0,2.21h1.44c.51,0,.94-.44.98-.98v-.1s0-.1,0-.1c-.04-.57-.47-1.02-.98-1.02Zm2.88-1.56c.22,0,.39.17.39.38s-.18.38-.39.38-.39-.17-.39-.38.18-.38.39-.38Zm-7.07,0c.22,0,.39.17.39.38s-.18.38-.39.38-.39-.17-.39-.38.18-.38.39-.38Z"/>',
      }}
    />
  )
)

ParkingEstate.displayName = 'ParkingEstate'

export const tags = ['ParkingEstate', '']
