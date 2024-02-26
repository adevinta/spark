import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'

import { Combobox } from '..'
import { getInput, getItem, queryItem } from './test-utils'

describe('Combobox', () => {
  describe('single selection', () => {
    it('should select item', async () => {
      const user = userEvent.setup()

      // Given a combobox with no selected value yet
      render(
        <Combobox autoFilter={false}>
          <Combobox.Trigger>
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
      expect(getInput('Book').getAttribute('value')).toBe('')

      // When the user select an item
      await user.click(getInput('Book'))
      await user.click(getItem('Pride and Prejudice'))

      // Then placeholder is replaced by the selected value
      expect(screen.getByDisplayValue('Pride and Prejudice')).toBeInTheDocument()

      // Then the proper item is selected
      expect(getItem('War and Peace')).toHaveAttribute('aria-selected', 'false')
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'false')
      expect(getItem('Pride and Prejudice')).toHaveAttribute('aria-selected', 'true')
    })

    it('should render default selected option', () => {
      // Given a combobox with a default selected value
      render(
        <Combobox defaultValue="book-2">
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" />
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

      // Then the corresponding item is selected
      expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
    })

    it('should render default selected option with proper indicator when including it', () => {
      // Given a combobox with a default selected value
      render(
        <Combobox defaultValue="book-2">
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">
                <Combobox.ItemIndicator label={'selected'} />
                <Combobox.ItemText>War and Peace</Combobox.ItemText>
              </Combobox.Item>
              <Combobox.Item value="book-2">
                <Combobox.ItemIndicator label={'selected'} />
                <Combobox.ItemText>1984</Combobox.ItemText>
              </Combobox.Item>
              <Combobox.Item value="book-3">
                <Combobox.ItemIndicator label={'selected'} />
                <Combobox.ItemText>Pride and Prejudice</Combobox.ItemText>
              </Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      )

      // Then the corresponding item is selected
      expect(screen.getByLabelText('selected')).toBeVisible()
    })

    it('should control value', async () => {
      const user = userEvent.setup()

      // Given we control value by outside state and selected value
      const ControlledImplementation = () => {
        const [value, setValue] = useState('book-1')
        const [inputValue, setInputValue] = useState('')

        return (
          <Combobox value={value} onValueChange={setValue}>
            <Combobox.Trigger>
              <Combobox.Input aria-label="Book" value={inputValue} onValueChange={setInputValue} />
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
      }

      render(<ControlledImplementation />)

      expect(getItem('War and Peace')).toHaveAttribute('aria-selected', 'true')

      expect(screen.getByDisplayValue('')).toBeInTheDocument()

      // when the user select another item
      await user.click(getInput('Book'))
      await user.click(getItem('Pride and Prejudice'))

      // Then the selected value has been updated
      expect(screen.getByDisplayValue('Pride and Prejudice')).toBeInTheDocument()
    })

    it('should select item using autoFilter (keyboard)', async () => {
      const user = userEvent.setup()

      // Given a combobox with no selected value yet
      render(
        <Combobox autoFilter>
          <Combobox.Trigger>
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
      await user.keyboard('{p}{r}{i}{ArrowDown}{Enter}')

      // Then placeholder is replaced by the selected value
      expect(screen.getByDisplayValue('Pride and Prejudice')).toBeInTheDocument()

      // Then the proper item is selected
      expect(queryItem('War and Peace')).not.toBeInTheDocument()
      expect(queryItem('1984')).not.toBeInTheDocument()
      expect(getItem('Pride and Prejudice')).toHaveAttribute('aria-selected', 'true')
    })

    describe('blur behaviour', () => {
      it('should not clear input value when custom value is allowed', async () => {
        const user = userEvent.setup()

        // Given a combobox that allows custom input value
        render(
          <Combobox allowCustomValue>
            <Combobox.Trigger>
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
          <Combobox>
            <Combobox.Trigger>
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

      it('should clear selected item if input value is an empty string', async () => {
        const user = userEvent.setup()

        // Given a combobox that does not allow custom input value
        render(
          <Combobox defaultValue="book-2">
            <Combobox.Trigger>
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

        // Then 1984 should be selected
        expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
        expect(screen.getByDisplayValue('1984')).toBeInTheDocument()

        // When the user clears the input and focus outside of it
        await user.clear(screen.getByDisplayValue('1984'))
        await user.click(document.body)

        // Then item has been unselected and input remains cleared
        expect(getItem('1984')).toHaveAttribute('aria-selected', 'false')
        expect(screen.getByDisplayValue('')).toBeInTheDocument()
      })

      it('should update input value to matching item if value matches precisely', async () => {
        const user = userEvent.setup()

        // Given a combobox that does not allow custom input value
        render(
          <Combobox defaultValue="book-2" autoFilter={false}>
            <Combobox.Trigger>
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

        // Then 1984 should be selected
        expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
        expect(screen.getByDisplayValue('1984')).toBeInTheDocument()

        const input = getInput('Book')
        // When the user changes the input to the value of another item and focus outside of it
        await user.clear(input)
        await user.type(input, 'war and peace') // notice this is not case-sensitive
        await user.click(document.body)

        // Then item has been unselected and item matching the input value has been selected
        expect(getItem('1984')).toHaveAttribute('aria-selected', 'false')
        expect(getItem('War and Peace')).toHaveAttribute('aria-selected', 'true')
        expect(screen.getByDisplayValue('War and Peace')).toBeInTheDocument()
      })

      it('should sync input value to selected value if value does not match', async () => {
        const user = userEvent.setup()

        // Given a combobox that does not allow custom input value
        render(
          <Combobox defaultValue="book-2" autoFilter={false}>
            <Combobox.Trigger>
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

        // Then 1984 should be selected
        expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
        expect(screen.getByDisplayValue('1984')).toBeInTheDocument()

        const input = getInput('Book')
        // When the user changes the input to the value of another item and focus outside of it
        await user.clear(input)
        await user.type(input, 'A value that does not match any item')
        await user.click(document.body)

        // Then item remain selected and the input is synced with its text value
        expect(getItem('1984')).toHaveAttribute('aria-selected', 'true')
        expect(screen.getByDisplayValue('1984')).toBeInTheDocument()
      })
    })
  })
})