import { Switch } from '@spark-ui/switch'
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
  const [removeItems, setRemoveItems] = useState(false)

  return (
    <div className="w-sz-480 ">
      <Switch checked={removeItems} onCheckedChange={setRemoveItems}>
        Remove first item
      </Switch>
      <Dropdown>
        <Dropdown.Trigger />
        <Dropdown.Items aria-label="Job type">
          {!removeItems && <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>}
          <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
          <Dropdown.Item value="book-3" disabled>
            The Idiot
          </Dropdown.Item>
          {!removeItems && <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>}
          <Dropdown.Item value="book-5">1984</Dropdown.Item>
          <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          <Dropdown.Item value="book-7">Meditations</Dropdown.Item>
          <Dropdown.Item value="book-8">The Brothers Karamazov</Dropdown.Item>
          <Dropdown.Item value="book-9">Anna Karenina</Dropdown.Item>
          <Dropdown.Item value="book-10" className="gap-md">
            <Dropdown.ItemText>Crime and Punishment</Dropdown.ItemText>
            <Tag>New</Tag>
          </Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>
      <p>some content, etc...</p>
      <p>some content, etc...</p>
      <p>some content, etc...</p>
      <p>some content, etc...</p>
      <p>some content, etc...</p>
    </div>
  )
}
