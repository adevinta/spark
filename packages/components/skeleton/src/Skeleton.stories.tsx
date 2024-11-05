import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'

import { Skeleton } from '.'

const meta: Meta<typeof Skeleton> = {
  title: 'Experimental/Skeleton',
  component: Skeleton,
}

export default meta

export const Default: StoryFn = _args => (
  <Skeleton label="Loading...">
    <Skeleton.Rectangle height={128} />
  </Skeleton>
)

export const CircleSize: StoryFn = _args => (
  <Skeleton label="Loading...">
    <Skeleton.Circle size={128} />
  </Skeleton>
)

export const RectangleSize: StoryFn = _args => (
  <Skeleton label="Loading...">
    <Skeleton.Rectangle width="50%" height={64} />
  </Skeleton>
)

export const LineSize: StoryFn = _args => (
  <Skeleton label="Loading...">
    <Skeleton.Line lines={5} gap="md" />
  </Skeleton>
)

export const Animation: StoryFn = _args => (
  <div className="grid grid-cols-2 gap-xl">
    <div>
      <StoryLabel>with animation (default)</StoryLabel>

      <Skeleton label="Loading..." className="gap-lg">
        <Skeleton.Rectangle height={128} />
      </Skeleton>
    </div>

    <div>
      <StoryLabel>without animation</StoryLabel>
      <Skeleton label="Loading..." isAnimated={false} className="gap-lg">
        <Skeleton.Rectangle height={128} />
      </Skeleton>
    </div>
  </div>
)

export const Layout: StoryFn = _args => (
  <Skeleton label="Loading..." className="flex flex-col gap-xl">
    <div className="flex w-1/2 gap-lg">
      <Skeleton.Circle size={40} />
      <Skeleton.Line lines={2} />
    </div>

    <Skeleton.Rectangle height={64} />

    <Skeleton.Line lines={5} />
  </Skeleton>
)
