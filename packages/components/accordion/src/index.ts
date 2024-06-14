import type { FC } from 'react'

import { Accordion as Root, type AccordionProps } from './Accordion'
import { Item } from './AccordionItem'
import { ItemContent } from './AccordionItemContent'
import { ItemTrigger } from './AccordionItemTrigger'

export const Accordion: FC<AccordionProps> & {
  Item: typeof Item
  ItemTrigger: typeof ItemTrigger
  ItemContent: typeof ItemContent
} = Object.assign(Root, {
  Item,
  ItemTrigger,
  ItemContent,
})

Accordion.displayName = 'Accordion'
Item.displayName = 'Item'
ItemTrigger.displayName = 'Accordion.Trigger'
ItemContent.displayName = 'Accordion.Content'

export { type AccordionProps } from './Accordion'
export { type AccordionItemContentProps } from './AccordionItemContent'
export { type AccordionItemTriggerProps } from './AccordionItemTrigger'
