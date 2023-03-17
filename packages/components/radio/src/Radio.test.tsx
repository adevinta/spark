import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vitest } from 'vitest'

import { Radio, RadioGroup } from '.'

describe('Radio', () => {
  it('should render correctly', () => {
    render(
      <RadioGroup defaultValue="1">
        <label>
          1
          <Radio value="1" />
        </label>
        <label>
          2
          <Radio value="2" />
        </label>
        <label>
          3
          <Radio value="3" />
        </label>
      </RadioGroup>
    )

    const radiogroupEl = screen.getByRole('radiogroup')

    expect(radiogroupEl).toBeInTheDocument()
    expect(within(radiogroupEl).getByRole('radio', { name: '1' })).toBeChecked()
    expect(within(radiogroupEl).getByRole('radio', { name: '2' })).not.toBeChecked()
    expect(within(radiogroupEl).getByRole('radio', { name: '3' })).not.toBeChecked()
  })

  it('should be able to handle state by itself', async () => {
    render(
      <RadioGroup defaultValue="1">
        <label>
          1
          <Radio value="1" />
        </label>
        <label>
          2
          <Radio value="2" />
        </label>
        <label>
          3
          <Radio value="3" />
        </label>
      </RadioGroup>
    )

    const radiogroupEl = screen.getByRole('radiogroup')

    expect(radiogroupEl).toBeInTheDocument()
    expect(within(radiogroupEl).getByRole('radio', { name: '1' })).toBeChecked()

    userEvent.click(within(radiogroupEl).getByRole('radio', { name: '2' }))

    await waitFor(() =>
      expect(within(radiogroupEl).getByRole('radio', { name: '1' })).toBeChecked()
    )
  })

  it('should be able to delegate the state', async () => {
    const onValueChange = vitest.fn()

    render(
      <RadioGroup value="1" onValueChange={onValueChange}>
        <label>
          1
          <Radio value="1" />
        </label>
        <label>
          2
          <Radio value="2" />
        </label>
        <label>
          3
          <Radio value="3" />
        </label>
      </RadioGroup>
    )

    const radiogroupEl = screen.getByRole('radiogroup')

    expect(radiogroupEl).toBeInTheDocument()
    expect(within(radiogroupEl).getByRole('radio', { name: '1' })).toBeChecked()

    userEvent.click(within(radiogroupEl).getByRole('radio', { name: '2' }))

    await waitFor(() => expect(onValueChange).toBeCalledWith('2'))
  })
})
