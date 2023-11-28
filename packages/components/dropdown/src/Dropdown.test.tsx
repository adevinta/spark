import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Dropdown } from '.'

describe('Dropdown', () => {
  describe('initial rendering', () => {
    it('should render trigger and list of options', () => {
      render(
        <Dropdown>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Items aria-label="Job type">
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
      )

      expect(screen.getByRole('combobox', { name: 'Book' })).toBeInTheDocument()

      expect(screen.getByRole('listbox', { name: 'Book' })).toBeInTheDocument()

      expect(screen.getByRole('option', { name: 'War and Peace' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: '1984' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Pride and Prejudice' })).toBeInTheDocument()
    })
  })
})
