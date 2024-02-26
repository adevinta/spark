import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import {
  addSnackbar,
  clearSnackbarQueue,
  Snackbar,
  type SnackBarItemOptions,
  type SnackbarProps,
} from '.'

interface ImplProps extends SnackbarProps, SnackBarItemOptions {}

const SnackbarImplementation = ({ children, ...options }: ImplProps): ReactElement => {
  const opts: Parameters<typeof addSnackbar>[1] = {
    timeout: 2000,
    ...options,
  }

  return (
    <div>
      <Snackbar>{children}</Snackbar>

      <button onClick={() => addSnackbar({ message: 'You did it!' }, opts)}>
        Show me a snackbar
      </button>
    </div>
  )
}

describe('Snackbar', () => {
  beforeEach(() => clearSnackbarQueue())

  it('should render a snackbar when adding one to the queue', async () => {
    const user = userEvent.setup()

    render(<SnackbarImplementation />)

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!')).toBeInTheDocument()
  })

  it('should handle optionnal callback on snackbar closure', async () => {
    const user = userEvent.setup()
    const props = {
      onClose: vi.fn(),
    }

    render(<SnackbarImplementation {...props} />)

    await user.click(screen.getByText('Show me a snackbar'))
    await user.click(screen.getByLabelText('Close'))

    expect(props.onClose).toHaveBeenCalledTimes(1)
  })

  it('should render with custom snackbar item', async () => {
    const user = userEvent.setup()

    render(
      <SnackbarImplementation>
        <Snackbar.Item style={{ width: 100 }} />
      </SnackbarImplementation>
    )

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!')).toHaveStyle({ width: 100 })
  })
})
