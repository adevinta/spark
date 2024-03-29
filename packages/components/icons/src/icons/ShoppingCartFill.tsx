import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ShoppingCartFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ShoppingCartFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m21.25,2h-2.24c-.33,0-.66.08-.91.33-.25.17-.42.5-.5.75l-.42,1.83H3.47c-.17,0-.42,0-.58.08-.17.08-.42.25-.5.42-.17.17-.25.33-.33.58-.08.17-.08.42,0,.67l1.16,5.67c.08.33.25.67.5.83.25.17.58.33.91.33h10.8l-.42,2.17H6.3c-.42,0-.75.33-.75.75s.33.75.75.75h8.64c.33,0,.66-.08.91-.33.25-.17.42-.5.5-.83l.58-3,1.41-7.17.66-2.33h2.24c.42,0,.75-.33.75-.75s-.33-.75-.75-.75ZM7.96,10.58h-.17c-.33,0-.58-.25-.66-.5l-.42-1.42c-.08-.42.17-.83.5-.92.42-.08.75.17.83.5l.33,1.42c.17.42-.08.83-.42.92Zm5.07-1.92l-.33,1.42c-.08.33-.33.5-.66.5h-.17c-.42-.08-.58-.5-.5-.83l.33-1.42c.08-.42.5-.58.83-.5.42,0,.66.42.5.83Zm-5.98,10.5c-.75,0-1.41.67-1.41,1.42s.66,1.42,1.41,1.42,1.41-.67,1.41-1.42-.66-1.42-1.41-1.42Zm7.14,0c-.75,0-1.41.67-1.41,1.42s.66,1.42,1.41,1.42,1.41-.67,1.41-1.42-.66-1.42-1.41-1.42Z"/>',
      }}
    />
  )
)

ShoppingCartFill.displayName = 'ShoppingCartFill'

export const tags = ['ShoppingCartFill', '']
