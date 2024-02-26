import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import {
  addSnackbar,
  type AddSnackbarArgs,
  clearSnackbarQueue,
  Snackbar,
  type SnackbarProps,
} from '.'

interface ImplProps extends SnackbarProps, Partial<AddSnackbarArgs> {}

const SnackbarImplementation = ({ children, ...options }: ImplProps): ReactElement => (
  <div>
    <Snackbar>{children}</Snackbar>

    <button onClick={() => addSnackbar({ message: 'You did it!', ...options })}>
      Show me a snackbar
    </button>
  </div>
)

describe('Snackbar', () => {
  beforeEach(() => clearSnackbarQueue())

  it('should render a snackbar when adding one to the queue', async () => {
    const user = userEvent.setup()

    render(<SnackbarImplementation />)

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!')).toBeInTheDocument()
  })

  it('should only render one snackbar container', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <Snackbar />
        <Snackbar />

        <button onClick={() => addSnackbar({ message: 'You did it!' })}>Show me a snackbar</button>
      </div>
    )

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getAllByRole('region')).toHaveLength(1)
  })

  it('should handle options to customize snackbar styles and behaviour', async () => {
    const user = userEvent.setup()
    const props = {
      onClose: vi.fn(),
      intent: 'error' as AddSnackbarArgs['intent'],
    }

    render(<SnackbarImplementation {...props} />)

    await user.click(screen.getByText('Show me a snackbar'))
    expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-error')

    await user.click(screen.getByLabelText('Close'))
    expect(props.onClose).toHaveBeenCalledTimes(1)
  })

  it('should render with custom snackbar item', async () => {
    const user = userEvent.setup()

    render(
      <SnackbarImplementation>
        <Snackbar.Item style={{ width: 100 }} intent="inverse" />
      </SnackbarImplementation>
    )

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!')).toHaveStyle({ width: 100 })
    expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-surface-inverse')
  })
})
