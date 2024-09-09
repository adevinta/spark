import { Input as SparkInput, type InputProps } from '@spark-ui/input'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <SparkInput ref={ref} {...props} />
})

export const StepperInput = Object.assign(Input, {
  id: 'Input',
})

StepperInput.displayName = 'Stepper.Input'
