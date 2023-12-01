import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'

import { Dropdown } from '.'

const getTrigger = (accessibleName: string) => {
  return screen.getByRole('combobox', { name: accessibleName })
}

const getListbox = (accessibleName: string) => {
  return screen.getByRole('listbox', { name: accessibleName })
}

const getItem = (accessibleName: string) => {
  return screen.getByRole('option', { name: accessibleName })
}

describe('Dropdown', () => {
  it('should render trigger and list of options', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-2">1984</Dropdown.Item>
            <Dropdown.Item value="book-3">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    )

    expect(getTrigger('Book')).toBeInTheDocument()

    expect(getListbox('Book')).toBeInTheDocument()

    expect(getItem('War and Peace')).toBeInTheDocument()
    expect(getItem('1984')).toBeInTheDocument()
    expect(getItem('Pride and Prejudice')).toBeInTheDocument()
  })

  describe('Popover behaviour', () => {
    it('should open/close the popover when interacting with its trigger', async () => {
      const user = userEvent.setup()

      // Given a close dropdown (default state)
      render(
        <Dropdown>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-2">1984</Dropdown.Item>
              <Dropdown.Item value="book-3">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      )

      const trigger = getTrigger('Book')

      expect(trigger).toHaveAttribute('aria-expanded', 'false')

      // When the user interact with the trigger
      await user.click(trigger)

      // Then the dropdown has expanded
      expect(trigger).toHaveAttribute('aria-expanded', 'true')

      // When the user interact with the trigger while expanded
      await user.click(trigger)

      // Then the dropdown is closed again
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })
  })

  describe('Dropdown.Value', () => {
    it('should display placholder before selection, selected value after selection', async () => {
      const user = userEvent.setup()

      // Given a dropdown with no selected value yet
      render(
        <Dropdown>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-2">1984</Dropdown.Item>
              <Dropdown.Item value="book-3">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      )

      // Then placeholder should be displayed
      expect(getTrigger('Book')).toHaveTextContent('Pick a book')

      // When the user select an item
      await user.click(getTrigger('Book'))
      await user.click(getItem('Pride and Prejudice'))

      // Then placeholder is replaced by the selected value
      expect(getTrigger('Book')).toHaveTextContent('Pride and Prejudice')
    })

    it('should display custom value after selection', async () => {
      const user = userEvent.setup()

      // Given a dropdown with no selected value yet
      render(
        <Dropdown>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book">You have selected a book</Dropdown.Value>
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-2">1984</Dropdown.Item>
              <Dropdown.Item value="book-3">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      )

      // Then placeholder should be displayed
      expect(getTrigger('Book')).toHaveTextContent('Pick a book')

      // When the user select an item
      await user.click(getTrigger('Book'))
      await user.click(getItem('Pride and Prejudice'))

      // Then placeholder is replaced by a custom value
      expect(getTrigger('Book')).toHaveTextContent('You have selected a book')
    })
  })

  describe('default value', () => {
    it('should render default selected option (single selection)', () => {
      // Given a dropdown with a default selected value
      render(
        <Dropdown defaultValue="book-2">
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-2">1984</Dropdown.Item>
              <Dropdown.Item value="book-3">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      )

      // Then the corresponding item is selected
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
    })

    // it('should render default selected option (multiple selection)', () => {})
  })

  describe('controlled', () => {
    it('should control value (single selection)', async () => {
      const user = userEvent.setup()

      // Given we control value by outside state and selected value
      const ControlledImplementation = () => {
        const [value, setValue] = useState('book-1')

        return (
          <Dropdown value={value} onValueChange={setValue}>
            <Dropdown.Trigger aria-label="Book">
              <Dropdown.Value placeholder="Pick a book" />
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <Dropdown.Items>
                <Dropdown.Item value="book-1">War and Peace</Dropdown.Item>
                <Dropdown.Item value="book-2">1984</Dropdown.Item>
                <Dropdown.Item value="book-3">Pride and Prejudice</Dropdown.Item>
              </Dropdown.Items>
            </Dropdown.Popover>
          </Dropdown>
        )
      }

      render(<ControlledImplementation />)

      expect(getItem('War and Peace')).toHaveAttribute('aria-selected', 'true')

      expect(getTrigger('Book')).toHaveTextContent('War and Peace')

      // when the user select another item
      await user.click(getTrigger('Book'))
      await user.click(getItem('Pride and Prejudice'))

      // Then the selected value has been updated
      expect(getTrigger('Book')).toHaveTextContent('Pride and Prejudice')
    })

    // it('should control value (multiple selection)', async () => {})

    it('should remain forced opened', async () => {
      const user = userEvent.setup()

      // Given a dropdown that should remain opened
      render(
        <Dropdown open>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-2">1984</Dropdown.Item>
              <Dropdown.Item value="book-3">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      )

      expect(getTrigger('Book')).toHaveAttribute('aria-expanded', 'true')

      // When the user interacts with the trigger
      await user.click(getTrigger('Book'))

      // Then the dropdown remains opened
      expect(getTrigger('Book')).toHaveAttribute('aria-expanded', 'true')
    })
  })
})
