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
import { getStarValue } from './utils'

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
  const inputRef = useRef<HTMLInputElement>(null)
  const starRefList = useRef<HTMLDivElement[]>([])

  function onRatinStarMouseEnter(event: MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget
    const currentStarIndex = starRefList.current.findIndex(star => star === target)
    // previous stars
    starRefList.current.slice(0, currentStarIndex + 1).forEach(star => {
      star.classList.add('is-hovered')
    })

    // following stars
    starRefList.current.slice(currentStarIndex + 1).forEach(star => {
      star.classList.remove('is-hovered')
    })
  }

  function onRatingStarClick(index: number) {
    setRatingValue(index + 1)

    inputRef.current?.focus()
    inputRef.current?.classList.add('is-clicked')
  }

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    setRatingValue(Number(event.target.value))
  }

  const handleRatingStarRef = useCallback((elm: HTMLDivElement | null) => {
    if (!elm) return
    starRefList.current.push(elm)
  }, [])

  const removeIsClickedClass = () => inputRef.current?.classList.remove('is-clicked')
  const removeIsHoveredClass = () =>
    starRefList.current.forEach(star => star.classList.remove('is-hovered'))

  return (
    <div ref={ref} data-spark-component="rating" {...rest} onMouseLeave={removeIsHoveredClass}>
      <input
        ref={inputRef}
        className="peer absolute opacity-0"
        type="range"
        min="0"
        max="5"
        step={1}
        value={ratingValue}
        onChange={onInputChange}
        onKeyDown={removeIsClickedClass}
        onBlur={removeIsClickedClass}
      />
      <div className={ratingStyles}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingStar
            onClick={() => onRatingStarClick(index)}
            onMouseEnter={onRatinStarMouseEnter}
            ref={handleRatingStarRef}
            key={index}
            value={getStarValue(ratingValue, index)}
          />
        ))}
      </div>

      <span className="ml-xl">{ratingValue}</span>
    </div>
  )
})
