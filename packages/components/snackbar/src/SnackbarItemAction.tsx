import { Button, type ButtonProps } from '@spark-ui/button'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import type { SnackbarItemVariantProps } from './SnackbarItem.styles'
import { useSnackbarItemContext } from './SnackbarItemContext'

export type SnackbarItemActionProps = Omit<ButtonProps, 'size' | 'shape' | 'intent'> &
  SnackbarItemVariantProps

export const SnackbarItemAction = forwardRef<HTMLButtonElement, SnackbarItemActionProps>(
  (
    {
      design: designProp = 'filled',
      intent: intentProp = 'neutral',
      onClick,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const { toast, state } = useSnackbarItemContext()

    const intent = intentProp ?? toast.content.intent
    const design = designProp ?? toast.content.design

    return (
      <Button
        ref={ref}
        size="md"
        shape="rounded"
        {...(intent === 'inverse'
          ? {
              design: 'ghost',
              intent: 'surface',
            }
          : {
              design,
              intent: intent === 'error' ? 'danger' : intent,
            })}
        onClick={e => {
          onClick?.(e)
          state.close(toast.key)
        }}
        style={{ gridArea: 'action', ...rest.style }}
        className={cx('ml-md', className)}
        {...rest}
      >
        {children}
      </Button>
    )
  }
)

SnackbarItemAction.displayName = 'Snackbar.ItemAction'
