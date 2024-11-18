import { useFormFieldControl } from '@spark-ui/form-field'
import { InputGroup } from '@spark-ui/input'
import {
  createContext,
  forwardRef,
  type MutableRefObject,
  type PropsWithChildren,
  useContext,
  useRef,
} from 'react'

import type { StepperProps, UseStepperReturn } from './types'
import { useStepper } from './useStepper'

const StepperContext = createContext<
  (Omit<UseStepperReturn, 'groupProps'> & { inputRef: MutableRefObject<null> }) | null
>(null)

export const Stepper = forwardRef<HTMLDivElement, PropsWithChildren<StepperProps>>(
  (
    {
      children,
      formatOptions,
      minValue,
      maxValue,
      incrementAriaLabel,
      decrementAriaLabel,
      ...stepperProps
    },
    forwardedRef
  ) => {
    const inputRef = useRef(null)

    const {
      groupProps,
      inputProps: _inputProps,
      incrementButtonProps: _incrementButtonProps,
      decrementButtonProps: _decrementButtonProps,
    } = useStepper({
      ...{
        ...stepperProps,
        onChange: stepperProps.onValueChange,
      },
      formatOptions,
      minValue,
      maxValue,
      incrementAriaLabel,
      decrementAriaLabel,
      inputRef,
    })

    const formFieldControlProps = useFormFieldControl()
    const isWrappedInFormField = !!formFieldControlProps.id

    const incrementButtonProps = {
      ..._incrementButtonProps,
      ...(isWrappedInFormField && { 'aria-controls': formFieldControlProps.id }),
    }

    const decrementButtonProps = {
      ..._decrementButtonProps,
      ...(isWrappedInFormField && { 'aria-controls': formFieldControlProps.id }),
    }

    const inputProps = {
      ..._inputProps,
      ...(isWrappedInFormField && {
        id: formFieldControlProps.id,
        required: formFieldControlProps.isRequired,
        'aria-invalid': formFieldControlProps.isInvalid ? true : undefined,
      }),
    }

    const { onValueChange: _, ...remainingStepperProps } = stepperProps

    return (
      <StepperContext.Provider
        value={{ incrementButtonProps, decrementButtonProps, inputProps, inputRef }}
      >
        <InputGroup
          {...remainingStepperProps}
          {...groupProps}
          data-spark-component="stepper"
          ref={forwardedRef}
        >
          {children}
        </InputGroup>
      </StepperContext.Provider>
    )
  }
)

Stepper.displayName = 'Stepper'

export const useStepperContext = () => {
  const context = useContext(StepperContext)

  if (!context) {
    throw Error('useStepperContext must be used within a Stepper provider')
  }

  return context
}
