import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Dropdown } from '.'

describe('Dropdown', () => {
  it('should render list of options', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>
        <Dropdown.Items aria-label="Job type">
          <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
          <Dropdown.Item value="book-5">1984</Dropdown.Item>
          <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>
    )

    expect(screen.getByRole('option', { name: 'War and Peace' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '1984' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Pride and Prejudice' })).toBeInTheDocument()
  })
})
