import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type ReactNode, type Ref } from 'react'

export interface DrawerHeaderProps {
  children: ReactNode
  className?: string
}

export const DrawerHeader = forwardRef(
  ({ children, className, ...rest }: DrawerHeaderProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <header ref={ref} className={cx(className, ['px-xl', 'py-lg'])} {...rest}>
      {children}
    </header>
  ),
)

DrawerHeader.displayName = 'Dialog.Header'
