import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BurgerMenu = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.12431C2 4.50337 2.44772 4 3 4H21C21.5523 4 22 4.50337 22 5.12431C22 5.74525 21.5523 6.24862 21 6.24862H3C2.44772 6.24862 2 5.74525 2 5.12431ZM2 11.9999C2 11.379 2.44772 10.8756 3 10.8756H21C21.5523 10.8756 22 11.379 22 11.9999C22 12.6208 21.5523 13.1242 21 13.1242H3C2.44772 13.1242 2 12.6208 2 11.9999ZM2 18.8757C2 18.2547 2.44772 17.7514 3 17.7514H21C21.5523 17.7514 22 18.2547 22 18.8757C22 19.4966 21.5523 20 21 20H3C2.44772 20 2 19.4966 2 18.8757Z"/>',
      }}
    />
  )
)

BurgerMenu.displayName = 'BurgerMenu'

export const tags = ['burger-menu', 'account']
