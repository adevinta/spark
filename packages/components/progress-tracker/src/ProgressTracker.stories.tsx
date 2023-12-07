import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'

import { ProgressTracker, type ProgressTrackerProps } from '.'

const meta: Meta<typeof ProgressTracker> = {
  title: 'Experimental/ProgressTracker',
  component: ProgressTracker,
}

export default meta

const sizes: ProgressTrackerProps['size'][] = ['sm', 'md', 'lg']
const orientations: ProgressTrackerProps['orientation'][] = ['horizontal', 'vertical']

export const Default: StoryFn = _args => (
  <ProgressTracker stepIndex={1} onStepClick={id => console.log('Clicked on', id)}>
    <ProgressTracker.Step label="Build" />
    <ProgressTracker.Step label="Deploy" />
    <ProgressTracker.Step label="Iterate" />
  </ProgressTracker>
)

export const Disabled: StoryFn = _args => (
  <ProgressTracker stepIndex={1} onStepClick={id => console.log('Clicked on', id)}>
    <ProgressTracker.Step label="Build" />
    <ProgressTracker.Step label="Deploy" />
    <ProgressTracker.Step label="Iterate" disabled />
  </ProgressTracker>
)

export const Readonly: StoryFn = _args => (
  <ProgressTracker stepIndex={1} readOnly>
    <ProgressTracker.Step label="Build" />
    <ProgressTracker.Step label="Deploy" />
    <ProgressTracker.Step label="Iterate" />
  </ProgressTracker>
)

export const Size: StoryFn = _args => (
  <div className="flex flex-wrap items-center gap-lg">
    {sizes.map(size => (
      <div key={size}>
        <StoryLabel>{`${size}${size === 'lg' ? ' (default)' : ''}`}</StoryLabel>
        <ProgressTracker stepIndex={1} size={size as ProgressTrackerProps['size']}>
          <ProgressTracker.Step label="Build" />
          <ProgressTracker.Step label="Deploy" />
          <ProgressTracker.Step label="Iterate" />
        </ProgressTracker>
      </div>
    ))}
  </div>
)

export const Orientation: StoryFn = _args => (
  <div className="flex flex-wrap gap-lg">
    {orientations.map(orientation => (
      <div key={orientation}>
        <StoryLabel>{`${orientation}${
          orientation === 'horizontal' ? ' (default)' : ''
        }`}</StoryLabel>
        <ProgressTracker
          stepIndex={1}
          orientation={orientation as ProgressTrackerProps['orientation']}
          {...(orientation === 'vertical' && {
            className: 'w-[120px]',
          })}
        >
          <ProgressTracker.Step label="Build" />
          <ProgressTracker.Step label="Deploy with confidence" disabled />
          <ProgressTracker.Step label="Iterate again and again" disabled />
          <ProgressTracker.Step label="Repeat" />
        </ProgressTracker>
      </div>
    ))}
  </div>
)
