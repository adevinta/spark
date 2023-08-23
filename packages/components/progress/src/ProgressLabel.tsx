import { useId } from '@radix-ui/react-id'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ComponentPropsWithoutRef, forwardRef, useCallback } from 'react'

import { useProgress } from './ProgressContext'

export type ProgressLabelProps = ComponentPropsWithoutRef<'span'>

export const ProgressLabel = forwardRef<HTMLSpanElement, ProgressLabelProps>(
  ({ id: idProp, children, ...others }, forwardedRef) => {
    const id = useId(idProp)
    const { onLabelId } = useProgress()
    const rootRef = useCallback(
      (el: HTMLSpanElement) => {
        onLabelId(el ? id : undefined)
      },
      [id, onLabelId]
    )
    const ref = useMergeRefs(forwardedRef, rootRef)

    return (
      <span id={id} className="text-body-1 text-on-surface" ref={ref} {...others}>
        {children}
      </span>
    )
  }
)

ProgressLabel.displayName = 'Progress.Label'
