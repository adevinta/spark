import { FC } from 'react'

import { Divider as Root, type DividerProps } from './Divider'
import { DividerContent } from './DividerContent'

export { type DividerContentProps } from './DividerContent'

export const Divider: FC<DividerProps> & {
  Content: typeof DividerContent
} = Object.assign(Root, {
  Content: DividerContent,
})

Divider.displayName = 'Divider'
Divider.Content.displayName = 'Divider.Content'
