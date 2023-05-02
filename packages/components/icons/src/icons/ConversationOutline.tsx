import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ConversationOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0146 16.0965H9.18162V16.088H6.25887L3.60334 18.0934C3.29436 18.3209 2.89353 18.3547 2.55115 18.1861C2.21712 18.0176 2 17.6637 2 17.2845V7.17322C2 4.75493 3.94572 2.79165 6.34237 2.80008H13.0898C15.4363 2.80008 17.357 4.68752 17.357 7.07211V11.7402C17.3403 14.15 15.4029 16.0965 13.0146 16.0965ZM5.92484 14.0742H7.16909L7.17744 14.0826H13.0313C14.3257 14.0826 15.3695 13.0378 15.3695 11.7402V7.07211C15.3695 5.81662 14.3674 4.81391 13.1065 4.81391H6.33402C5.03966 4.81391 3.99582 5.86717 3.99582 7.17322V15.2707L5.32359 14.2764C5.49895 14.1416 5.70772 14.0742 5.92484 14.0742Z"/><path d="M19.0438 10.3583V8.10853H19.0522C20.7641 8.69836 22 10.3162 22 12.2373V21.7925C22 22.1717 21.7912 22.5256 21.4489 22.6941C21.1065 22.8626 20.6973 22.8289 20.3967 22.6014L17.858 20.6887H11.5282C9.64929 20.6887 8.06265 19.4753 7.4614 17.7817H9.71609C10.142 18.3125 10.7933 18.6664 11.5282 18.6664H18.1837C18.4008 18.6664 18.6096 18.7423 18.785 18.8687L19.9875 19.7787V12.2373C19.9875 11.4705 19.6117 10.788 19.0438 10.3583Z"/>',
      }}
    />
  )
)

ConversationOutline.displayName = 'ConversationOutline'

export const tags = ['conversation-outline', 'contact']
