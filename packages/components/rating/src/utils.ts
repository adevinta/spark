import { type RatingStarProps } from './RatingStar'

function getNearestHalfDecimal(num: number): number {
  return Math.round(num / 0.5) * 0.5
}

export function getStarValue(ratingValue: number, index: number): RatingStarProps['value'] {
  const starPosition = index + 1
  const formattedValue = getNearestHalfDecimal(ratingValue)

  if (Math.ceil(formattedValue) < starPosition) return 0

  return formattedValue >= starPosition ? 1 : 0.5
}

export function splitAt<T>(arr: T[], index: number): [T[], T[]] {
  const prev = arr.slice(0, index)
  const next = arr.slice(index)

  return [prev, next]
}
