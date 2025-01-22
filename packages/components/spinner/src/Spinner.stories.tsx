import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { Spinner } from '.'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['indicators'],
}

export default meta

export const Default: StoryFn = _args => <Spinner />

const intents: ComponentProps<typeof Spinner>['intent'][] = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

export const Intents: StoryFn = _args => (
  <div className="flex gap-lg">
    {intents.map(intent => (
      <div key={intent} className="text-center">
        <StoryLabel>{intent}</StoryLabel>
        <Spinner intent={intent} />
      </div>
    ))}
  </div>
)

const sizes: ComponentProps<typeof Spinner>['size'][] = ['current', 'sm', 'md', 'full']

export const Sizes: StoryFn = _args => (
  <div className="flex gap-lg">
    {sizes.map(size => (
      <div key={size} className="text-center">
        <StoryLabel>{size}</StoryLabel>

        {size === 'full' ? (
          <div className="h-[90px] w-[90px]">
            <Spinner size={size} />
          </div>
        ) : (
          <Spinner size={size} />
        )}
      </div>
    ))}
  </div>
)

export const Label: StoryFn = _args => <Spinner label="Loading" />

export const Background: StoryFn = _args => <Spinner isBackgroundVisible />
