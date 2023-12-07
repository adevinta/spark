/* eslint-disable max-lines */
import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { Book } from '@spark-ui/icons/dist/icons/Book'
import { Tag } from '@spark-ui/tag'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Experimental/Dropdown',
  component: Dropdown,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('book-1')

  return (
    <div className="pb-[300px]">
      <Dropdown value={value} onValueChange={setValue}>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const ControlledOpenState: StoryFn = () => {
  const [open, setOpen] = useState(true)

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
        <Dropdown open={open} onOpenChange={setOpen}>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>

          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </div>
    </div>
  )
}

export const CustomItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1" className="flex items-center gap-md">
              <Dropdown.ItemText>To Kill a Mockingbird</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-2" className="flex items-center gap-md">
              <Dropdown.ItemText>War and Peace</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-3" className="flex items-center gap-md">
              <Dropdown.ItemText>The Idiot</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-4" className="flex items-center gap-md">
              <Dropdown.ItemText>A Picture of Dorian Gray</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-5" className="flex items-center gap-md">
              <Dropdown.ItemText>1984</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-6" className="flex items-center gap-md">
              <Dropdown.ItemText>Pride and Prejudice</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const DisabledItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3" disabled>
              The Idiot
            </Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const Grouped: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Group>
              <Dropdown.Label>Best-sellers</Dropdown.Label>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            </Dropdown.Group>

            <Dropdown.Divider />

            <Dropdown.Group>
              <Dropdown.Label>Novelties</Dropdown.Label>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Group>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const LeadingIcon: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.LeadingIcon>
            <Book />
          </Dropdown.LeadingIcon>
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const ItemIndicator: StoryFn = _args => {
  return (
    <div className="w-sz-480 pb-[300px]">
      <Dropdown multiple defaultValue={['book-1', 'book-2']}>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>To Kill a Mockingbird</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-2" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>War and Peace</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-3" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>The Idiot</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-4" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>A Picture of Dorian Gray</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-5" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>1984</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-6" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>Pride and Prejudice</Dropdown.ItemText>
            </Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const FormFieldLabel: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField>
        <FormField.Label>Book</FormField.Label>
        <Dropdown>
          <Dropdown.Trigger>
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </FormField>
    </div>
  )
}

export const MultipleSelection: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown multiple>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const MultipleSelectionControlled: StoryFn = () => {
  const [values, setValues] = useState(['book-1'])

  return (
    <div className="pb-[300px]">
      <Dropdown multiple value={values} onValueChange={setValues}>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}
