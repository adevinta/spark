import * as RadixDialog from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref, useEffect } from 'react'

import { dialogContentStyles, type DialogContentStylesProps } from './DialogContent.styles'
import { useDialog } from './DialogContext'

export interface ContentProps extends RadixDialog.DialogContentProps, DialogContentStylesProps {
  /**
   * When set to true, the content will adjust its width to fit the content rather than taking up the full available width.
   */
  isNarrow?: boolean
}

export const Content = forwardRef(
  (
    { children, className, isNarrow = false, size = 'md', ...rest }: ContentProps,
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
          className,
          isNarrow,
          size,
        })}
        {...rest}
      >
        {children}
      </RadixDialog.Content>
    )
  }
)

Content.displayName = 'Dialog.Content'
