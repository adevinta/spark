import { FormField } from '@spark-ui/form-field'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Combobox } from '..'
import { getInput } from './test-utils'

describe('Combobox', () => {
  describe('with FormField', () => {
    it('should render error message when field is in error', () => {
      render(
        <FormField state="error">
          <FormField.Label>Book</FormField.Label>
          <Combobox>
            <Combobox.Trigger />
            <Combobox.Popover>
              <Combobox.Items>
                <Combobox.Item value="book-1">War and Peace</Combobox.Item>
                <Combobox.Item value="book-2">1984</Combobox.Item>
                <Combobox.Item value="book-3">Pride and Prejudice</Combobox.Item>
              </Combobox.Items>
            </Combobox.Popover>
          </Combobox>
          <FormField.ErrorMessage>You forgot to select a book</FormField.ErrorMessage>
        </FormField>
      )

      expect(getInput('Book')).toBeInTheDocument()

      expect(screen.getByText('You forgot to select a book')).toBeInTheDocument()
    })
  })
})
