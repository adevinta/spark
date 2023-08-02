import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { AlertDialog } from '.'

describe('AlertDialog', () => {
  it('should render', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <button>Edit profile</button>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Title>Edit profile</AlertDialog.Title>
            <AlertDialog.Description>
              Make changes to your profile here. Click save when you are done.
            </AlertDialog.Description>

            <p>Dialog contents</p>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    )

    expect(screen.queryByText('Dialog contents')).not.toBeInTheDocument()

    await user.click(screen.getByText('Edit profile'))

    expect(screen.getByText('Dialog contents')).toBeInTheDocument()
  })
})
