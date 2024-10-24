import { StoryLabel } from '@docs/helpers/StoryLabel'
import { RadioGroup } from '@spark-ui/radio-group'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Skeleton } from '.'
import { SkeletonGroupProps } from './SkeletonGroup'

const meta: Meta<typeof Skeleton> = {
  title: 'Experimental/Skeleton',
  component: Skeleton,
}

export default meta

export const Default: StoryFn = _args => (
  <Skeleton>
    <Skeleton.Rectangle height={128} />
  </Skeleton>
)

export const Size: StoryFn = _args => (
  <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
    <div>
      <Skeleton gap="xl">
        <Skeleton.Circle size={32} />
        <Skeleton.Circle size={64} />
        <Skeleton.Circle size={128} />
      </Skeleton>
    </div>

    <div>
      <Skeleton gap="xl">
        <Skeleton.Rectangle height={32} />
        <Skeleton.Rectangle height={64} />
        <Skeleton.Rectangle height={128} />
      </Skeleton>
    </div>

    <div>
      <Skeleton gap="xl">
        <Skeleton.Line />
        <Skeleton.Line lines={3} />
        <Skeleton.Line lines={6} />
      </Skeleton>
    </div>
  </div>
)

const gaps: ExcludeNull<SkeletonGroupProps['gap']>[] = ['sm', 'md', 'lg', 'xl', '2xl', '3xl']
export const Gap: StoryFn = _args => {
  return (
    <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
      {gaps.map(gap => (
        <div key={gap}>
          <StoryLabel>{gap}</StoryLabel>
          <Skeleton key={`skeleton_${gap}`}>
            <Skeleton.Line gap={gap} lines={3} />
          </Skeleton>
        </div>
      ))}
    </div>
  )
}

const alignments: ExcludeNull<SkeletonGroupProps['alignment']>[] = ['start', 'center', 'end']
export const Alignment: StoryFn = _args => (
  <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
    {alignments.map(alignment => (
      <div key={alignment}>
        <StoryLabel>{alignment}</StoryLabel>
        <Skeleton gap="lg">
          <Skeleton.Line gap="md" alignment={alignment} lines={3} />
        </Skeleton>
      </div>
    ))}
  </div>
)

export const Group: StoryFn = _args => {
  const [alignment, setAlignment] = useState<SkeletonGroupProps['alignment']>('start')

  return (
    <div>
      <RadioGroup
        className="mb-lg flex gap-md"
        value={alignment}
        orientation="horizontal"
        onValueChange={value => setAlignment(value as SkeletonGroupProps['alignment'])}
      >
        <RadioGroup.Radio value="start">Start</RadioGroup.Radio>
        <RadioGroup.Radio value="center">Center</RadioGroup.Radio>
        <RadioGroup.Radio value="end">End</RadioGroup.Radio>
      </RadioGroup>

      <div className="grid grid-cols-2 gap-xl">
        <div>
          <StoryLabel>with direction `row` (default)</StoryLabel>
          <Skeleton gap="lg">
            <Skeleton.Group gap="lg" alignment={alignment}>
              <Skeleton.Rectangle height={128} />
              <Skeleton.Rectangle height={48} />
              <Skeleton.Rectangle height={64} />
            </Skeleton.Group>
          </Skeleton>
        </div>

        <div>
          <StoryLabel>with direction `column`</StoryLabel>
          <Skeleton gap="lg">
            <Skeleton.Group gap="lg" direction="column" alignment={alignment}>
              <Skeleton.Rectangle height={32} width="90%" />
              <Skeleton.Rectangle height={32} width="75%" />
              <Skeleton.Rectangle height={32} />
            </Skeleton.Group>
          </Skeleton>
        </div>
      </div>

      <div className="mt-2xl">
        <StoryLabel>with specific gaps</StoryLabel>
        <Skeleton gap="xl">
          <Skeleton.Rectangle height={128} />

          <Skeleton.Group gap="xl">
            <Skeleton.Circle size={64} />

            <Skeleton.Line gap="md" lines={3} />
          </Skeleton.Group>
        </Skeleton>
      </div>
    </div>
  )
}

export const Animation: StoryFn = _args => (
  <div className="grid grid-cols-2 gap-xl">
    <div>
      <StoryLabel>with animation (default)</StoryLabel>

      <Skeleton gap="lg">
        <Skeleton.Rectangle height={128} />
      </Skeleton>
    </div>

    <div>
      <StoryLabel>without animation</StoryLabel>
      <Skeleton isAnimated={false} gap="lg">
        <Skeleton.Rectangle height={128} />
      </Skeleton>
    </div>
  </div>
)
