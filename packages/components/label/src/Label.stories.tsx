import { Meta, StoryFn } from '@storybook/react'

import { Label, LabelProps } from '.'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="flex flex-col gap-md">
    <Label htmlFor="label-default">Title</Label>
    <input
      type="text"
      id="label-default"
      className="rounded-sm border-md border-neutral p-md outline-none"
    />
  </div>
)

const intents: LabelProps['intent'][] = ['neutral', 'success', 'alert', 'error']

export const Intent: StoryFn = _args => (
  <div className="flex flex-col gap-lg">
    {intents.map(intent => (
      <div className="flex flex-col gap-md" key={intent}>
        <Label className="capitalize" htmlFor={`label-${intent}`} intent={intent}>
          {intent}
        </Label>
        <input
          type="text"
          id={`label-${intent}`}
          className="rounded-sm border-md border-neutral p-md outline-none"
        />
      </div>
    ))}
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
      className="rounded-sm border-md border-neutral p-md outline-none"
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
      className="rounded-sm border-md border-neutral p-md outline-none"
      required
    />
  </div>
)
