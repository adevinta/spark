import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { Input } from '@spark-ui/input'
import { RadioGroup } from '@spark-ui/radio-group'
import { Meta, StoryFn } from '@storybook/react'
import React, { useRef, useState } from 'react'

import { Dialog, type DialogContentProps } from '.'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
}

export default meta

export const Default: StoryFn = () => {
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
  const [size, setSize] = useState<ExcludeNull<DialogContentProps>['size']>('md')
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex gap-md">
        <Dialog.Trigger asChild>
          <Button onClick={() => setSize('sm')}>Small</Button>
        </Dialog.Trigger>

        <Dialog.Trigger asChild>
          <Button onClick={() => setSize('md')}>Medium</Button>
        </Dialog.Trigger>

        <Dialog.Trigger asChild>
          <Button onClick={() => setSize('md')}>Large</Button>
        </Dialog.Trigger>

        <Dialog.Trigger asChild>
          <Button onClick={() => setSize('fullscreen')}>Fullscreen</Button>
        </Dialog.Trigger>
      </div>

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
              onValueChange={value => setSize(value as ExcludeNull<DialogContentProps>['size'])}
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
  )
}

export const HTMLForm = () => {
  const [open, setOpen] = useState(false)
  const [isAccountCreated, setIsAccountCreated] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setOpen(open)

    if (!open) setIsAccountCreated(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsAccountCreated(true)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <Button>Create account</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <form onSubmit={handleSubmit}>
            <Dialog.Header>
              <Dialog.Title>Create account</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body className="flex flex-col gap-lg">
              {!isAccountCreated ? (
                <FormField name="pseudo" isRequired className="flex-1">
                  <FormField.Label>Pseudo</FormField.Label>
                  <Input placeholder="Luke" />
                </FormField>
              ) : (
                <p className="text-success">Welcome to Spark !</p>
              )}
            </Dialog.Body>

            <Dialog.Footer className="flex justify-end gap-md">
              {!isAccountCreated && <Button>Submit</Button>}
            </Dialog.Footer>
          </form>

          <Dialog.CloseButton aria-label="Close dialog" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

export const ForwardFocus = () => {
  const fieldToFocus = useRef<HTMLInputElement>(null)

  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Forward focus</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content
          className="pb-xl"
          onOpenAutoFocus={e => {
            e.preventDefault()
            fieldToFocus.current?.focus()
          }}
        >
          <Dialog.Header>
            <Dialog.Title>Forward focus</Dialog.Title>
          </Dialog.Header>

          <Dialog.Body className="flex flex-col gap-lg">
            <Input placeholder="First field" />
            <Input placeholder="Second field (focused)" ref={fieldToFocus} />
            <Input placeholder="Third field" />
          </Dialog.Body>

          <Dialog.CloseButton aria-label="Close dialog" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
