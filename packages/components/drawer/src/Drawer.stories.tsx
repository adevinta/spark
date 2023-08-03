import { Button } from '@spark-ui/button'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Drawer, type DrawerContentProps } from '.'

const meta: Meta<typeof Drawer> = {
  title: 'Experimental/Drawer',
  component: Drawer,
}

export default meta

export const Usage: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button>Terms & conditions</Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay />

        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Terms & conditions</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <Drawer.Description>Please review our terms and conditions</Drawer.Description>

            {Array.from({ length: 10 }, (_, index) => (
              <p key={index}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            ))}
          </Drawer.Body>

          <Drawer.Footer className="flex justify-end gap-md">
            <Button intent="neutral" design="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button>Submit</Button>
          </Drawer.Footer>

          <Drawer.CloseButton aria-label="Close edit profile" />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  )
}

export const Sizes = () => {
  const [size, setSize] = useState<ExcludeNull<DrawerContentProps>['size']>('md')
  const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <div className="flex gap-md">
          <Drawer.Trigger asChild>
            <Button onClick={() => setSize('sm')}>Small</Button>
          </Drawer.Trigger>

          <Drawer.Trigger asChild>
            <Button onClick={() => setSize('md')}>Medium</Button>
          </Drawer.Trigger>

          <Drawer.Trigger asChild>
            <Button onClick={() => setSize('lg')}>Large</Button>
          </Drawer.Trigger>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay />

          <Drawer.Content size={size}>
            <Drawer.Header>
              <Drawer.Title>Edit size</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body className="flex flex-col gap-lg">
              <Drawer.Description>Please select a drawer size</Drawer.Description>

              {Array.from({ length: 10 }, (_, index) => (
                <p key={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              ))}
            </Drawer.Body>

            <Drawer.Footer className="flex justify-end gap-md">
              <Button intent="neutral" design="outlined" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button>Submit</Button>
            </Drawer.Footer>

            <Drawer.CloseButton aria-label="Close edit size" />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer>
    </>
  )
}

export const Placement = () => {
  const [placement, setPlacement] = useState<ExcludeNull<DrawerContentProps>['placement']>('right')
  const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <div className="flex gap-md">
          <Drawer.Trigger asChild>
            <Button onClick={() => setPlacement('right')}>Right</Button>
          </Drawer.Trigger>

          <Drawer.Trigger asChild>
            <Button onClick={() => setPlacement('left')}>Left</Button>
          </Drawer.Trigger>

          <Drawer.Trigger asChild>
            <Button onClick={() => setPlacement('top')}>Top</Button>
          </Drawer.Trigger>

          <Drawer.Trigger asChild>
            <Button onClick={() => setPlacement('bottom')}>Bottom</Button>
          </Drawer.Trigger>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay />

          <Drawer.Content placement={placement} size="sm">
            <Drawer.Header>
              <Drawer.Title>Edit placement</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body className="flex flex-col gap-lg">
              <Drawer.Description>Please select a drawer placement</Drawer.Description>

              {Array.from({ length: 10 }, (_, index) => (
                <p key={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              ))}
            </Drawer.Body>

            <Drawer.Footer className="flex justify-end gap-md">
              <Button intent="neutral" design="outlined" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button>Submit</Button>
            </Drawer.Footer>

            <Drawer.CloseButton aria-label="Close edit placement" />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer>
    </>
  )
}
