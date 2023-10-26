import { cx } from 'class-variance-authority'
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

import { RatingStar } from './RatingStar'
import { type Size } from './types'
import { getNearestDecimal, getStarValue, splitAt } from './utils'

export interface RatingProps extends PropsWithChildren<ComponentPropsWithoutRef<'div'>> {
  /**
   * Use the `defaultValue` prop to set the default value of the input, on a from 0 to 5.
   *
   * Use this when you want to use it in an uncontrolled manner
   */
  defaultValue?: number
  /**
   * The value is the number of the rating selected, on a scale from 0 to 5.
   *
   * * Use this when you want to use it in a controlled manner
   */
  value?: number
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: number) => void
  /**
   * Sets the component as interactive or not.
   * @default undefined
   */
  readOnly?: boolean
  /**
   * When `true`, prevents the user from interacting.
   * @default false
   */
  disabled?: boolean
  /**
   * Sets the size of the stars.
   * @default 'md'
   */
  size?: Size
  /**
   * Name of the underlying input.
   * @default undefined
   */
  name?: string
  /**
   * id of the underlying input.
   * @default undefined
   */
  id?: string
  /**
   * aria-label of the underlying input.
   * @default undefined
   */
  'aria-label'?: string
}

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      defaultValue,
      value: propValue,
      onValueChange,
      size = 'md',
      disabled,
      readOnly = size !== 'lg',
      name,
      id,
      ...rest
    },
    ref
  ) => {
    const [ratingValue, setRatingValue] = useState(defaultValue ?? propValue)
    const inputRef = useRef<HTMLInputElement>(null)
    const starRefList = useRef<HTMLDivElement[]>([])

    const value = propValue ?? ratingValue

    const isControlled = defaultValue === undefined
    const isNonInteractive = !!(disabled || readOnly)

    function onStarClick(index: number) {
      if (!inputRef.current || isNonInteractive) return

      if (isControlled) onValueChange?.(index + 1)
      else setRatingValue(index + 1)

      inputRef.current.focus()
      inputRef.current.setAttribute('data-clicked', '')
    }

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
      if (isNonInteractive) return

      if (isControlled) onValueChange?.(Number(event.target.value))
      else setRatingValue(Number(event.target.value))
    }

    function onStarMouseEnter(event: MouseEvent<HTMLDivElement>) {
      if (isNonInteractive) return

      const target = event.currentTarget
      const currentStarIndex = starRefList.current.findIndex(star => star === target)

      const [previousStars, followingStars] = splitAt(starRefList.current, currentStarIndex + 1)

      previousStars.forEach(star => star.setAttribute('data-hovered', ''))
      followingStars.forEach(star => star.removeAttribute('data-hovered'))
    }

    const handleStarRef = useCallback((elm: HTMLDivElement | null) => {
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
          name={name}
          id={id}
          aria-label={rest['aria-label'] ?? 'rating'}
          ref={inputRef}
          data-part="input"
          className="peer absolute inset-none opacity-0"
          type="range"
          min="0"
          max="5"
          step={1}
          disabled={disabled}
          readOnly={readOnly}
          value={getNearestDecimal(value)}
          onChange={onInputChange}
          onKeyDown={resetDataPartInputAttr}
          onBlur={resetDataPartInputAttr}
        />
        <div
          className={cx(
            size === 'lg' ? 'gap-x-md' : 'gap-x-sm',
            'flex',
            'peer-focus-visible:u-ring peer-[[data-part=input][data-clicked]]:shadow-none'
          )}
        >
          {Array.from({ length: 5 }).map((_, index, self) => (
            <RatingStar
              disabled={disabled}
              readOnly={readOnly}
              size={size}
              isLastItem={index === self.length - 1}
              onClick={() => onStarClick(index)}
              onMouseEnter={onStarMouseEnter}
              ref={handleStarRef}
              key={index}
              value={getStarValue({ index, value })}
            />
          ))}
        </div>
      </div>
    )
  }
)
