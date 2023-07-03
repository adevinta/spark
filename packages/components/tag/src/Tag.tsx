import { Slot } from '@spark-ui/slot'
import { forwardRef, type PropsWithChildren } from 'react'

import { tagStyles, type TagStylesProps } from './Tag.styles'

export interface TagProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLSpanElement>>,
    TagStylesProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
}

export const Tag = forwardRef<HTMLButtonElement, TagProps>(
  ({ design = 'filled', intent = 'primary', asChild, className, ...others }, ref) => {
    const Component = asChild ? Slot : 'span'

    return (
      <Component
        data-spark-component="tag"
        ref={ref}
        className={tagStyles({
          className,
          design,
          intent,
        })}
        {...others}
      />
    )
  }
)
