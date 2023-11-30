import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { ProgressTrackerProvider } from './ProgressTrackerContext'

export type ProgressTrackerProps = ComponentPropsWithoutRef<'div'> & {
  mode: 'display' | 'interactive'
  activeStep?: number
}

export const ProgressTracker = forwardRef<HTMLDivElement, PropsWithChildren<ProgressTrackerProps>>(
  ({ activeStep = 0, mode, children, ...rest }, ref) => {
    const RootElement = mode === 'display' ? 'div' : 'nav'

    return (
      <ProgressTrackerProvider value={{ activeStep }}>
        <RootElement ref={ref} {...rest}>
          <ul>{children}</ul>
        </RootElement>
      </ProgressTrackerProvider>
    )
  }
)
