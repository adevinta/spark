import { Meta, StoryFn } from '@storybook/react'

import { Label } from '.'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="gap-md flex flex-col">
    <Label htmlFor="name">First name</Label>
    <input
      type="text"
      id="name"
      placeholder="Jon Snow"
      className="p-md border-neutral active:border-primary border-md rounded-sm"
    />
  </div>
)
