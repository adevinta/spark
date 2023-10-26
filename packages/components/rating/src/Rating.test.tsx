import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Rating } from './Rating'

const utils = {
  getInput: () =>
    screen.getByRole('slider', {
      name: /rating/i,
    }),
  getStars: (container: HTMLElement) =>
    Array.from(container.querySelectorAll('[data-part="star"]')),
}

describe('Rating', () => {
  it('should render', () => {
    const { container } = render(<Rating defaultValue={2} />)

    expect(container.querySelector('[data-spark-component=rating]')).toBeInTheDocument()
    expect(container.querySelectorAll('[data-part="star"]').length).toBe(5)
  })

  it('should be possible to interact', async () => {
    const user = userEvent.setup()

    const { container } = render(<Rating size="lg" defaultValue={1} />)

    const stars = utils.getStars(container)
    const input = utils.getInput()

    // initial value
    expect(input).toHaveValue('1')

    await user.click(stars.at(2)!)
    expect(input).toHaveValue('3')

    await user.click(stars.at(0)!)
    expect(input).toHaveValue('1')
  })

  it('should handle controlled mode', async () => {
    function ControlledRating({ onValueChange }: { onValueChange: (value: number) => void }) {
      const [value, setValue] = useState(2)

      const handleInteraction = (value: number): void => {
        onValueChange(value)
        setValue(value)
      }

      return <Rating value={value} onValueChange={handleInteraction} />
    }

    const onValueChangeSpy = vi.fn()
    const user = userEvent.setup()
    const { container } = render(<ControlledRating onValueChange={onValueChangeSpy} />)

    const stars = utils.getStars(container)
    const input = utils.getInput()

    // initial value
    expect(input).toHaveValue('2')

    await user.click(stars.at(4)!)
    expect(input).toHaveValue('5')
    expect(onValueChangeSpy).toHaveBeenCalledTimes(1)
    expect(onValueChangeSpy).toHaveBeenCalledWith(5)
  })

  it('should not be possible to interact when in readOnly (in controlled mode)', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(<Rating value={1} onValueChange={handleValueChange} readOnly />)

    const input = utils.getInput()

    await user.click(input)
    expect(handleValueChange).not.toHaveBeenCalled()
  })

  it('should not be possible to interact when disabled (in uncontrolled mode)', async () => {
    const user = userEvent.setup()
    const { container } = render(<Rating defaultValue={1} disabled />)

    const stars = utils.getStars(container)
    const input = utils.getInput()

    expect(input).toBeDisabled()

    // check that click doesn't do anything
    await user.click(stars.at(4)!)
    expect(input).toHaveValue('1')
  })
})
