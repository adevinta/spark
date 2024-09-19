import { Input as SparkInput } from '@spark-ui/input'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { forwardRef } from 'react'

import { useStepperContext } from './Stepper'
import type { StepperInputProps } from './types'

const Input = forwardRef<HTMLInputElement, StepperInputProps>((props, forwardedRef) => {
  const { inputRef, inputProps } = useStepperContext()
  const ref = useMergeRefs(forwardedRef, inputRef)
  const { className = '', ...remainingProps } = props

  return (
    <SparkInput
      ref={ref}
      {...remainingProps}
      {...inputProps}
      className={`text-center ${className}`}
    />
  )
})

export const StepperInput = Object.assign(Input, {
  id: 'Input',
})

StepperInput.displayName = 'Stepper.Input'
