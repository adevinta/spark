import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type ReactNode, type Ref } from 'react'

export interface HeaderProps {
  children: ReactNode
  className?: string
}

export const Header = forwardRef(
  ({ children, className, ...rest }: HeaderProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <header ref={ref} className={cx(className, ['px-xl', 'py-lg'])} {...rest}>
      {children}
    </header>
  )
)

Header.displayName = 'Dialog.Header'
