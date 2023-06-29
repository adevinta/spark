import { PropsWithChildren } from 'react'

export function Root({ children, className }: PropsWithChildren<{ className: string }>) {
  return <dl className={`${className} sb-unstyled border-t-sm border-t-outline`}>{children}</dl>
}
