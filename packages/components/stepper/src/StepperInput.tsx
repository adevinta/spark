import { Input as SparkInput } from '@spark-ui/input'
import { forwardRef } from 'react'

import type { StepperInputProps } from './types'

const Input = forwardRef<HTMLInputElement, StepperInputProps>((props, ref) => {
  return <SparkInput ref={ref} {...props} />
})

export const StepperInput = Object.assign(Input, {
  id: 'Input',
})

StepperInput.displayName = 'Stepper.Input'
