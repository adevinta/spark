import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const InfoOutline = React.forwardRef(
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
          '<path d="M11.9999 17.6207C12.5673 17.6207 13.0267 17.1608 13.0267 16.5941L13.0267 11.9537C13.0267 11.387 12.5673 10.9271 11.9999 10.9271 11.4324 10.9271 10.973 11.387 10.973 11.9537L10.973 16.5941C10.973 17.1608 11.4324 17.6207 11.9999 17.6207ZM11.9999 9.95935C12.7809 9.95935 13.4135 9.3263 13.4135 8.54608 13.4135 7.76586 12.7809 7.1328 11.9999 7.1328 11.2189 7.1328 10.5864 7.76586 10.5864 8.54608 10.5864 9.32629 11.2189 9.95935 11.9999 9.95935Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.7998C6.47684 2.7998 2 7.27727 2 12.7998C2 18.3223 6.47684 22.7998 12 22.7998C17.5232 22.7998 22 18.3223 22 12.7998C22 7.27727 17.5232 2.7998 12 2.7998ZM4.11228 12.7998C4.11228 8.4429 7.64404 4.91149 12 4.91149C16.356 4.91149 19.8877 8.4429 19.8877 12.7998C19.8877 17.1567 16.356 20.6881 12 20.6881C7.64404 20.6881 4.11228 17.1567 4.11228 12.7998Z"/>',
      }}
    />
  )
)

InfoOutline.displayName = 'InfoOutline'

export const tags = ['info-outline', 'alert']
