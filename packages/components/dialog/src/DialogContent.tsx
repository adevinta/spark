import * as RadixDialog from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref, useEffect } from 'react'

import { dialogContentStyles, type DialogContentStylesProps } from './DialogContent.styles'
import { useDialog } from './DialogContext'

export type ContentProps = RadixDialog.DialogContentProps & DialogContentStylesProps

export const Content = forwardRef(
  (
    { children, className, size = 'md', ...rest }: ContentProps,
    ref: Ref<HTMLDivElement>
  ): ReactElement => {
    const { setIsFullScreen } = useDialog()

    useEffect(() => {
      if (size === 'fullscreen') setIsFullScreen(true)

      return () => setIsFullScreen(false)
    }, [setIsFullScreen, size])

    return (
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
    )
  }
)

Content.displayName = 'Dialog.Content'
