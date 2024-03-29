import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import type { SnackbarItemVariantProps } from './SnackbarItem.styles'
import { useSnackbarItemContext } from './SnackbarItemContext'

export interface SnackbarItemCloseProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'aria-label' | 'disabled'>,
    Pick<IconButtonProps, 'aria-label'>,
    SnackbarItemVariantProps {}

export const SnackbarItemClose = forwardRef<HTMLButtonElement, SnackbarItemCloseProps>(
  (
    {
      design: designProp = 'filled',
      intent: intentProp = 'neutral',
      'aria-label': ariaLabel,
      onClick,
      className,
      ...rest
    },
    ref
  ) => {
    const { toast, state } = useSnackbarItemContext()

    const intent = intentProp ?? toast.content.intent
    const design = designProp ?? toast.content.design

    return (
      <IconButton
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
        aria-label={ariaLabel}
        onClick={e => {
          onClick?.(e)
          state.close(toast.key)
        }}
        className={className}
        {...rest}
      >
        <Icon size="sm">
          <Close />
        </Icon>
      </IconButton>
    )
  }
)

SnackbarItemClose.displayName = 'Snackbar.ItemClose'
