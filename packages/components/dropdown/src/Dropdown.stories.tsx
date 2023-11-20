import { Meta, StoryFn } from '@storybook/react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Experimental/Dropdown',
  component: Dropdown,
}

export default meta

const books = [
  { id: 'book-1', title: 'To Kill a Mockingbird' },
  { id: 'book-2', title: 'War and Peace' },
  { id: 'book-3', title: 'The Idiot' },
  { id: 'book-4', title: 'A Picture of Dorian Gray' },
  { id: 'book-5', title: '1984' },
  { id: 'book-6', title: 'Pride and Prejudice' },
  { id: 'book-7', title: 'Meditations' },
  {
    id: 'book-8',
    title: 'The Brothers Karamazov',
  },
  { id: 'book-9', title: 'Anna Karenina' },
  { id: 'book-10', title: 'Crime and Punishment' },
]

export const Default: StoryFn = _args => {
  return (
    <div className="w-sz-480 ">
      <Dropdown items={books}>
        <Dropdown.Trigger />
        <Dropdown.Items aria-label="Job type">
          {books.map((item, index) => {
            return <Dropdown.Item index={index} item={item} key={item.id} />
          })}
        </Dropdown.Items>
      </Dropdown>
    </div>
  )
}
