import { FC } from 'react'

import { Radio, RadioProps } from './Radio'
import { RadioGroup as Root, RadioGroupProps } from './RadioGroup'

export { type RadioGroupProps } from './RadioGroup'
export { type RadioProps } from './Radio'

export const RadioGroup: FC<RadioGroupProps> & {
  Radio: FC<RadioProps>
} = Object.assign(Root, {
  Radio,
})
