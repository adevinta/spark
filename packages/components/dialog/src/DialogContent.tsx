import * as RadixDialog from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref } from 'react'

import {
  dialogContentStyles,
  type DialogContentStylesProps,
  dialogContentWrapperStyles,
} from './DialogContent.styles'

export type ContentProps = RadixDialog.DialogContentProps & DialogContentStylesProps

export const Content = forwardRef(
  (
    { children, className, size = 'md', ...rest }: ContentProps,
    ref: Ref<HTMLDivElement>,
  ): ReactElement => (
    <div className={dialogContentWrapperStyles()}>
      <RadixDialog.Content
        data-spark-component="dialog-content"
        ref={ref}
        className={dialogContentStyles({
          size,
          className,
        })}
        {...rest}
      >
        {children}
      </RadixDialog.Content>
    </div>
  ),
)

Content.displayName = 'Dialog.Content'
