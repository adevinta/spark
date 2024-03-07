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

  it('should remove snackbar item from DOM after closure', async () => {
    const user = userEvent.setup({ advanceTimers: vi.runOnlyPendingTimers })
    vi.useFakeTimers()

    render(<SnackbarImplementation />)

    await user.click(screen.getByText('Show me a snackbar'))

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

  it('should render an icon before the snackbar message', async () => {
    const user = userEvent.setup()

    const props = {
      icon: <FavoriteFill title="Thumb up" />,
      intent: 'inverse' as AddSnackbarArgs['intent'],
    }

    render(<SnackbarImplementation {...props} />)

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByTitle('Thumb up')).toBeInTheDocument()
  })

  it('should handle actions through addSnackbar options', async () => {
    const user = userEvent.setup()

    const props = {
      isClosable: true,
      onClose: vi.fn(),
      onAction: vi.fn(),
      actionLabel: 'Undo',
    }

    render(<SnackbarImplementation {...props} />)

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByLabelText('Close')).toBeInTheDocument()

    await user.click(screen.getByText('Undo'))
    expect(props.onAction).toHaveBeenCalledTimes(1)
    expect(props.onClose).toHaveBeenCalledTimes(1)

    /**
     * onanimationend is not supported by `user-event` library,
     * and has to be triggered programmatically with `fireEvent`.
     */
    fireEvent.animationEnd(screen.getByRole('alert', { hidden: true }))
    expect(screen.queryByText('You did it!')).not.toBeInTheDocument()
  })

  it('should allow actions using custom snackbar item', async () => {
    const user = userEvent.setup()

    const closeSpy = vi.fn()

    render(
      <SnackbarImplementation>
        <Snackbar.Item style={{ width: 100 }} intent="error">
          <Snackbar.ItemAction onClick={vi.fn()}>Undo</Snackbar.ItemAction>
          <Snackbar.ItemClose onClick={closeSpy} aria-label="Close snackbar" />
        </Snackbar.Item>
      </SnackbarImplementation>
    )

    await user.click(screen.getByText('Show me a snackbar'))

    expect(screen.getByText('You did it!')).toHaveStyle({ width: 100 })
    expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-error')

    expect(screen.getByText('Undo')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close snackbar'))
    expect(closeSpy).toHaveBeenCalledTimes(1)
  })
})
