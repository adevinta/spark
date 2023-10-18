import { Icon } from '@spark-ui/icon'
import { StarFill } from '@spark-ui/icons/dist/icons/StarFill'
import { StarOutline } from '@spark-ui/icons/dist/icons/StarOutline'
import { type ReactElement } from 'react'

// import { ratingStarVariants } from './RatingStar.styles'

interface RatingStarProps {
  value: number
}

export const RatingStar = ({ value }: RatingStarProps): ReactElement => (
  <div className="relative">
    <div className="absolute z-raised overflow-hidden" style={{ width: value * 100 + '%' }}>
      <Icon size="md">
        <StarFill />
      </Icon>
    </div>

    <Icon size="md">
      <StarOutline />
    </Icon>
  </div>
)
