import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type ProgressTrackerProps = ComponentPropsWithoutRef<'div'>

export const ProgressTracker = forwardRef<HTMLDivElement, PropsWithChildren<ProgressTrackerProps>>(
  (props, ref) => {
    return <div ref={ref} {...props} />
  }
)
