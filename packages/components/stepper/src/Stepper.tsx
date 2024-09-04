import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type StepperProps = ComponentPropsWithoutRef<'div'>

export const Stepper = forwardRef<HTMLDivElement, PropsWithChildren<StepperProps>>((props, ref) => {
  return <div ref={ref} {...props} />
})
