import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type ReactNode, type Ref } from 'react'

export interface BodyProps {
  children: ReactNode
  className?: string
}

export const Body = forwardRef(
  ({ children, className, ...rest }: BodyProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <div
      ref={ref}
      className={cx(
        className,
        ['px-xl', 'py-md', 'flex-grow', 'overflow-y-auto'],
        ['outline-none', 'focus-visible:ring-2', 'focus-visible:ring-outline-high'],
      )}
      {...rest}
    >
      {children}
    </div>
  ),
)

Body.displayName = 'Dialog.Body'
