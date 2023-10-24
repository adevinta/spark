import {
  type ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  type MouseEvent,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from 'react'

import { ratingStyles } from './Rating.styles'
import { RatingStar } from './RatingStar'
import { getStarValue, splitAt } from './utils'

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

export const Rating = forwardRef<HTMLDivElement, RatingProps>(({ value, ...rest }, ref) => {
  const [ratingValue, setRatingValue] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)
  const starRefList = useRef<HTMLDivElement[]>([])

  function onRatingStarClick(index: number) {
    setRatingValue(index + 1)

    if (!inputRef.current) return

    inputRef.current.focus()
    inputRef.current.setAttribute('data-clicked', '')
  }

  function onRatinStarMouseEnter(event: MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget
    const currentStarIndex = starRefList.current.findIndex(star => star === target)

    const [previousStars, followingStars] = splitAt(starRefList.current, currentStarIndex + 1)

    previousStars.forEach(star => star.setAttribute('data-hovered', ''))
    followingStars.forEach(star => star.removeAttribute('data-hovered'))
  }

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    setRatingValue(Number(event.target.value))
  }

  const handleRatingStarRef = useCallback((elm: HTMLDivElement | null) => {
    if (!elm) return
    starRefList.current.push(elm)
  }, [])

  function resetDataPartInputAttr() {
    inputRef.current?.removeAttribute('data-clicked')
  }

  function resetDataPartStarAttr() {
    starRefList.current.forEach(star => star.removeAttribute('data-hovered'))
  }

  return (
    <div
      className="relative"
      ref={ref}
      data-spark-component="rating"
      {...rest}
      onMouseLeave={resetDataPartStarAttr}
    >
      <input
        ref={inputRef}
        data-part="input"
        className="peer absolute inset-none opacity-0"
        type="range"
        min="0"
        max="5"
        step={1}
        value={ratingValue}
        onChange={onInputChange}
        onKeyDown={resetDataPartInputAttr}
        onBlur={resetDataPartInputAttr}
      />
      <div className={ratingStyles}>
        {Array.from({ length: 5 }).map((_, index, self) => (
          <RatingStar
            withPadding={index < self.length - 1}
            onClick={() => onRatingStarClick(index)}
            onMouseEnter={onRatinStarMouseEnter}
            ref={handleRatingStarRef}
            key={index}
            value={getStarValue(ratingValue, index)}
          />
        ))}
      </div>
    </div>
  )
})
