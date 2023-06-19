import { Label as Root } from './Label'
import { LabelRequiredIndicator } from './LabelRequiredIndicator'

export type { LabelProps } from './Label'
export type { LabelRequiredIndicatorProps } from './LabelRequiredIndicator'

export const Label: typeof Root & {
  RequiredIndicator: typeof LabelRequiredIndicator
} = Object.assign(Root, {
  RequiredIndicator: LabelRequiredIndicator,
})

export * from './FloatingLabel'
