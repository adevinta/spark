import * as SwitchPrimitive from '@radix-ui/react-switch'

import { switchThumbVariants, switchVariants, type SwitchVariantsProps } from './Switch.variants'

interface SwitchRadixProps {
  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean
  /**
   * When true, prevents the user from interacting with the switch.
   */
  disabled?: boolean
  /**
   * When true, indicates that the user must check the switch before the owning form can be submitted.
   */
  required?: boolean
  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * The value given as data when submitted with a name.
   */
  value?: string
  /**
   * The controlled state of the switch. Must be used in conjunction with `onCheckedChange`.
   */
  checked?: boolean
  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void
}

export interface SwitchProps extends SwitchRadixProps, SwitchVariantsProps {}

export function Switch({ value = 'on', size = 'medium', ...rest }: SwitchProps) {
  return (
    <SwitchPrimitive.Root className={switchVariants({ size })} {...rest}>
      <SwitchPrimitive.Thumb className={switchThumbVariants({ size })} />
    </SwitchPrimitive.Root>
  )
}
