import type { FC } from 'react'

import { Radio } from './Radio'
import { RadioGroup as Root, type RadioGroupProps } from './RadioGroup'

export const RadioGroup: FC<RadioGroupProps> & {
  Radio: typeof Radio
} = Object.assign(Root, {
  Radio,
})

export { type RadioGroupProps } from './RadioGroup'
export { type RadioProps } from './Radio'
