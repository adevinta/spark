import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeleteFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.4C2 6.87718 6.47715 2.40002 12 2.40002C17.5228 2.40002 22 6.87718 22 12.4C22 17.9229 17.5228 22.4 12 22.4C6.47715 22.4 2 17.9229 2 12.4ZM9.74861 8.73462C9.35809 8.3441 8.72492 8.3441 8.3344 8.73462C7.94387 9.12515 7.94387 9.75831 8.3344 10.1488L10.5627 12.3771L8.3344 14.6054C7.94387 14.9959 7.94387 15.6291 8.3344 16.0196C8.72492 16.4101 9.35809 16.4101 9.74861 16.0196L11.9769 13.7913L14.2052 16.0196C14.5957 16.4101 15.2289 16.4101 15.6194 16.0196C16.0099 15.6291 16.0099 14.9959 15.6194 14.6054L13.3911 12.3771L15.6194 10.1488C16.0099 9.75831 16.0099 9.12515 15.6194 8.73462C15.2289 8.3441 14.5957 8.3441 14.2052 8.73462L11.9769 10.9629L9.74861 8.73462Z"/>',
      }}
    />
  )
)

DeleteFill.displayName = 'DeleteFill'

export const tags = ['delete-fill', 'arrows']
