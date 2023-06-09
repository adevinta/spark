import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { kbdStyles } from './Kbd.styles'

export type KbdProps = ComponentPropsWithoutRef<'div'>

export const Kbd = forwardRef<HTMLElement, PropsWithChildren<KbdProps>>((props, ref) => {
  return <kbd ref={ref} className={kbdStyles()} {...props} />
})
