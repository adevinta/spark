import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import React, { SVGProps } from 'react'

import { styles } from './Checkbox.variants'

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={styles()} {...props}>
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-surface">
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={14} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.645 9.696a1.076 1.076 0 0 1-1.499 0L.288 5.956A1.023 1.023 0 0 1 .31 4.511a1.077 1.077 0 0 1 1.476-.022l3.061 2.998 7.319-7.16a1.075 1.075 0 0 1 1.037-.294c.374.094.666.38.763.747.096.367-.02.756-.301 1.015l-8.02 7.901Z"
      fill="currentColor"
    />
  </svg>
)
