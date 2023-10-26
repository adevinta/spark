import { Icon } from '@spark-ui/icon'
import { StarFill } from '@spark-ui/icons/dist/icons/StarFill'
import { StarOutline } from '@spark-ui/icons/dist/icons/StarOutline'
import { cx } from 'class-variance-authority'
import { forwardRef, type MouseEvent } from 'react'

import {
  ratingStarIconStyles,
  ratingStarStyles,
  type RatingStarstylesProps,
} from './RatingStar.styles'
import type { Size, StarValue } from './types'

export interface RatingStarProps extends RatingStarstylesProps {
  size?: Size
  value: StarValue
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  onMouseEnter: (event: MouseEvent<HTMLDivElement>) => void
}

export const RatingStar = forwardRef<HTMLDivElement, RatingStarProps>(
  ({ value, size, disabled, readOnly, onClick, onMouseEnter }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        onMouseEnter={onMouseEnter}
        className={ratingStarStyles({
          gap: size === 'lg' ? 'md' : 'sm',
          disabled,
          readOnly,
        })}
        data-part="star"
        onClick={onClick}
      >
        <div
          className={cx(
            'absolute z-raised overflow-hidden',
            'group-[[data-part=star][data-hovered]]:overflow-visible'
          )}
          style={{ width: value * 100 + '%' }}
        >
          <Icon
            className={ratingStarIconStyles({
              size,
              kind: 'filled',
            })}
          >
            <StarFill />
          </Icon>
        </div>

        <Icon className={ratingStarIconStyles({ size, kind: 'outlined' })}>
          <StarOutline />
        </Icon>
      </div>
    )
  }
)
