import * as RadixDialog from '@radix-ui/react-dialog'
import { RefObject } from 'react'

export type CloseProps = RadixDialog.DialogCloseProps & {
  ref?: RefObject<HTMLButtonElement>
}

export const Close = (props: CloseProps) => <RadixDialog.Close {...props} />

Close.displayName = 'Dialog.Close'
