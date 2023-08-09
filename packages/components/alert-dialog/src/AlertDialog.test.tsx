import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { AlertDialog } from '.'

describe('AlertDialog', () => {
  it('should render', async () => {
    const user = userEvent.setup()
    const title = 'Delete account'
    const description = 'Are you sure? You can not undo this action afterwards.'

    render(
      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <button>Delete</button>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Title>{title}</AlertDialog.Title>

            <AlertDialog.Description>{description}</AlertDialog.Description>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    )

    expect(screen.queryByRole('alertdialog', { name: title })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Delete' }))

    const dialogEl = screen.getByRole('alertdialog', { name: title })

    expect(dialogEl).toBeInTheDocument()
    expect(dialogEl).toHaveAccessibleDescription(description)
  })
})
