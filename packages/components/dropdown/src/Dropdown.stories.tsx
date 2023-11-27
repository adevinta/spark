import { FormField } from '@spark-ui/form-field'
import { Tag } from '@spark-ui/tag'
import { Meta, StoryFn } from '@storybook/react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Experimental/Dropdown',
  component: Dropdown,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="w-sz-480 pb-[300px]">
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

export const CustomItem: StoryFn = _args => {
  return (
    <div className="w-sz-480 pb-[300px]">
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
    <div className="w-sz-480 pb-[300px]">
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
    <div className="w-sz-480 pb-[300px]">
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

export const FormFieldLabel: StoryFn = _args => {
  return (
    <div className="w-sz-480 pb-[300px]">
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
