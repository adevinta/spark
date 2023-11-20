import { Switch } from '@spark-ui/switch'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Experimental/Dropdown',
  component: Dropdown,
}

export default meta

const books = [
  { value: 'book-1', text: 'To Kill a Mockingbird' },
  { value: 'book-2', text: 'War and Peace' },
  { value: 'book-3', text: 'The Idiot', disabled: true },
  { value: 'book-4', text: 'A Picture of Dorian Gray' },
  { value: 'book-5', text: '1984' },
  { value: 'book-6', text: 'Pride and Prejudice' },
  { value: 'book-7', text: 'Meditations' },
  {
    value: 'book-8',
    text: 'The Brothers Karamazov',
  },
  { value: 'book-9', text: 'Anna Karenina' },
  { value: 'book-10', text: 'Crime and Punishment' },
]

export const Default: StoryFn = _args => {
  const [removeItems, setRemoveItems] = useState(false)

  return (
    <div className="w-sz-480 ">
      <Switch checked={removeItems} onCheckedChange={setRemoveItems}>
        Remove first item
      </Switch>
      <Dropdown>
        <Dropdown.Trigger />
        <Dropdown.Items aria-label="Job type">
          {books.map(item => {
            if (removeItems && item.value === 'book-1') return null

            return (
              <Dropdown.Item value={item.value} key={item.value} disabled={item.disabled}>
                {item.text}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Items>
      </Dropdown>
    </div>
  )
}
