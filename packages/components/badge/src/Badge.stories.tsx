import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Button } from '@spark-ui/button'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Badge } from '.'

type BadgeProps = ComponentProps<typeof Badge>

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
}
const sizes: BadgeProps['size'][] = ['sm', 'md']
const intents: BadgeProps['intent'][] = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
  'surface',
]

const fakeAvatar = <div className="h-sz-40 w-sz-40 rounded-lg bg-outline" />

export const Default: StoryFn = _args => <Badge count={1}>{fakeAvatar}</Badge>

export const Intents: StoryFn = _args => (
  <div className="flex flex-wrap justify-evenly gap-md">
    {intents.map(intent => (
      <div>
        <StoryLabel className="mb-xl">{intent}</StoryLabel>
        <Badge key={intent} intent={intent} count={1}>
          {fakeAvatar}
        </Badge>
      </div>
    ))}
  </div>
)

export const Standalone: StoryFn = _args => (
  <Button design="tinted">
    Standalone <Badge count={100} aria-label="New notification" />
  </Button>
)

export const NoCount: StoryFn = _args => <Badge>{fakeAvatar}</Badge>

export const CountThreshold: StoryFn = _args => (
  <div className="flex gap-xl">
    <div>
      <StoryLabel className="mb-xl">Default threshold</StoryLabel>
      <Badge
        count={1000}
        aria-label={({ overflowCount }) => `More than ${overflowCount} notifications`}
      >
        {fakeAvatar}
      </Badge>
    </div>
    <div>
      <StoryLabel className="mb-xl">Custom threshold</StoryLabel>
      <Badge
        count={1000}
        overflowCount={999}
        aria-label={({ overflowCount }) => `More than ${overflowCount} notifications`}
      >
        {fakeAvatar}
      </Badge>
    </div>
  </div>
)

export const Sizes: StoryFn = _args => (
  <div className="flex flex-col gap-xl">
    {sizes.map(size => (
      <div className="flex gap-xl">
        <div>
          <StoryLabel className="mb-xl">{size}</StoryLabel>

          <Badge key={size} size={size}>
            {fakeAvatar}
          </Badge>
        </div>
        <div>
          <StoryLabel className="mb-xl">{size} (count)</StoryLabel>

          <Badge key={size} size={size} count={25}>
            {fakeAvatar}
          </Badge>
        </div>
      </div>
    ))}
  </div>
)

export default meta
