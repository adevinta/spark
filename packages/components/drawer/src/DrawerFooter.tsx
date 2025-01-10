import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, type ReactElement, RefObject } from 'react'

export type DrawerFooterProps = ComponentPropsWithoutRef<'footer'> & {
  ref?: RefObject<HTMLDivElement>
}

export const DrawerFooter = ({ className, ref, ...rest }: DrawerFooterProps): ReactElement => (
  <footer ref={ref} className={cx(['px-xl', 'py-lg'], className)} {...rest} />
)

DrawerFooter.displayName = 'Drawer.Footer'
