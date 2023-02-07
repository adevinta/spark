

import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {};

export function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button {...props} />
  )
}