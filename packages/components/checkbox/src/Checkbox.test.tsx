import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render', () => {
    // Given

    // When
    render(<Checkbox>Accept terms and conditions</Checkbox>)
    const element = screen.getByRole('checkbox', { name: 'Accept terms and conditions' })

    // Then
    expect(element).toBeInTheDocument()
    expect(element).not.toBeChecked()
    expect(document.querySelector('[data-spark-component="checkbox"]')).toBeInTheDocument()
  })

  it('should trigger check event', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(<Checkbox onCheckedChange={clickEvent}> Accept terms and conditions</Checkbox>)
    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(screen.getByRole('checkbox', { name: 'Accept terms and conditions' })).toBeChecked()
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(true, undefined)
  })

  it('should trigger uncheck event', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(
      <Checkbox defaultChecked onCheckedChange={clickEvent}>
        Accept terms and conditions
      </Checkbox>
    )

    // Then
    expect(screen.getByRole('checkbox')).toBeChecked()

    // When
    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(false, undefined)
  })

  it('should not trigger events', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(<Checkbox disabled>Accept terms and conditions</Checkbox>)

    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(0)
  })
})
