import { PropsWithChildren } from 'react'

export interface DummyProps {
  /* type of dummy */
  type: 'bar' | 'foo'
}

export function Dummy({ type = 'bar', ...rest }: PropsWithChildren<DummyProps>) {
  return (
    <span {...rest} className="text-body-1">
      {type}
    </span>
  )
}
