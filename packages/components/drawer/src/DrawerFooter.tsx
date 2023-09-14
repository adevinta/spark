import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, type ReactElement, type Ref } from 'react'

export type DrawerFooterProps = ComponentPropsWithoutRef<'footer'>

export const DrawerFooter = forwardRef(
  ({ className, ...rest }: DrawerFooterProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <footer ref={ref} className={cx(['px-xl', 'py-lg'], className)} {...rest} />
  )
)

DrawerFooter.displayName = 'Drawer.Footer'
