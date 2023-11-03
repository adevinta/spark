import { type StarValue } from './types'

function getNearestHalfDecimal(num: number): number {
  return Math.round(num / 0.5) * 0.5
}

function getNearestDecimal(num?: number): number {
  if (num === undefined) return 0

  const decimalPart = num - Math.floor(num)

  return decimalPart > 0.74 ? Math.ceil(num) : Math.floor(num)
}

function getStarValue({ value, index }: { value?: number; index: number }): StarValue {
  if (value === undefined) return 0

  const starPosition = index + 1
  const formattedValue = getNearestHalfDecimal(value)

  if (Math.ceil(formattedValue) < starPosition) return 0

  return formattedValue >= starPosition ? 1 : 0.5
}

function splitAt<T>(arr: T[], index: number): [T[], T[]] {
  const prev = arr.slice(0, index)
  const next = arr.slice(index)

  return [prev, next]
}

export { getNearestDecimal, getStarValue, splitAt }
