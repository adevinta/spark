import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type ReactNode, type Ref } from 'react'

export interface FooterProps {
  children: ReactNode
  className?: string
}

export const Footer = forwardRef(
  ({ children, className, ...rest }: FooterProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <footer ref={ref} className={cx(className, ['px-xl', 'py-lg'])} {...rest}>
      {children}
    </footer>
  )
)

Footer.displayName = 'Drawer.Footer'
