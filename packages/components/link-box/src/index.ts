import type { FC } from 'react'

import { LinkBox as Root, LinkBoxProps } from './LinkBox'
import { LinkOverlay } from './LinkOverlay'

export const LinkBox: FC<LinkBoxProps> & {
  Overlay: typeof LinkOverlay
} = Object.assign(Root, { Overlay: LinkOverlay })

LinkBox.displayName = 'LinkBox'
LinkBox.Overlay.displayName = 'LinkBox.Overlay'

export { type LinkBoxProps } from './LinkBox'
export { type LinkOverlayProps } from './LinkOverlay'
