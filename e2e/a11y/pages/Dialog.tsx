import { Button } from '@spark-ui/button'
import { Dialog } from '@spark-ui/dialog'
import { FormField } from '@spark-ui/form-field'
import { Input } from '@spark-ui/input'
import React from 'react'

export const A11yDialog = () => (
  <section>
    <Dialog defaultOpen>
      <Dialog.Trigger asChild>
        <Button>Create account</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <form>
            <Dialog.Header>
              <Dialog.Title>Create account</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body className="flex flex-col gap-lg">
              <FormField name="pseudo" isRequired className="flex-1">
                <FormField.Label>Pseudo</FormField.Label>
                <Input placeholder="Luke" />
              </FormField>
            </Dialog.Body>

            <Dialog.Footer className="flex justify-end gap-md">
              <Button type="submit">Submit</Button>
            </Dialog.Footer>
          </form>

          <Dialog.CloseButton aria-label="Close dialog" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  </section>
)
