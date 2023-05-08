import { useId } from '@radix-ui/react-id'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, useEffect } from 'react'

import { useFormControl } from './FormControlContext'

export type FormMessageProps = ComponentPropsWithoutRef<'span'>

export const FormMessage = forwardRef<HTMLSpanElement, FormMessageProps>(
  ({ className, ...others }, ref) => {
    const { onMessageIdAdd, onMessageIdRemove } = useFormControl()
    const id = useId()

    useEffect(() => {
      onMessageIdAdd(id)

      return () => {
        onMessageIdRemove(id)
      }
    }, [id, onMessageIdAdd, onMessageIdRemove])

    return <span ref={ref} id={id} className={cx(className, 'text-caption')} {...others} />
  }
)

FormMessage.displayName = 'FormMessage'
