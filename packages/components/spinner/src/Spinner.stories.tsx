import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { Spinner } from '.'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
}

export default meta

export const Default: StoryFn = _args => <Spinner />

const intents: ComponentProps<typeof Spinner>['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

export const Intents: StoryFn = _args => (
  <div className="flex items-center gap-md">
    <Spinner className="text-secondary" />

    {intents.map(intent => (
      <Spinner key={intent} intent={intent} />
    ))}
  </div>
)

const sizes: ComponentProps<typeof Spinner>['size'][] = ['small', 'medium']

export const Sizes: StoryFn = _args => (
  <div className="flex items-center gap-md">
    {sizes.map(size => (
      <Spinner key={size} size={size} />
    ))}
  </div>
)

export const Label: StoryFn = _args => <Spinner label="Loading" />

export const Background: StoryFn = _args => <Spinner isBackgroundVisible />
