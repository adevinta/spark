import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render', () => {
    render(
      <>
        <Checkbox id={'c1'} />
        <label htmlFor={'c1'}>Accept terms and conditions</label>
      </>
    )

    expect(screen.getByText('Accept terms and conditions')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('should trigger check event', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // Given
    render(
      <>
        <Checkbox id={'c1'} onCheckedChange={clickEvent} />
        <label htmlFor={'c1'}>Accept terms and conditions</label>
      </>
    )

    // When
    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(true)
  })
  it('should trigger uncheck event', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // Given
    render(
      <>
        <Checkbox id={'c1'} defaultChecked onCheckedChange={clickEvent} />
        <label htmlFor={'c1'}>Accept terms and conditions</label>
      </>
    )

    // When
    expect(screen.getByRole('checkbox')).toBeChecked()
    await user.click(screen.getByText('Accept terms and conditions'))
    expect(screen.getByRole('checkbox')).not.toBeChecked()

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(false)
  })
  it('should not trigger events', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // Given
    render(
      <>
        <Checkbox id={'c1'} disabled />
        <label htmlFor={'c1'}>Accept terms and conditions</label>
      </>
    )

    // When
    await user.click(screen.getByText('Accept terms and conditions'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(0)
  })
})
