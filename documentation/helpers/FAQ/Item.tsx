import { PropsWithChildren } from 'react'

import { ItemProvider } from './context'

export function Item({ children }: PropsWithChildren<unknown>) {
  return (
    <ItemProvider>
      <div className="border-t-outline [&:not(:first-child)]:border-t-sm">{children}</div>
    </ItemProvider>
  )
}
