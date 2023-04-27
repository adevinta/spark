import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Floor = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8111 4.34472C16.9278 4.48946 16.9146 4.69043 16.7893 4.82168L16.7371 4.86738L15.7771 5.56826V10.5137L17.6296 10.5142C17.8342 10.5142 18 10.681 18 10.8867C18 11.0696 17.869 11.2217 17.6962 11.2533L17.6296 11.2593L15.0368 11.2591L15.037 13.1219C15.037 13.3048 14.906 13.4569 14.7332 13.4884L14.6667 13.4944L12.0738 13.4942L12.0741 15.3571C12.0741 15.54 11.943 15.6921 11.7703 15.7236L11.7037 15.7296L9.11081 15.7294L9.11108 17.5923C9.11108 17.7751 8.98006 17.9272 8.80728 17.9588L8.74071 17.9648L6.88837 17.9639L6.88885 17.9648H6.1481L6.14789 17.9639L6.14784 17.9646L6.1481 19.8274C6.1481 20.0332 5.98228 20.2 5.77773 20.2C5.59591 20.2 5.44469 20.0682 5.41333 19.8944L5.40736 19.8274V17.5923C5.40736 17.3865 5.57318 17.2197 5.77773 17.2197L6.14789 17.219V12.6054L4.62989 13.7151C4.4577 13.8409 4.21166 13.8109 4.08034 13.6481C3.96361 13.5034 3.97682 13.3024 4.10213 13.1712L4.15434 13.1254L16.2615 4.27775C16.4337 4.15192 16.6797 4.1819 16.8111 4.34472ZM9.11055 10.44L6.88837 12.0637V17.219L8.37002 17.2195L8.37033 15.3571C8.37033 15.1513 8.53616 14.9846 8.74071 14.9846L9.11055 14.9844V10.44ZM12.0739 8.27464L9.85177 9.89831V14.9844L11.3327 14.9842L11.3333 13.1219C11.3333 12.9162 11.4991 12.7494 11.7037 12.7494L12.0739 12.749V8.27464ZM15.0366 6.10924L12.8144 7.73366V12.749L14.2961 12.7488L14.2963 10.8867C14.2963 10.681 14.4621 10.5142 14.6667 10.5142L15.0366 10.5137V6.10924Z"/>',
      }}
    />
  )
)

export const tags = ['floor', 'criteria', 'immobilierneuf']
