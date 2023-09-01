import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Dialog } from './Dialog'

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

  it('should prevent exit animation when the dialog is in fullscreen mode', async () => {
    type DialogSize = Parameters<typeof Dialog.Content>['0']['size']
    const MakeDialog = ({ size }: { size: DialogSize }) => (
      <Dialog>
        <Dialog.Trigger asChild>
          <button>open dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content size={size}>
            <Dialog.Description>hello</Dialog.Description>
            <Dialog.CloseButton aria-label="Close" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    )

    const fullscreenClass = 'modal-is-fullscreen'
    const animationPreventionSelector = '[body.modal-is-fullscreen_&]:[animation:none]'

    const user = userEvent.setup()
    const { rerender } = render(<MakeDialog size="md" />)

    await user.click(screen.getByText('open dialog'))
    expect(new Set(document.body.classList)).not.toContain(fullscreenClass)

    await user.click(
      screen.getByRole('button', {
        name: /close/i,
      })
    )

    rerender(<MakeDialog size="fullscreen" />)

    await user.click(screen.getByText('open dialog'))

    expect(document.getElementsByClassName(animationPreventionSelector)).toHaveLength(1)
    expect(new Set(document.body.classList)).toContain(fullscreenClass)
  })
})
