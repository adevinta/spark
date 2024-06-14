import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Accordion } from '.'

describe('Accordion', () => {
  it('should open the accordion content when clicking on the trigger', async () => {
    const user = userEvent.setup()

    // Given an accordion in closed state
    render(
      <Accordion>
        <Accordion.Item value="a">
          <Accordion.ItemTrigger>First trigger</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <p>First panel</p>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item value="b">
          <Accordion.ItemTrigger>Second trigger</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <p>Second panel</p>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion>
    )

    // Then both panels are closed
    expect(screen.getByText('First panel')).not.toBeVisible()
    expect(screen.getByText('Second panel')).not.toBeVisible()

    await user.click(screen.getByRole('button', { name: 'First trigger' }))

    // Then first panel has been opened
    expect(screen.getByText('First panel')).toBeVisible()
    expect(screen.getByText('Second panel')).not.toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Second trigger' }))

    // Then first panel has been closed and second panel has been opened
    expect(screen.getByText('First panel')).not.toBeVisible()
    expect(screen.getByText('Second panel')).toBeVisible()
  })
})
