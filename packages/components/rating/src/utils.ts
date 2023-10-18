export function getNearestHalfDecimal(num: number): number {
  return Math.round(num / 0.5) * 0.5
}
