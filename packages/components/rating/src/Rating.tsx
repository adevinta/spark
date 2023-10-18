import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren, useState } from 'react'

import { ratingStyles } from './Rating.styles'
import { RatingStar } from './RatingStar'
import { getNearestHalfDecimal } from './utils'

type StarValue = 0 | 0.5 | 1

export interface RatingProps extends PropsWithChildren<ComponentPropsWithoutRef<'div'>> {
  /**
   * The value is the number of the rating selected, on a sentiment scale from 0 to 5.
   */
  value: number
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
    <div ref={ref} data-spark-component="rating" {...rest}>
      <input
        className="peer absolute opacity-0"
        type="range"
        min="0"
        max="5"
        step={0.5} // ?
        value={ratingValue}
        onChange={e => setRatingValue(Number(e.target.value))}
      />
      <div className={ratingStyles}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingStar key={index} value={getStarValue(ratingValue, index)} />
        ))}
      </div>

      {ratingValue}
    </div>
  )
})
