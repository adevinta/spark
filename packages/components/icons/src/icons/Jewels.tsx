import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Jewels = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8802 4.20671C15.1229 4.29467 17.2362 5.23718 18.7513 6.82513C20.2764 8.40138 21.0833 10.4957 20.9932 12.6441C20.9031 14.7926 19.9234 16.818 18.2711 18.2717C16.754 19.6612 14.7416 20.444 12.6438 20.4608C12.281 20.4603 11.919 20.4365 11.5603 20.3896C11.3263 20.8324 10.8695 21.1397 10.3408 21.1914L10.1802 21.1999C9.8251 21.2027 9.48052 21.0845 9.20787 20.8665C8.88933 20.6203 8.68659 20.2624 8.64471 19.8722C8.60283 19.4821 8.72529 19.0921 8.98486 18.7889C9.24276 18.4818 9.61911 18.2876 10.0285 18.2503C10.4359 18.2129 10.8424 18.3295 11.1614 18.5752C11.4903 18.833 11.6867 19.2029 11.7218 19.5934C13.8969 19.8653 16.1045 19.1729 17.6983 17.682C20.7876 14.9494 20.9818 10.3327 18.1321 7.37039C15.2824 4.40805 10.4679 4.22179 7.37866 6.95437C4.53649 9.33288 4.03143 13.3716 6.16863 16.321C6.38803 16.1591 6.65236 16.0591 6.93244 16.0345C7.55463 15.9704 8.15536 16.2741 8.45227 16.8029C8.72797 17.2939 8.69078 17.8883 8.36552 18.3419L8.28536 18.444C7.98243 18.7933 7.53043 18.9914 7.05705 18.9823C6.46683 18.975 5.93356 18.6426 5.68645 18.128C5.51323 17.7673 5.50225 17.3622 5.64119 17.0021C3.0653 13.7097 3.57225 9.06689 6.80581 6.3566C8.45109 4.89261 10.6376 4.11875 12.8802 4.20671ZM10.1891 19.0967H10.1177C9.76334 19.137 9.5065 19.4399 9.53792 19.7807C9.55338 19.9469 9.63674 20.1005 9.76985 20.2081C9.90781 20.3082 10.079 20.3568 10.2516 20.3449C10.5125 20.3151 10.7301 20.1398 10.8056 19.8985C10.8812 19.6573 10.8002 19.3961 10.5995 19.2335C10.4814 19.1471 10.3376 19.0991 10.1891 19.0967ZM7.1431 16.8776L7.05705 16.8804C6.76525 16.9099 6.53025 17.1234 6.4836 17.4015C6.43695 17.6796 6.59023 17.9532 6.85763 18.0691C7.12503 18.1851 7.4402 18.1146 7.6267 17.8971C7.73794 17.7719 7.78958 17.6077 7.76912 17.4443C7.75336 17.2786 7.66927 17.1258 7.53554 17.0199C7.4241 16.9316 7.2859 16.882 7.1431 16.8776ZM13.4339 6.04778C13.5573 6.04778 13.6673 6.13014 13.717 6.25425L13.7346 6.30987C13.9475 6.914 14.0526 7.28875 14.05 7.43413L14.0469 7.46318C14.0494 7.53404 14.0286 7.60731 13.9787 7.67113L13.1876 8.68315C15.4222 9.00086 17.1365 10.8437 17.1365 13.0695C17.132 15.517 15.0589 17.5 12.5002 17.5043C9.93966 17.5043 7.86394 15.5188 7.86394 13.0695C7.86394 10.8434 9.57861 9.00043 11.8135 8.68304L11.0231 7.67113C10.9673 7.59967 10.9478 7.51636 10.9569 7.43785L10.9548 7.43583L10.9602 7.41577C10.9638 7.3965 10.9691 7.37763 10.976 7.3594L11.2658 6.31476C11.2961 6.17747 11.3952 6.07603 11.5151 6.05281L11.5676 6.04778H13.4339ZM12.5002 9.41551C10.3905 9.41551 8.68018 11.0515 8.68018 13.0695C8.68018 15.0876 10.3905 16.7235 12.5002 16.7235C14.6099 16.7235 16.3202 15.0876 16.3202 13.0695C16.3157 11.0532 14.6081 9.4198 12.5002 9.41551ZM13.0938 7.79001H11.9074L12.5003 8.54963L13.0938 7.79001ZM13.1944 6.75271H11.8102L11.7209 7.15647H13.2887L13.1944 6.75271Z"/>',
      }}
    />
  )
)

Jewels.displayName = 'Jewels'

export const tags = ['jewels', 'criteria', 'mode']
