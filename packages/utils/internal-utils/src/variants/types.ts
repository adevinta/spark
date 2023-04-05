import { designs, intents, shapes, sizes } from './constants'

/* eslint-disable-next-line @typescript-eslint/ban-types */
type Picks<T extends object, Entries extends (keyof T)[], Acc = {}> = Entries extends [
  infer Entry,
  ...infer Rest
]
  ? Rest extends (keyof T)[]
    ? Entry extends keyof T
      ? Picks<T, Rest, Acc & Pick<T, Entry>>
      : Acc
    : Acc
  : Acc

type Size = (typeof sizes)[number]
type SizeLookup = Record<Size, string[]>

type Intent = (typeof intents)[number]
type IntentLookup = Record<Intent, string[]>

type Design = (typeof designs)[number]
type DesignLookup = Record<Design, string[]>

type Shape = (typeof shapes)[number]
type ShapeLookup = Record<Shape, string[]>

export type {
  Size,
  SizeLookup,
  Intent,
  IntentLookup,
  Design,
  DesignLookup,
  Shape,
  ShapeLookup,
  Picks,
}
