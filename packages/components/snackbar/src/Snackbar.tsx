import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type SnackbarProps = ComponentPropsWithoutRef<'div'>

export const Snackbar = forwardRef<HTMLDivElement, PropsWithChildren<SnackbarProps>>(
  (props, ref) => {
    return <div ref={ref} {...props} />
  }
)
