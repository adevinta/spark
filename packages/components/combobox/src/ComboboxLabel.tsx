import { cx } from 'class-variance-authority'
import { forwardRef, type Ref } from 'react'

import { useComboboxGroupContext } from './ComboboxItemsGroupContext'

interface LabelProps {
  children: string
  className?: string
}

export const Label = forwardRef(
  ({ children, className }: LabelProps, forwardedRef: Ref<HTMLDivElement>) => {
    const { labelId } = useComboboxGroupContext()

    return (
      <div
        ref={forwardedRef}
        id={labelId}
        className={cx('px-md py-sm text-body-2 italic text-neutral', className)}
      >
        {children}
      </div>
    )
  }
)

Label.displayName = 'Combobox.Label'
