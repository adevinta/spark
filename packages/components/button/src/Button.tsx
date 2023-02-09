import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type ButtonProps = ComponentPropsWithoutRef<'button'>

export function Button(props: PropsWithChildren<ButtonProps>) {
  return <button type="button" {...props} />
}
