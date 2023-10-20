import { Icon } from '@spark-ui/icon'
import { StarFill } from '@spark-ui/icons/dist/icons/StarFill'
import { StarOutline } from '@spark-ui/icons/dist/icons/StarOutline'
import { cx } from 'class-variance-authority'
import { forwardRef, type MouseEvent } from 'react'

export interface RatingStarProps {
  value: 0 | 0.5 | 1
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  onMouseEnter: (event: MouseEvent<HTMLDivElement>) => void
}

export const RatingStar = forwardRef<HTMLDivElement, RatingStarProps>(
  ({ value, onClick, onMouseEnter }, ref) => {
    return (
      <div
        ref={ref}
        onMouseEnter={onMouseEnter}
        className="group relative cursor-pointer"
        data-star
        onClick={onClick}
      >
        <div
          className={cx(
            'absolute z-raised overflow-hidden',
            'group-hover:overflow-visible group-[.is-hovered]:overflow-visible'
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
  }
)
