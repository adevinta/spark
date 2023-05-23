import { Button } from '@spark-ui/button'
import { Radio, RadioGroup } from '@spark-ui/radio'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Popover } from '.'
import { type ContentProps } from './PopoverContent'

const meta: Meta<typeof Popover> = {
  title: 'Experimental/Popover',
  component: Popover,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="h-sz-240 bg-primary-container border-md border-primary flex items-center justify-center rounded-sm border-dashed">
      <Popover>
        <Popover.Trigger asChild>
          <Button>Trigger popover</Button>
        </Popover.Trigger>
        <Popover.Content>some text</Popover.Content>
      </Popover>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="gap-lg mb-lg flex">
        <Button onClick={() => setOpen(true)}>Open popover</Button>
        <Button onClick={() => setOpen(false)}>Close popover</Button>
      </div>
      <div className="h-sz-240 bg-primary-container border-md border-primary flex items-center justify-center rounded-sm border-dashed">
        <Popover open={open}>
          <Popover.Anchor asChild>
            <p>Popover is attached to this text (anchor)</p>
          </Popover.Anchor>
          <Popover.Content onInteractOutside={() => setOpen(false)}>some text</Popover.Content>
        </Popover>
      </div>
    </>
  )
}

export const Anchored: StoryFn = _args => {
  return (
    <div className="h-sz-240 bg-primary-container border-md border-primary p-lg flex items-center justify-between rounded-sm border-dashed">
      <Popover>
        <div className="gap-md flex flex-col">
          <Popover.Trigger asChild>
            <Button>Trigger 1</Button>
          </Popover.Trigger>
          <Popover.Trigger asChild>
            <Button>Trigger 2</Button>
          </Popover.Trigger>
          <Popover.Trigger asChild>
            <Button>Trigger 3</Button>
          </Popover.Trigger>
        </div>

        <Popover.Trigger asChild>
          <Button intent="secondary">Anchor element</Button>
        </Popover.Trigger>
        <Popover.Content>some text</Popover.Content>
      </Popover>
    </div>
  )
}

export const Boundaries: StoryFn = () => {
  const [boundaryContainer, setBoundaryContainer] = useState<HTMLDivElement | null>(null)

  return (
    <div
      ref={setBoundaryContainer}
      className="p-md w-sz-256 h-sz-240 bg-primary-container border-md border-primary relative block rounded-sm border-dashed"
    >
      <Popover>
        <Popover.Trigger asChild>
          <Button>Trigger popover</Button>
        </Popover.Trigger>
        <Popover.Content collisionBoundary={[boundaryContainer]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Popover.Content>
      </Popover>
    </div>
  )
}

export const Positionning: StoryFn = _args => {
  const [currentSide, setCurrentSide] = useState<ContentProps['side']>('bottom')
  const [currentAlign, setCurrentAlign] = useState<ContentProps['align']>('center')

  const handleChangeSide = (side: string) => {
    setCurrentSide(side as ContentProps['side'])
  }

  const handleChangeAlign = (align: string) => {
    setCurrentAlign(align as ContentProps['align'])
  }

  return (
    <div className="gap-lg flex flex-col">
      <div className="gap-lg flex">
        <p className="text-headline-2">Side:</p>
        <RadioGroup value={currentSide} onValueChange={handleChangeSide} orientation="horizontal">
          {['bottom', 'top', 'left', 'right'].map(side => (
            <Radio key={side} value={side}>
              {side}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="gap-lg flex">
        <p className="text-headline-2">Align:</p>
        <RadioGroup value={currentAlign} onValueChange={handleChangeAlign} orientation="horizontal">
          {['start', 'center', 'end'].map(align => (
            <Radio key={align} value={align}>
              {align}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="h-sz-240 bg-primary-container border-md border-primary flex items-center justify-center rounded-sm border-dashed">
        <Popover open>
          <Popover.Trigger asChild>
            <Button>Trigger popover</Button>
          </Popover.Trigger>
          <Popover.Content side={currentSide} align={currentAlign}>
            some text
          </Popover.Content>
        </Popover>
      </div>
    </div>
  )
}
