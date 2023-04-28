import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ConversationFill = React.forwardRef(
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
          '<path d="M17.2122 7.21922V12.351C17.2122 14.2976 15.6487 15.8902 13.7377 15.8902H6.26761C6.14044 15.8902 6.05981 15.9376 5.95758 15.9977C5.92016 16.0197 5.87985 16.0434 5.8333 16.0671L3.29694 17.9694C3.12322 18.1022 2.88 17.9783 2.88 17.7571V7.21922C2.88 5.27268 4.44352 3.68005 6.35447 3.68005H13.8246C15.7355 3.68005 17.2122 5.1842 17.2122 7.21922Z"/><path d="M18.7756 12.351V9.16572C20.6866 9.2542 22.1632 10.8468 22.0764 12.7049V22.6146C22.0764 22.8269 21.8332 22.9596 21.6594 22.8269L19.2968 21.0219C19.2099 20.9335 19.0362 20.845 18.8625 20.845H11.9135C10.0026 20.845 8.52593 19.3408 8.43907 17.4828H13.7376C16.5172 17.4828 18.7756 15.1823 18.7756 12.351Z"/>',
      }}
    />
  )
)

export const tags = ['conversation-fill', 'contact']
