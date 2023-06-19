import type { FC } from 'react'

import { Radio } from './Radio'
import { RadioGroup as Root, type RadioGroupProps } from './RadioGroup'

export { type RadioGroupProps } from './RadioGroup'
export { type RadioProps } from './Radio'

Radio.displayName = 'RadioGroup.Radio'

export const RadioGroup: FC<RadioGroupProps> & {
  Radio: typeof Radio
} = Object.assign(Root, {
  Radio,
})
