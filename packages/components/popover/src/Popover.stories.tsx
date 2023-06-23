import { Button } from '@spark-ui/button'
import { RadioGroup } from '@spark-ui/radio-group'
import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'
import { forwardRef, PropsWithChildren, useState } from 'react'

import { Popover } from '.'
import { type ContentProps } from './PopoverContent'

const meta: Meta<typeof Popover> = {
  title: 'Experimental/Popover',
  component: Popover,
}

export default meta

const ShowcaseContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{
    className?: string
  }>
>(({ children, className }, ref) => (
  <div
    ref={ref}
    className={cx(
      'h-sz-240 bg-primary-container border-md border-primary flex items-center justify-center rounded-sm border-dashed p-lg',
      className
    )}
  >
    {children}
  </div>
))

export const Default: StoryFn = _args => {
  return (
    <ShowcaseContainer>
      <Popover>
        <Popover.Trigger asChild>
          <Button>Trigger popover</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            Popover contents
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </ShowcaseContainer>
  )
}

export const Controlled: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="mb-lg flex gap-lg">
        <Button onClick={() => setOpen(true)}>Open popover</Button>
        <Button onClick={() => setOpen(false)}>Close popover</Button>
      </div>
      <ShowcaseContainer>
        <Popover open={open}>
          <Popover.Anchor asChild>
            <p>Popover is attached to this text (anchor)</p>
          </Popover.Anchor>
          <Popover.Portal>
            <Popover.Content onInteractOutside={() => setOpen(false)}>
              Popover contents
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Portal>
        </Popover>
      </ShowcaseContainer>
    </>
  )
}

export const Anchored: StoryFn = _args => {
  return (
    <ShowcaseContainer className="!justify-between">
      <Popover>
        <div className="flex flex-col gap-md">
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

        <Popover.Portal>
          <Popover.Content>
            Popover contents
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </ShowcaseContainer>
  )
}

export const MatchTriggerWidth: StoryFn = _args => {
  return (
    <ShowcaseContainer>
      <Popover open>
        <Popover.Trigger asChild>
          <Button>Check the width of this popover</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content matchTriggerWidth aria-label="Match Trigger Width Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </ShowcaseContainer>
  )
}

export const Boundaries: StoryFn = () => {
  const [boundaryContainer, setBoundaryContainer] = useState<HTMLDivElement | null>(null)

  return (
    <ShowcaseContainer ref={setBoundaryContainer} className="!h-sz-240 !w-sz-256">
      <Popover>
        <Popover.Trigger asChild>
          <Button>Trigger popover</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content collisionBoundary={[boundaryContainer]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </ShowcaseContainer>
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
    <div className="flex flex-col gap-lg">
      <div className="flex gap-lg">
        <p className="text-headline-2">Side:</p>
        <RadioGroup value={currentSide} onValueChange={handleChangeSide} orientation="horizontal">
          {['bottom', 'top', 'left', 'right'].map(side => (
            <RadioGroup.Radio key={side} value={side}>
              {side}
            </RadioGroup.Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="flex gap-lg">
        <p className="text-headline-2">Align:</p>
        <RadioGroup value={currentAlign} onValueChange={handleChangeAlign} orientation="horizontal">
          {['start', 'center', 'end'].map(align => (
            <RadioGroup.Radio key={align} value={align}>
              {align}
            </RadioGroup.Radio>
          ))}
        </RadioGroup>
      </div>

      <ShowcaseContainer>
        <Popover open>
          <Popover.Trigger asChild>
            <Button>Trigger popover</Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              side={currentSide}
              align={currentAlign}
              aria-label="Positionning example"
            >
              Popover contents
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Portal>
        </Popover>
      </ShowcaseContainer>
    </div>
  )
}
