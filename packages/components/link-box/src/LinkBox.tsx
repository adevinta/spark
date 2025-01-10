import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'

export interface LinkBoxProps extends React.ComponentPropsWithRef<'div'> {
  asChild?: boolean
}

export const LinkBox = ({ className, asChild, ref, ...props }: LinkBoxProps) => {
  const Component = asChild ? Slot : 'div'

  return (
    <Component
      ref={ref}
      data-spark-component="link-box"
      className={cx('relative', className)}
      {...props}
    />
  )
}

LinkBox.displayName = 'LinkBox'
