import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import React, { SVGProps } from 'react'

import { styles, type StylesProps } from './Checkbox.variants'

interface CheckboxRadixProps {
  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean
  /**
   * The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.
   */
  checked?: boolean
  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange?: (checked: boolean | 'indeterminate') => void
  /**
   * When true, prevents the user from interacting with the checkbox.
   */
  disabled?: boolean
  /**
   * When true, indicates that the user must check the checkbox before the owning form can be submitted.
   */
  required?: boolean
  /**
   * The name of the checkbox. Submitted with its owning form as part of a name/value pair.
   */
  name?: string
}

export interface CheckboxProps
  extends CheckboxRadixProps, // Radix props
    StylesProps, // CVA props (variants)
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {} // Native HTML props

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ intent, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={styles({ intent })} {...props}>
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
