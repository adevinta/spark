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
      <Accordion.Item value="watercraft">
        <Accordion.ItemHeader asChild>
          <h4>
            <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
          </h4>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="automobiles">
        <Accordion.ItemHeader asChild>
          <h4>
            <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
          </h4>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="aircrafts">
        <Accordion.ItemHeader asChild>
          <h4>
            <Accordion.ItemTrigger>Aircrafts</Accordion.ItemTrigger>
          </h4>
        </Accordion.ItemHeader>
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
      <Accordion.Item value="watercraft">
        <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="automobiles">
        <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="aircrafts">
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
      <Accordion.Item value="watercraft">
        <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="automobiles" disabled>
        <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="aircrafts">
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
    <Accordion multiple defaultValue={['automobiles', 'aircrafts']}>
      <Accordion.Item value="watercraft">
        <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="automobiles">
        <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="aircrafts">
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
  const [value, setValue] = useState(['automobiles', 'aircrafts'])

  return (
    <div>
      <CheckboxGroup
        orientation="horizontal"
        value={value}
        onCheckedChange={setValue}
        className="mb-lg"
      >
        <Checkbox value="watercraft">Watercraft</Checkbox>
        <Checkbox value="automobiles">Automobiles</Checkbox>
        <Checkbox value="aircrafts">Aircrafts</Checkbox>
      </CheckboxGroup>

      <Accordion multiple value={value} onValueChange={setValue}>
        <Accordion.Item value="watercraft">
          <Accordion.ItemTrigger>Watercraft</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item value="automobiles">
          <Accordion.ItemTrigger>Automobiles</Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item value="aircrafts">
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
