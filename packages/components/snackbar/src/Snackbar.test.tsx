import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FavoriteFill } from 'packages/components/icons/dist'
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

    <button onClick={() => addSnackbar({ message: 'You did it!', ...options, timeout: 250 })}>
      Show me a snackbar
    </button>
  </div>
)

describe('Snackbar', () => {
  beforeEach(() => clearSnackbarQueue())

  it('should render a snackbar item when adding one to the queue', async () => {
    const user = userEvent.setup()

    render(<SnackbarImplementation />)

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!')).toBeInTheDocument()
  })

  it('should remove snackbar item from DOM after dismissal', async () => {
    const user = userEvent.setup({ advanceTimers: vi.runOnlyPendingTimers })
    vi.useFakeTimers()

    render(<SnackbarImplementation isClosable />)

    await user.click(screen.getByText('Show me a snackbar'))
    await user.click(screen.getByLabelText('Close'))

    vi.runOnlyPendingTimers()

    /**
     * onanimationend is not supported by `user-event` library,
     * and has to be triggered programmatically with `fireEvent`.
     */
    fireEvent.animationEnd(screen.getByRole('alert', { hidden: true }))
    expect(screen.queryByText('You did it!')).not.toBeInTheDocument()

    vi.useRealTimers()
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
      isClosable: true,
      intent: 'error' as AddSnackbarArgs['intent'],
      icon: <FavoriteFill title="Yeah!" />,
    }

    render(<SnackbarImplementation {...props} />)

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-error')
    expect(screen.getByTitle('Yeah!')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close'))
    expect(props.onClose).toHaveBeenCalledTimes(1)
  })

  it('should render with custom snackbar item', async () => {
    const user = userEvent.setup()

    render(
      <SnackbarImplementation>
        <Snackbar.Item style={{ width: 100 }} intent="inverse">
          <Snackbar.ItemIcon>
            <FavoriteFill title="Thumb up" />
          </Snackbar.ItemIcon>
          <Snackbar.ItemClose aria-label="Close snackbar" />
        </Snackbar.Item>
      </SnackbarImplementation>
    )

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!')).toHaveStyle({ width: 100 })
    expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-surface-inverse')

    expect(screen.getByTitle('Thumb up')).toBeInTheDocument()
    expect(screen.getByLabelText('Close snackbar')).toBeInTheDocument()
  })
})
