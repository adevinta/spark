import { StoryLabel } from '@docs/helpers/StoryLabel'
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
  <div className="gap-lg flex">
    {intents.map(intent => (
      <div key={intent} className="text-center">
        <StoryLabel>{intent}</StoryLabel>
        <Spinner intent={intent} />
      </div>
    ))}
  </div>
)

const sizes: ComponentProps<typeof Spinner>['size'][] = ['sm', 'md']

export const Sizes: StoryFn = _args => (
  <div className="gap-lg flex">
    {sizes.map(size => (
      <div key={size} className="text-center">
        <StoryLabel>{size}</StoryLabel>
        <Spinner size={size} />
      </div>
    ))}
  </div>
)

export const Label: StoryFn = _args => <Spinner label="Loading" />

export const Background: StoryFn = _args => <Spinner isBackgroundVisible />
