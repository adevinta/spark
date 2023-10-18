import { Icon } from '@spark-ui/icon'
import { StarFill } from '@spark-ui/icons/dist/icons/StarFill'
import { StarOutline } from '@spark-ui/icons/dist/icons/StarOutline'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren, useState } from 'react'

import { ratingStyles } from './Rating.styles'

const Star = ({ value }: { value: number }) => (
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

export interface RatingProps extends PropsWithChildren<ComponentPropsWithoutRef<'div'>> {
  /**
   * The value is the number of the rating selected, on a sentiment scale from 0 to 5.
   */
  value: number
  /**
   * The stepping interval.
   * @default 1
   */
  step?: number
  /**
   * Sets the component as interactive or not.
   * @default false
   */
  readOnly?: boolean
  /**
   * When `true`, prevents the user from interacting.
   * @default false
   */
  disabled?: boolean
}

// + intent, size

export const Rating = forwardRef<HTMLDivElement, RatingProps>(({ value, ...rest }, ref) => {
  const [ratingValue, setRatingValue] = useState(value)

  const getStarValue = (value: number, index: number): number => {
    const position = index + 1

    if (position - Math.round(value) > 0) return 0

    return Math.round(value * 2) / 2 >= position ? 1 : 0.5
  }

  return (
    <div ref={ref} data-spark-component="rating" className={ratingStyles} {...rest}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} value={getStarValue(ratingValue, index)} />
      ))}

      {ratingValue}

      <input
        className="mt-xl block w-full"
        type="range"
        min="0"
        max="5"
        value={ratingValue}
        onChange={e => setRatingValue(Number(e.target.value))}
      />
    </div>
  )
})
