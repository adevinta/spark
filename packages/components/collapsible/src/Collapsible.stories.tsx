import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import { MapExpand } from '@spark-ui/icons/dist/icons/MapExpand'
import { Meta, StoryFn } from '@storybook/react'
import { PropsWithChildren, useState } from 'react'

import { Collapsible } from '.'

const meta: Meta<typeof Collapsible> = {
  title: 'Experimental/Collapsible',
  component: Collapsible,
}

export default meta

const CartItem = ({ children }: PropsWithChildren) => {
  return <div className="rounded-md bg-main-container p-lg text-on-main-container">{children}</div>
}

export const Default: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="mb-lg flex items-center gap-lg">
        <p>You have 4 items in your cart.</p>
        <Collapsible.Trigger asChild>
          <IconButton size="sm" aria-label={open ? 'Collapse items' : 'Expand items'}>
            <Icon>{open ? <Close /> : <MapExpand />}</Icon>
          </IconButton>
        </Collapsible.Trigger>
      </div>

      <div className="flex flex-col gap-md">
        <CartItem>Bananas</CartItem>

        <Collapsible.Content className="flex flex-col gap-md">
          <CartItem>Ketchup</CartItem>
          <CartItem>Mustard</CartItem>
          <CartItem>Salad</CartItem>
        </Collapsible.Content>
      </div>
    </Collapsible>
  )
}
