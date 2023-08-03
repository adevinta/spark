import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type ReactNode, type Ref } from 'react'

export interface DrawerFooterProps {
  children: ReactNode
  className?: string
}

export const DrawerFooter = forwardRef(
  ({ children, className, ...rest }: DrawerFooterProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <footer ref={ref} className={cx(className, ['px-xl', 'py-lg'])} {...rest}>
      {children}
    </footer>
  )
)

DrawerFooter.displayName = 'Drawer.Footer'
