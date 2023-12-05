import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'

import { ProgressTracker, type ProgressTrackerProps } from '.'

const meta: Meta<typeof ProgressTracker> = {
  title: 'Experimental/ProgressTracker',
  component: ProgressTracker,
}

export default meta

const sizes: ProgressTrackerProps['size'][] = ['sm', 'md', 'lg']

export const Default: StoryFn = _args => (
  <ProgressTracker stepIndex={1} onStepClick={id => console.log('Clicked on', id)}>
    <ProgressTracker.Step label="Etape 1" />
    <ProgressTracker.Step label="Etape 2" />
    <ProgressTracker.Step label="Etape 3" />
  </ProgressTracker>
)

export const Size: StoryFn = _args => (
  <div className="flex flex-wrap items-center gap-md">
    {sizes.map(size => (
      <div key={size}>
        <StoryLabel>{`${size}${size === 'lg' ? ' (default)' : ''}`}</StoryLabel>
        <ProgressTracker size={size as ProgressTrackerProps['size']}>
          <ProgressTracker.Step label="Etape 1" />
          <ProgressTracker.Step label="Etape 2" />
          <ProgressTracker.Step label="Etape 3" />
        </ProgressTracker>
      </div>
    ))}
  </div>
)
