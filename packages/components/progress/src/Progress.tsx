import {
  Progress as ProgressPrimitive,
  ProgressProps as ProgressPrimitiveProps,
} from '@radix-ui/react-progress'
import { cx } from 'class-variance-authority'
import { PropsWithChildren, Ref, useMemo, useState } from 'react'

import { ProgressBar } from './ProgressBar'
import { ProgressContext } from './ProgressContext'
import { ProgressIndicatorStylesProps } from './ProgressIndicator.styles'

export interface ProgressProps
  extends ProgressPrimitiveProps,
    Pick<ProgressIndicatorStylesProps, 'intent'> {
  shape?: 'square' | 'rounded'
  isIndeterminate?: boolean
  ref?: Ref<HTMLDivElement>
}

export const Progress = ({
  className,
  value: valueProp,
  max = 100,
  shape = 'square',
  intent = 'basic',
  isIndeterminate = false,
  children = <ProgressBar />,
  ref,
  ...others
}: PropsWithChildren<ProgressProps>) => {
  const [labelId, setLabelId] = useState<string>()

  const value = useMemo(() => {
    return { value: valueProp ?? 0, max, intent, shape, isIndeterminate, onLabelId: setLabelId }
  }, [max, valueProp, intent, shape, isIndeterminate, setLabelId])

  return (
    <ProgressContext.Provider data-spark-component="progress" value={value}>
      <ProgressPrimitive
        ref={ref}
        className={cx('flex flex-col gap-sm', className)}
        value={valueProp}
        aria-labelledby={labelId}
        max={max}
        {...others}
      >
        {children}
      </ProgressPrimitive>
    </ProgressContext.Provider>
  )
}

Progress.displayName = 'Progress'
