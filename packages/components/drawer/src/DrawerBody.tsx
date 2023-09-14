import { cx } from 'class-variance-authority'
import { forwardRef, type ReactNode, type Ref } from 'react'

export interface DrawerBodyProps {
  children: ReactNode
  className?: string
}

export const DrawerBody = forwardRef(
  ({ children, className, ...rest }: DrawerBodyProps, ref: Ref<HTMLDivElement>) => (
    <div
      ref={ref}
      className={cx(
        ['px-xl', 'py-md', 'flex-grow', 'overflow-y-auto'],
        ['outline-none', 'focus-visible:u-ring'],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
)

DrawerBody.displayName = 'Drawer.Body'
