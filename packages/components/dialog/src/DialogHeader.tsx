import { cx } from 'class-variance-authority'
import { type ReactElement, type ReactNode, RefObject } from 'react'

export interface HeaderProps {
  children: ReactNode
  className?: string
  ref?: RefObject<HTMLDivElement>
}

export const Header = ({ children, className, ref, ...rest }: HeaderProps): ReactElement => (
  <header ref={ref} className={cx(className, ['px-xl', 'py-lg'])} {...rest}>
    {children}
  </header>
)

Header.displayName = 'Dialog.Header'
