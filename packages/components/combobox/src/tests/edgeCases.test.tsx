import { Button } from '@spark-ui/button'
import { Dialog } from '@spark-ui/dialog'
import { FormField } from '@spark-ui/form-field'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

import { Combobox } from '..'
import { getInput, getItem } from './test-utils'

export function ComboboxInsideDialog() {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
  }

  return (
    <div className="grid h-full place-items-center gap-y-3xl p-lg">
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <Dialog.Trigger asChild>
          <Button>Create account</Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Create account</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body className="flex flex-col gap-lg">
              <FormField name="books">
                <FormField.Label className="text-body-2">books</FormField.Label>
                <Combobox>
                  <Combobox.Trigger>
                    <Combobox.Input aria-label="Book" placeholder="Pick a book" />
                    <Combobox.ClearButton aria-label="Clear input" />
                    <Combobox.Disclosure closedLabel="Open popup" openedLabel="Close popup" />
                  </Combobox.Trigger>
                  <Combobox.Popover>
                    <Combobox.Items>
                      <Combobox.Empty>No results found</Combobox.Empty>
                      <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
                      <Combobox.Item value="book-2">War and Peace</Combobox.Item>
                      <Combobox.Item value="book-3">The Idiot</Combobox.Item>
                      <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
                      <Combobox.Item value="book-5">1984</Combobox.Item>
                      <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
                    </Combobox.Items>
                  </Combobox.Popover>
                </Combobox>
              </FormField>
            </Dialog.Body>

            <Dialog.CloseButton aria-label="Close dialog" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </div>
  )
}

describe('Combobox inside a Dialog', () => {
  it('should be able to select item', async () => {
    const user = userEvent.setup()

    render(<ComboboxInsideDialog />)

    // open dialog
    await user.click(screen.getByRole('button', { name: 'Create account' }))

    // open combobox
    await user.click(getInput('books'))

    // select item
    await user.click(getItem('Pride and Prejudice'))

    expect(screen.getByDisplayValue('Pride and Prejudice')).toBeInTheDocument()
    expect(getItem('Pride and Prejudice')).toHaveAttribute('aria-selected', 'true')
  })
})
