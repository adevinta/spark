import { Button } from '@spark-ui/button'
import { Chip } from '@spark-ui/chip'
import { Dropdown } from '@spark-ui/dropdown'
import { Input, InputGroup } from '@spark-ui/input'
import { Meta, StoryFn } from '@storybook/react'

import { Group } from '.'

const meta: Meta<typeof Group> = {
  title: 'Components/Group',
  component: Group,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="flex flex-col gap-lg">
    <Group>
      <Button design="outlined" intent="alert">
        first
      </Button>
      <Button design="outlined" intent="success">
        second
      </Button>
      <Button design="outlined" intent="danger">
        third
      </Button>
    </Group>

    <Group>
      <Chip onClick={() => console.log('assist')}>first</Chip>
      <Chip onClick={() => console.log('assist')}>second</Chip>
      <Chip onClick={() => console.log('assist')}>third</Chip>
    </Group>

    <Group>
      <InputGroup state="success">
        <Input placeholder="first" />
      </InputGroup>
      <InputGroup state="error">
        <Input placeholder="first" />
      </InputGroup>
      <InputGroup state="alert">
        <Input placeholder="first" />
      </InputGroup>
    </Group>

    <Group>
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="First" />
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
      <Input placeholder="second" />
      <Button>third</Button>
    </Group>

    <div className="flex gap-md">
      <Dropdown defaultValue="FR">
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="FR, etc." />
        </Dropdown.Trigger>

        <Dropdown.Popover matchTriggerWidth={false} align="start">
          <Dropdown.Items>
            <Dropdown.Item value="FR">🇫🇷 FR</Dropdown.Item>
            <Dropdown.Item value="EN">🇬🇧 EN</Dropdown.Item>
            <Dropdown.Item value="ES">🇪🇸 ES</Dropdown.Item>
            <Dropdown.Item value="DE">🇩🇪 DE</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>

      <Input placeholder="+ 33 (0)" />
    </div>
  </div>
)
