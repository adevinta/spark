import * as RadixDialog from '@radix-ui/react-dialog'
import { ElementRef, forwardRef } from 'react'

export type DescriptionElement = ElementRef<typeof RadixDialog.Description>
export type DescriptionProps = RadixDialog.DialogDescriptionProps

export const Description = forwardRef<DescriptionElement, DescriptionProps>((props, ref) => (
  <RadixDialog.Description ref={ref} {...props} />
))

Description.displayName = 'Dialog.Description'
