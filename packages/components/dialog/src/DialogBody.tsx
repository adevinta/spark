import { forwardRef, type ReactElement, type ReactNode, type Ref } from 'react'

import { dialogBodyStyles, type DialogBodyStylesProps } from './DialogBody.styles'
export interface BodyProps extends DialogBodyStylesProps {
  children: ReactNode
  className?: string
}

export const Body = forwardRef(
  (
    { children, className, inset = false, ...rest }: BodyProps,
    ref: Ref<HTMLDivElement>
  ): ReactElement => (
    <div ref={ref} className={dialogBodyStyles({ inset, className })} {...rest}>
      {children}
    </div>
  )
)

Body.displayName = 'Dialog.Body'
