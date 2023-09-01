import * as RadixDialog from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref, useEffect } from 'react'

import {
  dialogContentStyles,
  type DialogContentStylesProps,
  dialogContentWrapperStyles,
} from './DialogContent.styles'

export type ContentProps = RadixDialog.DialogContentProps & DialogContentStylesProps

export const Content = forwardRef(
  (
    { children, className, size = 'md', ...rest }: ContentProps,
    ref: Ref<HTMLDivElement>
  ): ReactElement => {
    useEffect(() => {
      if (size !== 'fullscreen') return
      document.body.classList.add('modal-is-fullscreen')

      return () => document.body.classList.remove('modal-is-fullscreen')
    }, [size])

    return (
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
    )
  }
)

Content.displayName = 'Dialog.Content'
