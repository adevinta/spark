import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Vaccine = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.77792 4.42203C7.19634 4.00361 7.89644 4.02532 8.34164 4.47052C8.78683 4.91572 8.80854 5.61582 8.39012 6.03423L8.13759 6.28677L9.21239 7.36158L9.46493 7.10904C9.5889 6.98506 9.78147 6.97141 9.92083 7.06801L9.97036 7.10939L18.063 15.202C18.1871 15.3262 18.2011 15.5188 18.1047 15.658L18.0633 15.7075L17.3057 16.4651L19.1866 18.346C19.335 18.4944 19.3423 18.7277 19.2028 18.8672C19.0788 18.9912 18.8807 18.9992 18.7339 18.8953L18.6816 18.8511L16.8007 16.9701L16.043 17.7278C15.9191 17.8517 15.7265 17.8654 15.5871 17.7688L15.5376 17.7274L7.44498 9.63478C7.32083 9.51062 7.30691 9.31803 7.4033 9.17881L7.44462 9.12934L7.69716 8.8768L6.62236 7.802L6.36982 8.05454C5.97601 8.44835 5.33269 8.45228 4.8872 8.08022L4.8061 8.00605C4.3609 7.56086 4.3392 6.86076 4.75761 6.44234L6.77792 4.42203ZM16.736 14.8852L15.2208 16.4004L15.7582 16.9378L17.2734 15.4226L16.736 14.8852ZM9.74979 7.89898L8.23456 9.41421L9.84676 11.0264L10.6044 10.2688C10.7439 10.1293 10.9772 10.1366 11.1256 10.285C11.2575 10.4169 11.2779 10.6159 11.1828 10.7565L11.1418 10.8062L10.3842 11.5638L11.459 12.6386L12.2166 11.881C12.3561 11.7415 12.5894 11.7488 12.7378 11.8972C12.8697 12.0291 12.8901 12.2281 12.795 12.3687L12.754 12.4184L11.9964 13.176L13.0712 14.2508L13.8288 13.4932C13.9683 13.3537 14.2016 13.361 14.35 13.5094C14.4819 13.6413 14.5023 13.8403 14.4073 13.9809L14.3662 14.0306L13.6086 14.7882L14.6834 15.863L16.1986 14.3478L9.74979 7.89898ZM7.63251 6.79185L7.12743 7.29693L8.20223 8.37173L8.70731 7.86665L7.63251 6.79185ZM7.31532 4.95943L5.29502 6.97974C5.15554 7.11921 5.16278 7.35258 5.31118 7.50098C5.45958 7.64938 5.69294 7.65661 5.83242 7.51714L7.85272 5.49683C7.9922 5.35736 7.98496 5.12399 7.83656 4.9756C7.68816 4.8272 7.45479 4.81996 7.31532 4.95943Z"/>',
      }}
    />
  )
)

Vaccine.displayName = 'Vaccine'

export const tags = ['vaccine', 'criteria', 'animals']
