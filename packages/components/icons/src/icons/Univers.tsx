import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Univers = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.625 11.2C19.8265 11.2 20 11.3722 20 11.575C20 11.7551 19.8709 11.9189 19.7007 11.95H16.7041L15.3762 19.8936C15.3141 20.2654 14.8175 20.3029 14.6826 19.9831L14.6606 19.9143L13.441 14.5254H10.6767L9.6678 19.901C9.63456 20.078 9.4801 20.2012 9.30713 20.2L9.2416 20.1935C9.0656 20.1601 8.94318 20.0047 8.9444 19.8306L8.95081 19.7647L10.0161 14.0902C10.0446 13.9385 10.1634 13.8234 10.3102 13.797L10.3746 13.7913H13.7321C13.8811 13.7913 14.0128 13.882 14.0687 14.0166L14.0879 14.0768L14.9616 17.9389L16.0356 11.5062C16.0614 11.3515 16.1811 11.2331 16.33 11.2059L16.3954 11.2H19.625ZM9.16165 10.45C9.38496 10.45 9.5 10.6353 9.5 10.825C9.5 10.9935 9.35972 11.2 9.16165 11.2H5.74872L5.75 15.7H6.5C6.73986 15.7 6.875 15.9048 6.875 16.075V19.825C6.875 20.0146 6.68686 20.2 6.5 20.2C6.3339 20.2 6.125 20.0462 6.125 19.825V16.45H5.375C5.14981 16.45 5 16.2624 5 16.075V10.7933C5 10.6247 5.11969 10.4846 5.27753 10.4555L5.33835 10.45H9.16165ZM12.125 9.39995C13.1605 9.39995 14 10.2394 14 11.275C14 12.3105 13.1605 13.15 12.125 13.15C11.0895 13.15 10.25 12.3105 10.25 11.275C10.25 10.2394 11.0895 9.39995 12.125 9.39995ZM12.125 10.075C11.4623 10.075 10.925 10.6122 10.925 11.275C10.925 11.9377 11.4623 12.475 12.125 12.475C12.7877 12.475 13.325 11.9377 13.325 11.275C13.325 10.6122 12.7877 10.075 12.125 10.075ZM17.75 5.94995C18.9926 5.94995 20 6.95731 20 8.19995C20 9.44259 18.9926 10.45 17.75 10.45C16.5074 10.45 15.5 9.44259 15.5 8.19995C15.5 6.95731 16.5074 5.94995 17.75 5.94995ZM7.25 5.19995C8.49264 5.19995 9.5 6.20731 9.5 7.44995C9.5 8.69259 8.49264 9.69995 7.25 9.69995C6.00736 9.69995 5 8.69259 5 7.44995C5 6.20731 6.00736 5.19995 7.25 5.19995ZM17.75 6.69995C16.9216 6.69995 16.25 7.37152 16.25 8.19995C16.25 9.02838 16.9216 9.69995 17.75 9.69995C18.5784 9.69995 19.25 9.02838 19.25 8.19995C19.25 7.37152 18.5784 6.69995 17.75 6.69995ZM7.25 5.94995C6.42157 5.94995 5.75 6.62152 5.75 7.44995C5.75 8.27838 6.42157 8.94995 7.25 8.94995C8.07843 8.94995 8.75 8.27838 8.75 7.44995C8.75 6.62152 8.07843 5.94995 7.25 5.94995Z"/>',
      }}
    />
  )
)

export const tags = ['univers', 'criteria', 'mode']
