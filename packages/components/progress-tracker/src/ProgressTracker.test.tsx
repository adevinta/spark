import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ProgressTracker } from './'

const defaultProps = {
  stepIndex: 1,
  children: (
    <>
      <ProgressTracker.Step>
        <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
    </>
  ),
}

describe('ProgressTracker', () => {
  beforeEach(() => vi.clearAllMocks())

  it('should render with steps', () => {
    render(<ProgressTracker {...defaultProps} />)

    expect(screen.getByLabelText('progress')).toBeInTheDocument()

    expect(screen.getByText('Build').closest('li')).toHaveAttribute('data-state', 'complete')
    expect(screen.getByText('Deploy').closest('li')).toHaveAttribute('data-state', 'active')
    expect(screen.getByText('Iterate').closest('li')).toHaveAttribute('data-state', 'incomplete')
  })

  it('should handle callback on step click, except if step is disabled', async () => {
    const user = userEvent.setup()

    const props = {
      stepIndex: 1,
      onStepClick: vi.fn(),
    }

    render(
      <ProgressTracker {...props}>
        <ProgressTracker.Step aria-label="Build" />
        <ProgressTracker.Step aria-label="Deploy" />
        <ProgressTracker.Step aria-label="Iterate" disabled />
      </ProgressTracker>
    )

    await user.click(screen.getByLabelText('Build'))
    await user.click(screen.getByLabelText('Iterate'))

    expect(props.onStepClick).toHaveBeenCalledTimes(1)
  })

  it('should not handle callback on readonly mode', async () => {
    const user = userEvent.setup()

    const props = {
      ...defaultProps,
      onStepClick: vi.fn(),
    }

    render(<ProgressTracker {...props} readOnly />)

    await user.click(screen.getByText('Build'))

    expect(props.onStepClick).not.toHaveBeenCalled()
  })
})
