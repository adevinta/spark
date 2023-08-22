import { useId } from '@radix-ui/react-id'
import { ComponentPropsWithoutRef, forwardRef, useCallback } from 'react'

import { useProgress } from './ProgressContext'

export type ProgressLabelProps = ComponentPropsWithoutRef<'span'>

export const ProgressLabel = forwardRef<HTMLSpanElement, ProgressLabelProps>(
  ({ id: idProp, children, ...others }) => {
    const id = useId(idProp)
    const { onLabelId } = useProgress()
    const ref = useCallback(
      (el: HTMLSpanElement) => {
        onLabelId(el ? id : undefined)
      },
      [id, onLabelId]
    )

    return (
      <span id={id} className="text-body-1" ref={ref} {...others}>
        {children}
      </span>
    )
  }
)

ProgressLabel.displayName = 'Progress.Label'
