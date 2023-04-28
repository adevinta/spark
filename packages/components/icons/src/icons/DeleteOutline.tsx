import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeleteOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.40002C7.58172 4.40002 4 7.98175 4 12.4C4 16.8183 7.58172 20.4 12 20.4C16.4183 20.4 20 16.8183 20 12.4C20 7.98175 16.4183 4.40002 12 4.40002ZM2 12.4C2 6.87718 6.47715 2.40002 12 2.40002C17.5228 2.40002 22 6.87718 22 12.4C22 17.9229 17.5228 22.4 12 22.4C6.47715 22.4 2 17.9229 2 12.4ZM8.33456 8.73458C8.72508 8.34406 9.35825 8.34406 9.74877 8.73458L11.977 10.9629L14.2053 8.73458C14.5959 8.34406 15.229 8.34406 15.6195 8.73458C16.0101 9.12511 16.0101 9.75827 15.6195 10.1488L13.3913 12.3771L15.6195 14.6054C16.0101 14.9959 16.0101 15.629 15.6195 16.0196C15.229 16.4101 14.5959 16.4101 14.2053 16.0196L11.977 13.7913L9.74877 16.0196C9.35825 16.4101 8.72508 16.4101 8.33456 16.0196C7.94404 15.629 7.94404 14.9959 8.33456 14.6054L10.5628 12.3771L8.33456 10.1488C7.94404 9.75827 7.94404 9.12511 8.33456 8.73458Z"/>',
      }}
    />
  )
)

export const tags = ['delete-outline', 'arrows']
