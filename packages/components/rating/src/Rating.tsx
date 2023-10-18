import { Icon } from '@spark-ui/icon'
import { StarFill } from '@spark-ui/icons/dist/icons/StarFill'
import { StarOutline } from '@spark-ui/icons/dist/icons/StarOutline'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren, useState } from 'react'

import { ratingStyles } from './Rating.styles'
import { getNearestHalfDecimal } from './utils'

type StarValue = 0 | 0.5 | 1

const Star = ({ value }: { value: StarValue }) => (
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

  const getStarValue = (value: number, index: number): StarValue => {
    const starPosition = index + 1
    const formattedValue = getNearestHalfDecimal(value)

    if (Math.ceil(formattedValue) < starPosition) return 0

    return formattedValue >= starPosition ? 1 : 0.5
  }

  return (
    <div ref={ref} data-spark-component="rating" className={ratingStyles} {...rest}>
      <input
        className="pointer-events-none absolute z-base h-full w-full opacity-0"
        type="range"
        min="0"
        max="5"
        value={ratingValue}
        onChange={e => setRatingValue(Number(e.target.value))}
      />
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} value={getStarValue(ratingValue, index)} />
      ))}

      {ratingValue}
    </div>
  )
})
