import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BankOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="BankOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m3.17,8.47h17.66c.32,0,.59-.11.82-.32.23-.21.34-.48.34-.8,0-.23-.05-.45-.16-.64-.11-.19-.27-.36-.47-.47L12.97,2.21c-.3-.14-.62-.21-.96-.21s-.65.07-.96.2L2.69,6.26c-.23.09-.4.25-.52.45-.11.19-.17.42-.17.64,0,.31.11.58.34.8.22.21.5.32.82.32h0Zm3.97-2.07l4.86-2.32,4.86,2.32H7.14Zm10.67,3.64c-.29,0-.56.1-.76.3-.19.19-.3.44-.3.71v6.27c0,.29.1.53.3.74.2.2.46.3.76.3s.56-.1.76-.3c.19-.19.3-.44.3-.71v-6.27c0-.29-.1-.53-.3-.74-.2-.2-.46-.3-.76-.3Zm-12.36.3c-.19.19-.3.44-.3.71v6.27c0,.29.1.53.3.74s.46.3.76.3.56-.1.76-.3c.19-.19.3-.44.3-.71v-6.27c0-.29-.1-.53-.3-.74-.2-.2-.46-.3-.76-.3s-.56.1-.76.3Zm15.52,9.59H3.06c-.29,0-.56.1-.76.3-.2.2-.3.45-.3.74s.09.53.28.73c.19.2.45.31.75.31h17.9c.29,0,.56-.1.76-.3.2-.2.3-.45.3-.74s-.09-.53-.28-.73c-.19-.2-.45-.31-.75-.31h0Zm-8.97-9.89c-.29,0-.56.1-.76.3-.19.19-.3.44-.3.71v6.27c0,.29.1.53.3.74.2.2.46.3.76.3s.56-.1.76-.3c.19-.19.3-.44.3-.71v-6.27c0-.29-.1-.53-.3-.74-.2-.2-.46-.3-.76-.3Z"/>',
      }}
    />
  )
)

BankOutline.displayName = 'BankOutline'

export const tags = ['BankOutline', '']
