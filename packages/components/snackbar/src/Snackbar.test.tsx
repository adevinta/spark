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

const DEFAULT_TIMEOUT = 250

const SnackbarImplementation = ({ children, ...options }: ImplProps): ReactElement => (
  <div>
    <Snackbar>{children}</Snackbar>

    <button
      onClick={() => addSnackbar({ message: 'You did it!', ...options, timeout: DEFAULT_TIMEOUT })}
    >
      Show me a snackbar
    </button>
  </div>
)

describe('Snackbar', () => {
  beforeEach(() => clearSnackbarQueue())

  const animateAndClose = () => {
    /**
     * onanimationend is not supported by `user-event` library,
     * and has to be triggered programmatically with `fireEvent`.
     */
    fireEvent.animationEnd(screen.getByRole('alert', { hidden: true }))
  }

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

    animateAndClose()
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

  it('should focus on snackbar region using F6 key, and restore it after last snackbar closure', async () => {
    const user = userEvent.setup()

    render(<SnackbarImplementation isClosable />)

    const triggerBtn = screen.getByText('Show me a snackbar')

    await user.click(triggerBtn)
    expect(document.activeElement).toBe(triggerBtn)

    await user.keyboard('{F6}')
    expect(document.activeElement).toBe(screen.getByRole('region'))

    const closeBtn = screen.getByLabelText('Close')

    await user.click(closeBtn)
    expect(document.activeElement).toBe(closeBtn)

    animateAndClose()
    expect(screen.queryByText('You did it!')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(triggerBtn)
  })

  describe('Icon', () => {
    it('should render an icon if defined in addSnackbar options', async () => {
      const user = userEvent.setup()

      const props = {
        icon: <FavoriteFill title="Thumb up" />,
        intent: 'success' as AddSnackbarArgs['intent'],
      }

      render(
        <SnackbarImplementation {...props}>
          <Snackbar.Item intent="alert" />
        </SnackbarImplementation>
      )

      await user.click(screen.getByText('Show me a snackbar'))

      expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-alert')
      expect(screen.getByTitle('Thumb up')).toBeInTheDocument()
    })

    it('should render an icon if defined in custom item children', async () => {
      const user = userEvent.setup()

      render(
        <SnackbarImplementation>
          <Snackbar.Item intent="success">
            <Snackbar.ItemIcon intent="alert">
              <FavoriteFill title="Thumb up" />
            </Snackbar.ItemIcon>
          </Snackbar.Item>
        </SnackbarImplementation>
      )

      await user.click(screen.getByText('Show me a snackbar'))

      expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-success')
      expect(screen.getByTitle('Thumb up').parentNode).toHaveClass('text-alert')
    })
  })

  describe('Action', () => {
    it('should render action button defined in addSnackbar options, and close snackbar on interaction', async () => {
      const user = userEvent.setup()

      const props = {
        onAction: vi.fn(),
        actionLabel: 'Undo',
      }

      render(
        <SnackbarImplementation {...props}>
          <Snackbar.Item intent="alert" />
        </SnackbarImplementation>
      )

      await user.click(screen.getByText('Show me a snackbar'))

      /**
       * If no children item (aka `Snackbar.ItemIcon`) is provided, then props from parent (aka `Snackbar.Item`)
       * will be used in priority over function options.
       */
      expect(screen.getByText('Undo')).toHaveClass('bg-alert')

      await user.click(screen.getByText('Undo'))

      expect(props.onAction).toHaveBeenCalledTimes(1)

      animateAndClose()
      expect(screen.queryByText('Undo')).not.toBeInTheDocument()
    })

    it('should render action button defined in custom item children, and close snackbar on interaction', async () => {
      const user = userEvent.setup()

      const onActionSpy = vi.fn()

      render(
        <SnackbarImplementation>
          <Snackbar.Item intent="success">
            <Snackbar.ItemAction intent="alert" onClick={onActionSpy}>
              Undo
            </Snackbar.ItemAction>
          </Snackbar.Item>
        </SnackbarImplementation>
      )

      await user.click(screen.getByText('Show me a snackbar'))

      /**
       * If children item is provided then its props will be used in priority over function options.
       */
      expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-success')
      expect(screen.getByText('Undo')).toHaveClass('bg-alert')

      await user.click(screen.getByText('Undo'))

      expect(onActionSpy).toHaveBeenCalledTimes(1)

      animateAndClose()
      expect(screen.queryByText('Undo')).not.toBeInTheDocument()
    })

    it('should not dismiss automatically when an action is defined', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      vi.useFakeTimers()

      const props = {
        onAction: vi.fn(),
        onClose: vi.fn(),
      }

      render(<SnackbarImplementation {...props} />)

      await user.click(screen.getByText('Show me a snackbar'))

      vi.advanceTimersByTime(DEFAULT_TIMEOUT)

      expect(screen.getByText('You did it!')).toBeInTheDocument()
      expect(props.onClose).not.toHaveBeenCalled()

      vi.useRealTimers()
    })
  })

  describe('Close', () => {
    it('should render close button defined in addSnackbar options, and close snackbar on interaction', async () => {
      const user = userEvent.setup()

      const props = {
        isClosable: true,
        onClose: vi.fn(),
      }

      render(
        <SnackbarImplementation {...props}>
          <Snackbar.Item intent="alert" />
        </SnackbarImplementation>
      )

      await user.click(screen.getByText('Show me a snackbar'))

      expect(screen.getByLabelText('Close')).toHaveClass('bg-alert')

      await user.click(screen.getByLabelText('Close'))

      animateAndClose()
      expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
      expect(props.onClose).toHaveBeenCalledTimes(1)
    })

    it('should render close button defined in custom item children, and close snackbar on interaction', async () => {
      const user = userEvent.setup()

      const onCloseSpy = vi.fn()
      const onClickSpy = vi.fn()

      render(
        <SnackbarImplementation onClose={onCloseSpy}>
          <Snackbar.Item intent="success">
            <Snackbar.ItemClose
              intent="alert"
              onClick={onClickSpy}
              aria-label="Close the snackbar"
            />
          </Snackbar.Item>
        </SnackbarImplementation>
      )

      await user.click(screen.getByText('Show me a snackbar'))

      expect(screen.getByText('You did it!').parentNode).toHaveClass('bg-success')
      expect(screen.getByLabelText('Close the snackbar')).toHaveClass('bg-alert')

      await user.click(screen.getByLabelText('Close the snackbar'))

      expect(onClickSpy).toHaveBeenCalledTimes(1)

      animateAndClose()
      expect(screen.queryByLabelText('Close the snackbar')).not.toBeInTheDocument()
      expect(onCloseSpy).toHaveBeenCalledTimes(1)
    })
  })
})
