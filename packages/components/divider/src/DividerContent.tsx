import { forwardRef, HTMLAttributes, PropsWithRef, ReactNode } from 'react'

export interface DividerContentProps extends PropsWithRef<HTMLAttributes<HTMLSpanElement>> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  children?: ReactNode
}

export const DividerContent = forwardRef<HTMLSpanElement, DividerContentProps>(
  ({ children, ...props }, ref) => {
    return children ? (
      <span ref={ref} {...props}>
        {children}
      </span>
    ) : null
  }
)

DividerContent.displayName = 'Divider.Content'
