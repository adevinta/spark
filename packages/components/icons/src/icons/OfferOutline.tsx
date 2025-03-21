import React from 'react'

import { IconProps } from '../Types'

export const OfferOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ref,
  ...props
}: IconProps) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-title="OfferOutline"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m9.48,3.96l-4.78.74-.74,4.78,10.57,10.57s.03.02.05.02.04,0,.05-.02l5.41-5.41s.02-.03.02-.05,0-.04-.02-.05L9.48,3.96Zm.04-1.96c.22-.02.44.01.64.09.2.08.38.19.53.35l10.72,10.72c.38.38.59.89.59,1.42s-.21,1.04-.59,1.42l-5.41,5.41c-.38.38-.89.59-1.42.59s-1.04-.21-1.42-.59L2.44,10.69c-.15-.15-.27-.33-.35-.53-.08-.2-.11-.42-.09-.64,0-.02,0-.04,0-.07l.81-5.29c.03-.34.18-.66.43-.91.24-.24.57-.39.91-.43l5.29-.81s.04,0,.07,0Z"/><path fill-rule="evenodd" d="m6.32,7.98c0-.92.74-1.66,1.66-1.66s1.66.74,1.66,1.66-.74,1.66-1.66,1.66-1.66-.74-1.66-1.66Z"/>',
    }}
  />
)

OfferOutline.displayName = 'OfferOutline'

export const tags = ['OfferOutline', '']
