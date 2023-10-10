import { forwardRef, ReactNode } from 'react'

export interface DividerContentProps {
  asChild?: boolean
  children?: ReactNode
  orientation?: 'vertical' | 'horizontal'
  className?: 'string'
}

// export type DividerProps = ComponentPropsWithoutRef<'div'>

export const DividerContent = forwardRef<HTMLDivElement, DividerContentProps>(
  ({ children, ...props }, ref) => {
    return children ? (
      <span ref={ref} {...props}>
        {children}
      </span>
    ) : null
  }
)
