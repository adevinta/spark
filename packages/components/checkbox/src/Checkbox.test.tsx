import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render', () => {
    // Given

    // When
    render(
      <>
        <Checkbox id="c1" />
        <label htmlFor="c1">Accept terms and conditions</label>
      </>
    )
    const element = screen.getByRole('checkbox', { name: 'Accept terms and conditions' })

    // Then
    expect(element).toBeInTheDocument()
    expect(element).not.toBeChecked()
  })

  it('should trigger check event', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(
      <>
        <Checkbox id="c1" onCheckedChange={clickEvent} />
        <label htmlFor="c1">Accept terms and conditions</label>
      </>
    )
    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(screen.getByRole('checkbox', { name: 'Accept terms and conditions' })).toBeChecked()
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(true)
  })

  it('should trigger uncheck event', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(
      <>
        <Checkbox id="c1" defaultChecked onCheckedChange={clickEvent} />
        <label htmlFor="c1">Accept terms and conditions</label>
      </>
    )

    // Then
    expect(screen.getByRole('checkbox')).toBeChecked()

    // When
    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(false)
  })

  it('should not trigger events', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(
      <>
        <Checkbox id="c1" disabled />
        <label htmlFor="c1">Accept terms and conditions</label>
      </>
    )

    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(0)
  })
})
