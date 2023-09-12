import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Dialog } from '.'

describe('Dialog', () => {
  it('should render', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <Dialog.Trigger asChild>
          <button>Edit profile</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you are done.
            </Dialog.Description>

            <p>Dialog contents</p>

            <Dialog.CloseButton aria-label="Close edit profile" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    )

    expect(screen.queryByText('Dialog contents')).not.toBeInTheDocument()

    await user.click(screen.getByText('Edit profile'))

    expect(screen.getByText('Dialog contents')).toBeInTheDocument()
  })
})
