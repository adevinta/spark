import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export interface DummyProps extends ComponentPropsWithoutRef<'span'> {
  /* type of dummy */
  type: 'foo' | 'bar'
}

export function Dummy({ type = 'bar', ...rest }: PropsWithChildren<DummyProps>) {
  return <span {...rest}>{type}</span>
}
