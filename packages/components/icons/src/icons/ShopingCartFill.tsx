import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ShopingCartFill = React.forwardRef(
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
          '<path d="M21.2523 2H19.0093C18.6771 2 18.3448 2.08333 18.0955 2.33333 17.8463 2.5 17.6802 2.83333 17.5971 3.08333L17.1817 4.91667H3.47456C3.30841 4.91667 3.05919 4.91667 2.89304 5 2.7269 5.08333 2.47767 5.25 2.3946 5.41667 2.22845 5.58333 2.14538 5.75 2.06231 6 1.97923 6.16667 1.97923 6.41667 2.06231 6.66667L3.22534 12.3333C3.30841 12.6667 3.47456 13 3.72378 13.1667 3.973 13.3333 4.3053 13.5 4.63759 13.5H15.4372L15.0218 15.6667H6.29907C5.8837 15.6667 5.5514 16 5.5514 16.4167 5.5514 16.8333 5.8837 17.1667 6.29907 17.1667H14.9387C15.271 17.1667 15.6033 17.0833 15.8525 16.8333 16.1018 16.6667 16.2679 16.3333 16.351 16L16.9325 13 18.3448 5.83333 19.0093 3.5H21.2523C21.6677 3.5 22 3.16667 22 2.75 22 2.33333 21.6677 2 21.2523 2ZM7.96054 10.5833C7.87747 10.5833 7.87747 10.5833 7.79439 10.5833 7.4621 10.5833 7.21288 10.3333 7.1298 10.0833L6.71443 8.66667C6.63136 8.25 6.88058 7.83333 7.21288 7.75 7.62825 7.66667 7.96054 7.91667 8.04361 8.25L8.37591 9.66667C8.54206 10.0833 8.29284 10.5 7.96054 10.5833ZM13.028 8.66667 12.6957 10.0833C12.6127 10.4167 12.3634 10.5833 12.0312 10.5833 11.9481 10.5833 11.9481 10.5833 11.865 10.5833 11.4496 10.5 11.2835 10.0833 11.3666 9.75L11.6989 8.33333C11.7819 7.91667 12.1973 7.75 12.5296 7.83333 12.945 7.83333 13.1942 8.25 13.028 8.66667ZM7.04673 19.1667C6.29907 19.1667 5.63448 19.8333 5.63448 20.5833 5.63448 21.3333 6.29907 22 7.04673 22 7.79439 22 8.45898 21.3333 8.45898 20.5833 8.45898 19.8333 7.79439 19.1667 7.04673 19.1667ZM14.1911 19.1667C13.4434 19.1667 12.7788 19.8333 12.7788 20.5833 12.7788 21.3333 13.4434 22 14.1911 22 14.9387 22 15.6033 21.3333 15.6033 20.5833 15.6033 19.8333 14.9387 19.1667 14.1911 19.1667Z"/>',
      }}
    />
  )
)

export const tags = ['shoping-cart-fill', 'account']
