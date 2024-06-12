import { Checkbox, CheckboxGroup } from '@spark-ui/checkbox'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Accordion } from '.'

const meta: Meta<typeof Accordion> = {
  title: 'Experimental/Accordion',
  component: Accordion,
}

export default meta

export const Default: StoryFn = () => {
  return (
    <Accordion>
      <Accordion.Item value="a">
        <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="b">
        <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="c">
        <Accordion.ItemTrigger>Aircrafts</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion>
  )
}

export const Disabled: StoryFn = () => {
  return (
    <Accordion disabled>
      <Accordion.Item value="a">
        <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="b">
        <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="c">
        <Accordion.ItemTrigger>Aircrafts</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion>
  )
}

export const DisabledItem: StoryFn = () => {
  return (
    <Accordion>
      <Accordion.Item value="a">
        <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="b" disabled>
        <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="c">
        <Accordion.ItemTrigger>Aircrafts</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion>
  )
}

export const Multiple: StoryFn = () => {
  return (
    <Accordion multiple defaultValue={['b', 'c']}>
      <Accordion.Item value="a">
        <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="b">
        <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="c">
        <Accordion.ItemTrigger>Aircrafts</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion>
  )
}

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState(['b', 'c'])

  return (
    <div>
      <CheckboxGroup
        orientation="horizontal"
        value={value}
        onCheckedChange={setValue}
        className="mb-lg"
      >
        <Checkbox value="a">Watercraft</Checkbox>
        <Checkbox value="b">Automobiles</Checkbox>
        <Checkbox value="c">Aircrafts</Checkbox>
      </CheckboxGroup>

      <Accordion multiple value={value} onValueChange={setValue}>
        <Accordion.Item value="a">
          <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item value="b">
          <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item value="c">
          <Accordion.ItemTrigger>Aircrafts</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
