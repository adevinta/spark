import * as RadixDialog from '@radix-ui/react-dialog'
import { Ref } from 'react'

export type CloseProps = RadixDialog.DialogCloseProps & {
  ref?: Ref<HTMLButtonElement>
}

export const Close = (props: CloseProps) => <RadixDialog.Close {...props} />

Close.displayName = 'Dialog.Close'
