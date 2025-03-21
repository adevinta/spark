import React from 'react'

import { IconProps } from '../Types'

export const Scan = ({
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
    data-title="Scan"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" d="m2.69,2.69c.44-.44,1.04-.69,1.67-.69h2.08c.54,0,.98.44.98.98s-.44.98-.98.98h-2.08c-.11,0-.21.04-.29.12-.08.08-.12.18-.12.29v2.08c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-2.08c0-.63.25-1.23.69-1.67Zm13.89.28c0-.54.44-.98.98-.98h2.08c.63,0,1.23.25,1.67.69.44.44.69,1.04.69,1.67v2.08c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-2.08c0-.11-.04-.21-.12-.29-.08-.08-.18-.12-.29-.12h-2.08c-.54,0-.98-.44-.98-.98ZM2.98,16.58c.54,0,.98.44.98.98v2.08c0,.11.04.21.12.29.08.08.18.12.29.12h2.08c.54,0,.98.44.98.98s-.44.98-.98.98h-2.08c-.63,0-1.23-.25-1.67-.69-.44-.44-.69-1.04-.69-1.67v-2.08c0-.54.44-.98.98-.98Zm18.05,0c.54,0,.98.44.98.98v2.08c0,.63-.25,1.23-.69,1.67-.44.44-1.04.69-1.67.69h-2.08c-.54,0-.98-.44-.98-.98s.44-.98.98-.98h2.08c.11,0,.21-.04.29-.12.08-.08.12-.18.12-.29v-2.08c0-.54.44-.98.98-.98ZM6.33,6.17c.54,0,.98.44.98.98v7.29c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-7.29c0-.54.44-.98.98-.98Zm2.43,0c.54,0,.98.44.98.98v7.29c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-7.29c0-.54.44-.98.98-.98Zm3.24,0c.54,0,.98.44.98.98v7.29c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-7.29c0-.54.44-.98.98-.98Zm3.24,0c.54,0,.98.44.98.98v7.29c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-7.29c0-.54.44-.98.98-.98Zm2.43,0c.54,0,.98.44.98.98v7.29c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-7.29c0-.54.44-.98.98-.98Zm-12.31,10.69c0-.54.44-.98.98-.98h11.34c.54,0,.98.44.98.98s-.44.98-.98.98H6.33c-.54,0-.98-.44-.98-.98Z"/>',
    }}
  />
)

Scan.displayName = 'Scan'

export const tags = ['Scan', '']
