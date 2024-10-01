import { Button } from '@spark-ui/button'
import { Popover } from '@spark-ui/popover'
import React from 'react'

export const A11yPopover = () => (
  <section>
    <div className="flex h-sz-240 items-center justify-center rounded-sm border-md border-dashed border-neutral bg-neutral-container p-lg">
      <Popover defaultOpen>
        <Popover.Trigger asChild>
          <Button>Trigger popover</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <Popover.Header>Title</Popover.Header>
            <p>Are you sure you want to have that cookie now ?</p>
            <Popover.Arrow />
            <Popover.CloseButton aria-label="Close the popover" />
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </div>

    <div className="flex h-sz-240 items-center justify-center rounded-sm border-md border-dashed border-neutral bg-neutral-container p-lg">
      <Popover defaultOpen>
        <Popover.Trigger asChild>
          <Button>Trigger popover</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content side="left">
            <p>Are you sure you want to have that cookie now ?</p>
            <Popover.Arrow />
            <Popover.CloseButton aria-label="Close the popover" />
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </div>
  </section>
)
