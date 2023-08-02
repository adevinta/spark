import * as RadixDialog from '@radix-ui/react-dialog'
import { ElementRef, forwardRef } from 'react'

type CloseElement = ElementRef<typeof RadixDialog.Close>
export type CloseProps = RadixDialog.DialogCloseProps

export const Close = forwardRef<CloseElement, CloseProps>((props, ref) => (
  <RadixDialog.Close ref={ref} {...props} />
))

Close.displayName = 'Dialog.Close'
