import { Meta, StoryFn } from '@storybook/react'

import { Label } from '.'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['indicators'],
}

export default meta

export const Default: StoryFn = _args => (
  <div className="flex flex-col gap-md">
    <Label htmlFor="label-default">Title</Label>
    <input
      type="text"
      id="label-default"
      placeholder="IPhone 14"
      className="rounded-sm border-md border-neutral p-md active:border-main"
    />
  </div>
)

export const Required: StoryFn = _args => (
  <div className="flex flex-col gap-md">
    <Label className="flex items-center gap-sm" htmlFor="label-required">
      Title
      <Label.RequiredIndicator />
    </Label>

    <input
      type="text"
      id="label-required"
      placeholder="IPhone 14"
      className="rounded-sm border-md border-neutral p-md active:border-main"
      required
    />
  </div>
)

export const RequiredIndicator: StoryFn = _args => (
  <div className="flex flex-col gap-md">
    <Label className="flex items-center gap-sm" htmlFor="label-indicator">
      Title
      <Label.RequiredIndicator>Required</Label.RequiredIndicator>
    </Label>

    <input
      type="text"
      id="label-indicator"
      placeholder="IPhone 14"
      className="rounded-sm border-md border-neutral p-md active:border-main"
      required
    />
  </div>
)
