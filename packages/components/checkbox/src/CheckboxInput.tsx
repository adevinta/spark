import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ButtonHTMLAttributes, ElementRef, forwardRef, ReactNode, useState } from 'react'

import { inputStyles, type InputStylesProps } from './CheckboxInput.styles'

type CheckedStatus = boolean | 'indeterminate'

type AriaCheckedStatus = 'true' | 'false' | 'mixed' | undefined

interface RadixProps {
  /**
   * The checked icon to use
   */
  icon?: ReactNode
  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
   */
  defaultChecked?: CheckedStatus
  /**
   * The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.
   */
  checked?: CheckedStatus
  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange?: (checked: CheckedStatus) => void
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

const useIcon = ({ icon, checked }: { icon: ReactNode; checked: AriaCheckedStatus }) => {
  if (icon) {
    return icon
  }
  switch (checked) {
    case 'true':
      return <Check />
    case 'mixed':
      return <Minus />
    default:
      return null
  }
}

export interface InputProps
  extends RadixProps, // Radix props
    InputStylesProps, // CVA props (variants)
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'checked' | 'defaultChecked'> {} // Native HTML props

export const Input = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, InputProps>(
  ({ intent, icon, className, ...props }, forwardedRef) => {
    const [innerChecked, setInnerChecked] = useState<'true' | 'false' | 'mixed'>()
    const ref = useMergeRefs(forwardedRef, node => {
      setInnerChecked(node?.getAttribute('aria-checked') as AriaCheckedStatus)
    })
    const innerIcon = useIcon({ icon, checked: innerChecked })

    return (
      <CheckboxPrimitive.Root ref={ref} className={inputStyles({ intent, className })} {...props}>
        <CheckboxPrimitive.Indicator className="text-surface flex items-center justify-center">
          {innerIcon}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
)
