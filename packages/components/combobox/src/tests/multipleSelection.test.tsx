import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Combobox } from '..'
import { getInput, getItem } from './test-utils'

describe('Combobox', () => {
  describe('multiple selection', () => {
    it('should select items', async () => {
      const user = userEvent.setup()

      // Given a combobox with no selected value yet
      render(
        <Combobox multiple>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">War and Peace</Combobox.Item>
              <Combobox.Item value="book-2">1984</Combobox.Item>
              <Combobox.Item value="book-3">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      )

      // Then placeholder should be displayed
      expect(getInput('Book').getAttribute('placeholder')).toBe('Pick a book')

      // When the user select two items
      await user.click(getInput('Book'))
      await user.click(getItem('1984'))
      await user.click(getItem('Pride and Prejudice'))

      // Then placeholder is replaced by the selected value and suffix indicating remaining items
      expect(getInput('Book').getAttribute('placeholder')).toBe('1984, Pride and Prejudice')

      // Then the proper items are selected
      expect(getItem('War and Peace')).toHaveAttribute('aria-selected', 'false')
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
      expect(getItem('Pride and Prejudice')).toHaveAttribute('aria-selected', 'true')
    })

    it('should select all items using keyboard navigation', async () => {
      const user = userEvent.setup()

      // Given a combobox with no selected value yet
      render(
        <Combobox multiple>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">War and Peace</Combobox.Item>
              <Combobox.Item value="book-2">1984</Combobox.Item>
              <Combobox.Item value="book-3">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      )

      // Then placeholder should be displayed
      expect(getInput('Book').getAttribute('placeholder')).toBe('Pick a book')

      // When the user select all the items one by one using the keyboard
      await user.click(getInput('Book'))
      await user.keyboard('[ArrowDown][Enter]')
      await user.keyboard('[ArrowDown][Enter]')
      await user.keyboard('[ArrowDown][Enter]')

      // Then all items are selected
      expect(getInput('Book').getAttribute('placeholder')).toBe(
        'War and Peace, 1984, Pride and Prejudice'
      )
      expect(getItem('War and Peace')).toHaveAttribute('aria-selected', 'true')
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
      expect(getItem('Pride and Prejudice')).toHaveAttribute('aria-selected', 'true')
    })

    it('should be able to unselect a selected item', async () => {
      const user = userEvent.setup()

      // Given a combobox with no selected value yet
      render(
        <Combobox multiple>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">War and Peace</Combobox.Item>
              <Combobox.Item value="book-2">1984</Combobox.Item>
              <Combobox.Item value="book-3">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      )

      // When the user select an item
      await user.click(getInput('Book'))
      await user.click(getItem('1984'))

      // Then placeholder is replaced by the selected value
      expect(getInput('Book').getAttribute('placeholder')).toBe('1984')
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')

      // When the user unselect that item
      await user.click(getItem('1984'))

      // Then placeholder is shown again as the item is no longer selected
      expect(getInput('Book').getAttribute('placeholder')).toBe('Pick a book')
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'false')
    })
  })
})
