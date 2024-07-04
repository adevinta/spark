import { Slot } from '@spark-ui/slot'
import { forwardRef, type PropsWithChildren } from 'react'

import { tagStyles, type TagStylesProps } from './Tag.styles'

interface BaseTagProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLSpanElement>>,
    TagStylesProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
}

interface FilteredDesignIntent<
  Design extends TagProps['design'],
  K extends TagStylesProps['intent'] | never = never,
> {
  design?: Design
  intent?: Exclude<TagStylesProps['intent'], K>
}

export type ValidTagDesignIntent =
  | FilteredDesignIntent<'tinted', 'surface'>
  | FilteredDesignIntent<'outlined', 'surface'>
  | FilteredDesignIntent<'filled'>

export type TagProps = BaseTagProps & ValidTagDesignIntent

export const Tag = forwardRef<HTMLButtonElement, TagProps>(
  ({ design = 'filled', intent = 'basic', asChild, className, ...others }, ref) => {
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
