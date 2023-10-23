import { Icon } from '@spark-ui/icon'
import { StarFill } from '@spark-ui/icons/dist/icons/StarFill'
import { StarOutline } from '@spark-ui/icons/dist/icons/StarOutline'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { forwardRef, type MouseEvent } from 'react'

export interface RatingStarProps {
  value: 0 | 0.5 | 1
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  onMouseEnter: (event: MouseEvent<HTMLDivElement>) => void
}

const ratingStarstyles = cva('group relative cursor-pointer', {
  variants: {
    withPadding: {
      true: 'pr-sm',
      false: '',
    },
  },
  defaultVariants: {
    withPadding: false,
  },
})

export const RatingStar = forwardRef<
  HTMLDivElement,
  RatingStarProps & VariantProps<typeof ratingStarstyles>
>(({ value, withPadding, onClick, onMouseEnter }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      onMouseEnter={onMouseEnter}
      className={ratingStarstyles({ withPadding })}
      data-part="star"
      onClick={onClick}
    >
      <div
        className={cx(
          'absolute z-raised overflow-hidden',
          'group-hover:overflow-visible group-[[data-part=star][data-hovered]]:overflow-visible'
        )}
        style={{ width: value * 100 + '%' }}
      >
        <Icon size="md">
          <StarFill />
        </Icon>
      </div>

      <Icon size="md">
        <StarOutline />
      </Icon>
    </div>
  )
})
