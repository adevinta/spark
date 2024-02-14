/* eslint-disable max-lines */
import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { Tag } from '@spark-ui/tag'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import React, { ComponentProps, useState } from 'react'

import { Combobox } from '.'

const meta: Meta<typeof Combobox> = {
  title: 'Experimental/Combobox',
  component: Combobox,
}

export default meta

/**
 * Minimal anatomy:
 * - Combobox
 *  - Combobox.Trigger
 *    - Combobox.Input
 *  - Combobox.Popover
 *    - Combobox.Items
 *      - Combobox.Item
 *
 * Full anatomy:
 * - Combobox
 *  - Combobox.Trigger
 *    - Combobox.LeadingIcon
 *    - Combobox.SelectedItems
 *    - Combobox.Input
 *    - Combobox.ClearButton
 *    - Combobox.Disclosure
 *  - Combobox.Popover
 *    - Combobox.Items
 *      - Combobox.Group
 *        - Combobox.Label
 *        - Combobox.Item
 *          - Combobox.ItemIndicator
 *          - Combobox.ItemText
 *
 * Filtering behaviour:
 * - default: no filtering.
 * - autoFilter: filters out values not matching the input.
 * - autoSelect: filters out values not matching the input AND highlight the first matching item.
 * - autoComplete: restrict typing in the input to any of the items values and highlight the rest of the first matching item behind the typing cursor
 * - custom filtering: controlled mode for advancer filtering. Not managed by Spark.
 *
 * Optional parts:
 * - Combobox.LeadingIcon
 * - Combobox.ClearButton
 * - Combobox.Disclosure
 * - Combobox.Empty
 * - Combobox.SelectedItems (chips)
 * - Combobox.Popover
 *
 * Selection type:
 * - single
 * - multiple
 */

export const Default: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('book-1')
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="pb-[300px]">
      <Combobox value={value} onValueChange={setValue}>
        <Combobox.Trigger>
          <Combobox.Input
            aria-label="Book"
            placeholder="Pick a book"
            value={inputValue}
            onValueChange={setInputValue}
          />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const ControlledOpenState: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-lg">
      <div className="flex gap-md">
        <Button design="outlined" intent="success" disabled={open} onClick={() => setOpen(true)}>
          Open
        </Button>
        <Button design="outlined" intent="danger" disabled={!open} onClick={() => setOpen(false)}>
          Close
        </Button>
      </div>

      <div className="pb-[300px]">
        <Combobox open={open} onOpenChange={setOpen}>
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>

          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </div>
    </div>
  )
}

export const CustomItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1" className="flex items-center gap-md">
              <Combobox.ItemText>To Kill a Mockingbird</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-2" className="flex items-center gap-md">
              <Combobox.ItemText>War and Peace</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-3" className="flex items-center gap-md">
              <Combobox.ItemText>The Idiot</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-4" className="flex items-center gap-md">
              <Combobox.ItemText>A Picture of Dorian Gray</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-5" className="flex items-center gap-md">
              <Combobox.ItemText>1984</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-6" className="flex items-center gap-md">
              <Combobox.ItemText>Pride and Prejudice</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Disabled: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox disabled>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const FilteringAutoFilter: StoryFn = _args => {
  const items = {
    'book-1': 'To Kill a Mockingbird',
    'book-2': 'War and Peace',
    'book-3': 'The Idiot',
    'book-4': 'A Picture of Dorian Gray',
    'book-5': '1984',
    'book-6': 'Pride and Prejudice',
  }

  return (
    <div className="pb-[300px]">
      <Combobox autoFilter>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            {Object.entries(items).map(([value, text]) => (
              <Combobox.Item value={value} key={value}>
                {text}
              </Combobox.Item>
            ))}
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const FilteringManual: StoryFn = () => {
  const items = {
    'book-1': 'To Kill a Mockingbird',
    'book-2': 'War and Peace',
    'book-3': 'The Idiot',
    'book-4': 'A Picture of Dorian Gray',
    'book-5': '1984',
    'book-6': 'Pride and Prejudice',
  }
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input
            aria-label="Book"
            placeholder="Pick a book"
            value={inputValue}
            onValueChange={setInputValue}
          />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            {Object.entries(items).map(([value, text]) => {
              if (!text.includes(inputValue)) return null

              return (
                <Combobox.Item value={value} key={value}>
                  {text}
                </Combobox.Item>
              )
            })}
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const ReadOnly: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox readOnly>
        <Combobox.Trigger aria-label="Book">
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const DisabledItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3" disabled>
              The Idiot
            </Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Grouped: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox autoFilter>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>
        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Group>
              <Combobox.Label>Best-sellers</Combobox.Label>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            </Combobox.Group>

            <Combobox.Divider />

            <Combobox.Group>
              <Combobox.Label>Novelties</Combobox.Label>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Group>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const LeadingIcon: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

// ClearIcon

export const ItemIndicator: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox multiple defaultValue={['book-1', 'book-2']}>
        <Combobox.Trigger aria-label="Book">
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Item value="book-1" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>To Kill a Mockingbird</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-2" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>War and Peace</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-3" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>The Idiot</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-4" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>A Picture of Dorian Gray</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-5" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>1984</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-6" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>Pride and Prejudice</Combobox.ItemText>
            </Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Statuses: StoryFn = () => {
  type Status = ComponentProps<typeof Combobox>['state']

  const statuses: Status[] = ['error', 'alert', 'success']

  return (
    <div className="flex flex-col gap-lg pb-[300px]">
      {statuses.map(status => {
        return (
          <Combobox state={status}>
            <Combobox.Trigger aria-label="Book">
              <Combobox.Input aria-label="Book" placeholder="Pick a book" />
            </Combobox.Trigger>

            <Combobox.Popover>
              <Combobox.Items>
                <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
                <Combobox.Item value="book-2">War and Peace</Combobox.Item>
                <Combobox.Item value="book-3">The Idiot</Combobox.Item>
                <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
                <Combobox.Item value="book-5">1984</Combobox.Item>
                <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
              </Combobox.Items>
            </Combobox.Popover>
          </Combobox>
        )
      })}
    </div>
  )
}

export const MultipleSelection: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox multiple autoFilter defaultValue={['book-1', 'book-2']}>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const MultipleSelectionControlled: StoryFn = () => {
  const [inputValue, setInputValue] = useState('a')
  const [selectedValues, setSelectedValues] = useState(['book-1', 'book-2'])
  const items = {
    'book-1': 'To Kill a Mockingbird',
    'book-2': 'War and Peace',
    'book-3': 'The Idiot',
    'book-4': 'A Picture of Dorian Gray',
    'book-5': '1984',
    'book-6': 'Pride and Prejudice',
  }

  return (
    <div className="flex flex-col  gap-md pb-[300px]">
      <Combobox autoFilter multiple value={selectedValues} onValueChange={setSelectedValues}>
        <Combobox.Trigger>
          <Combobox.Input
            aria-label="Book"
            placeholder="Pick a book"
            value={inputValue}
            onValueChange={setInputValue}
          />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            {Object.entries(items).map(([key, value]) => {
              return (
                <Combobox.Item value={key} key={key}>
                  {value}
                </Combobox.Item>
              )
            })}
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const FormFieldLabel: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField>
        <FormField.Label>Book</FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldHiddenLabel: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField>
        <FormField.Label>
          <VisuallyHidden>Book</VisuallyHidden>
        </FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldReadOnly: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField readOnly>
        <FormField.Label>Book</FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>

          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldDisabled: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField disabled>
        <FormField.Label>Book</FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldRequired: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField isRequired>
        <FormField.Label>Book</FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldValidation: StoryFn = () => {
  const [state, setState] = useState<undefined | 'success' | 'alert' | 'error'>('error')

  return (
    <div className="pb-[300px]">
      <FormField state={state}>
        <FormField.Label>Statuses</FormField.Label>
        <Combobox
          onValueChange={value => {
            setState(value === 'default' ? undefined : (value as 'success' | 'alert' | 'error'))
          }}
        >
          <Combobox.Trigger aria-label="Book">
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Item value="default">default</Combobox.Item>
              <Combobox.Item value="success">success</Combobox.Item>
              <Combobox.Item value="alert">alert</Combobox.Item>
              <Combobox.Item value="error">error</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
        <FormField.HelperMessage>
          An effective title significantly increases your chances of making a sale
        </FormField.HelperMessage>
        <FormField.SuccessMessage>Well done!</FormField.SuccessMessage>
        <FormField.AlertMessage>Take care of this field</FormField.AlertMessage>
        <FormField.ErrorMessage>The field is invalid</FormField.ErrorMessage>
      </FormField>
    </div>
  )
}
