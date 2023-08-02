import { Button } from '@spark-ui/button'
import { RadioGroup } from '@spark-ui/radio-group'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { type ContentProps, Dialog } from '.'

const meta: Meta<typeof Dialog> = {
  title: 'Experimental/Dialog',
  component: Dialog,
}

export default meta

export const Usage: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
          </Dialog.Header>

          <Dialog.Body>
            <Dialog.Description>
              Make changes to your profile here. Click save when you are done.
            </Dialog.Description>

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
          </Dialog.Body>

          <Dialog.Footer className="flex justify-end gap-md">
            <Button intent="neutral" design="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button>Submit</Button>
          </Dialog.Footer>

          <Dialog.CloseButton aria-label="Close edit profile" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

export const Sizes = () => {
  const [size, setSizes] = useState<ExcludeNull<ContentProps>['size']>('md')
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button>Edit size</Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content size={size}>
            <Dialog.Header>
              <Dialog.Title>Edit size</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body className="flex flex-col gap-lg">
              <Dialog.Description>Please select a dialog size</Dialog.Description>

              <RadioGroup
                className="flex gap-md"
                value={size}
                onValueChange={value => setSizes(value as ExcludeNull<ContentProps>['size'])}
              >
                <RadioGroup.Radio value="sm">Small</RadioGroup.Radio>
                <RadioGroup.Radio value="md">Medium</RadioGroup.Radio>
                <RadioGroup.Radio value="lg">Large</RadioGroup.Radio>
                <RadioGroup.Radio value="fullscreen">Fullscreen</RadioGroup.Radio>
              </RadioGroup>
            </Dialog.Body>

            <Dialog.Footer className="flex justify-end gap-md">
              <Button intent="neutral" design="outlined" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button>Submit</Button>
            </Dialog.Footer>

            <Dialog.CloseButton aria-label="Close edit size" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </>
  )
}
