import * as RadixDialog from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref } from 'react'

export type ContentProps = RadixDialog.DialogContentProps

export const Content = forwardRef(
  ({ children, ...rest }: ContentProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <RadixDialog.Content data-spark-component="dialog-content" ref={ref} {...rest}>
      {children}
    </RadixDialog.Content>
  )
)

Content.displayName = 'Dialog.Content'
