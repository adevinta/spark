import * as RadixDialog from '@radix-ui/react-dialog'
import { RefObject } from 'react'

export type DescriptionProps = RadixDialog.DialogDescriptionProps & {
  ref?: RefObject<HTMLParagraphElement>
}

export const Description = (props: DescriptionProps) => <RadixDialog.Description {...props} />

Description.displayName = 'Dialog.Description'
