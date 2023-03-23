import { Slot as SlotPrimitive } from '@radix-ui/react-slot'
import { PropsWithChildren } from 'react'

export type SlotProps = PropsWithChildren<Omit<React.HTMLProps<HTMLDivElement>, 'ref'>>

export function Slot(props: SlotProps) {
  return <SlotPrimitive {...props} />
}
