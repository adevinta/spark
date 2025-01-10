import { type ReactElement, type ReactNode, RefObject } from 'react'

import { dialogBodyStyles, type DialogBodyStylesProps } from './DialogBody.styles'
export interface BodyProps extends DialogBodyStylesProps {
  children: ReactNode
  className?: string
  tabIndex?: number
  ref?: RefObject<HTMLDivElement>
}

export const Body = ({
  children,
  className,
  inset = false,
  ref,
  ...rest
}: BodyProps): ReactElement => (
  <div ref={ref} className={dialogBodyStyles({ inset, className })} {...rest}>
    {children}
  </div>
)

Body.displayName = 'Dialog.Body'
