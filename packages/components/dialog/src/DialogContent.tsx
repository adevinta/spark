import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type Ref } from 'react'

export type ContentProps = RadixDialog.DialogContentProps

export const Content = forwardRef(
  ({ children, className, ...rest }: ContentProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <div className="absolute left-none top-none h-screen w-screen">
      <RadixDialog.Content
        data-spark-component="dialog-content"
        ref={ref}
        className={cx(
          ['absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'z-modal'],
          ['bg-surface', 'shadow-md', 'rounded-lg'],
          ['p-xl'],
          className
        )}
        {...rest}
      >
        {children}
      </RadixDialog.Content>
    </div>
  )
)

Content.displayName = 'Dialog.Content'
