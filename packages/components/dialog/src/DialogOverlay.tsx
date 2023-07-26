import * as RadixDialog from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref } from 'react'

export type OverlayProps = RadixDialog.DialogOverlayProps

export const Overlay = forwardRef(
  ({ children, ...rest }: OverlayProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <RadixDialog.Overlay data-spark-component="dialog-overlay" ref={ref} {...rest}>
      {children}
    </RadixDialog.Overlay>
  )
)

Overlay.displayName = 'Dialog.Overlay'
