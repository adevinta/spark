import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Combobox } from '..'
import { getInput, getItem, getSelectedItem, querySelectedItem } from './test-utils'

describe('Combobox', () => {
  describe('multiple selection', () => {
    it('should select items', async () => {
      const user = userEvent.setup()

      // Given a combobox with no selected value yet
      render(
        <Combobox multiple>
          <Combobox.Trigger>
            <Combobox.SelectedItems />
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">War and Peace</Combobox.Item>
              <Combobox.Item value="book-2">1984</Combobox.Item>
              <Combobox.Item value="book-3">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      )

      // When the user select two items
      await user.click(getInput('Book'))
      await user.click(getItem('1984'))
      await user.click(getItem('Pride and Prejudice'))

      // Then matching selected items (chips) are displayed
      expect(getSelectedItem('1984')).toBeInTheDocument()
      expect(getSelectedItem('Pride and Prejudice')).toBeInTheDocument()

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
          <Combobox.Trigger>
            <Combobox.SelectedItems />
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">War and Peace</Combobox.Item>
              <Combobox.Item value="book-2">1984</Combobox.Item>
              <Combobox.Item value="book-3">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      )

      // When the user select all the items one by one using the keyboard
      await user.click(getInput('Book'))
      await user.keyboard('[ArrowDown][Enter]')
      await user.keyboard('[ArrowDown][Enter]')
      await user.keyboard('[ArrowDown][Enter]')

      // Then all items are selected
      expect(getSelectedItem('War and Peace')).toBeInTheDocument()
      expect(getItem('War and Peace')).toHaveAttribute('aria-selected', 'true')

      expect(getSelectedItem('1984')).toBeInTheDocument()
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')

      expect(getSelectedItem('Pride and Prejudice')).toBeInTheDocument()
      expect(getItem('Pride and Prejudice')).toHaveAttribute('aria-selected', 'true')
    })

    it('should be able to unselect a selected item', async () => {
      const user = userEvent.setup()

      // Given a combobox with no selected value yet
      render(
        <Combobox multiple>
          <Combobox.Trigger>
            <Combobox.SelectedItems />
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
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

      // Then selected item chip is displayed
      expect(getSelectedItem('1984')).toBeInTheDocument()
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')

      // When the user unselect that item
      await user.click(getItem('1984'))

      // Then chip has been removed and item is unselected
      expect(querySelectedItem('1984')).not.toBeInTheDocument()
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'false')
    })

    describe('blur behaviour', () => {
      it('should not clear input value when custom value is allowed', async () => {
        const user = userEvent.setup()

        // Given a combobox that allows custom input value
        render(
          <Combobox multiple allowCustomValue>
            <Combobox.Trigger>
              <Combobox.SelectedItems />
              <Combobox.Input aria-label="Book" placeholder="Pick a book" />
            </Combobox.Trigger>
            <Combobox.Popover>
              <Combobox.Items>
                <Combobox.Item value="book-1">War and Peace</Combobox.Item>
                <Combobox.Item value="book-2">1984</Combobox.Item>
                <Combobox.Item value="book-3">Pride and Prejudice</Combobox.Item>
              </Combobox.Items>
            </Combobox.Popover>
          </Combobox>
        )

        // When the user type "pri" in the input
        await user.click(getInput('Book'))
        await user.keyboard('{p}{r}{i}')

        // When the user focus leaves the input
        await user.click(document.body)

        // Then input value is preserved as custom values are allowed
        expect(screen.getByDisplayValue('pri')).toBeInTheDocument()
      })

      it('should clear input value if custom value is not allowed', async () => {
        const user = userEvent.setup()

        // Given a combobox that does not allow custom input value
        render(
          <Combobox multiple allowCustomValue={false}>
            <Combobox.Trigger>
              <Combobox.SelectedItems />
              <Combobox.Input aria-label="Book" placeholder="Pick a book" />
            </Combobox.Trigger>
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

        // When the user type "pri" to filter first item matching, then select it
        await user.click(getInput('Book'))
        await user.keyboard('{p}{r}{i}')

        // When the user focus leaves the input
        await user.click(document.body)

        // Then input value has been cleared
        expect(screen.getByDisplayValue('')).toBeInTheDocument()
      })
    })
  })
})
