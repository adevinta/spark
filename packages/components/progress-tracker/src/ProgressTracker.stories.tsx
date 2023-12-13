import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Icon } from '@spark-ui/icon'
import { BookmarkFill } from '@spark-ui/icons/dist/icons/BookmarkFill'
import { Meta, StoryFn } from '@storybook/react'

import { ProgressTracker, type ProgressTrackerProps } from '.'
import { ProgressTrackerStepIndicator } from './ProgressTrackerStepIndicator'

const meta: Meta<typeof ProgressTracker> = {
  title: 'Experimental/ProgressTracker',
  component: ProgressTracker,
}

export default meta

const sizes: ProgressTrackerProps['size'][] = ['sm', 'md', 'lg']
const orientations: ProgressTrackerProps['orientation'][] = ['horizontal', 'vertical']

export const Default: StoryFn = _args => (
  <div className="flex flex-wrap items-center gap-2xl">
    <ProgressTracker stepIndex={1} onStepClick={id => console.log('Clicked on', id)}>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator />
        <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator />
        <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator />
        <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
    </ProgressTracker>

    <ProgressTracker stepIndex={1}>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator
          complete={
            <Icon>
              <BookmarkFill />
            </Icon>
          }
          incomplete="A"
        />
        <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator incomplete="B" />
        <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator incomplete="C" />
        <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
    </ProgressTracker>

    <ProgressTracker stepIndex={1}>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator incomplete={null} />
        <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator incomplete={null} />
        <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
      <ProgressTracker.Step>
        <ProgressTrackerStepIndicator incomplete={null} />
        <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
      </ProgressTracker.Step>
    </ProgressTracker>
  </div>
)

export const Disabled: StoryFn = _args => (
  <ProgressTracker stepIndex={1} onStepClick={id => console.log('Clicked on', id)}>
    <ProgressTracker.Step>
      <ProgressTrackerStepIndicator />
      <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
    </ProgressTracker.Step>
    <ProgressTracker.Step>
      <ProgressTrackerStepIndicator />
      <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
    </ProgressTracker.Step>
    <ProgressTracker.Step disabled>
      <ProgressTrackerStepIndicator />
      <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
    </ProgressTracker.Step>
  </ProgressTracker>
)

export const Readonly: StoryFn = _args => (
  <ProgressTracker stepIndex={1} readOnly>
    <ProgressTracker.Step aria-label="Build" />
    <ProgressTracker.Step aria-label="Deploy" />
    <ProgressTracker.Step aria-label="Iterate" />
  </ProgressTracker>
)

export const Size: StoryFn = _args => (
  <div className="flex flex-wrap items-center gap-2xl">
    {sizes.map(size => (
      <div key={size}>
        <StoryLabel>{`${size}${size === 'lg' ? ' (default)' : ''}`}</StoryLabel>
        <ProgressTracker stepIndex={1} size={size as ProgressTrackerProps['size']}>
          <ProgressTracker.Step>
            <ProgressTrackerStepIndicator />
            <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
          </ProgressTracker.Step>
          <ProgressTracker.Step>
            <ProgressTrackerStepIndicator />
            <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
          </ProgressTracker.Step>
          <ProgressTracker.Step>
            <ProgressTrackerStepIndicator />
            <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
          </ProgressTracker.Step>
        </ProgressTracker>
      </div>
    ))}
  </div>
)

export const Orientation: StoryFn = _args => (
  <div className="flex flex-wrap gap-2xl">
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
          <ProgressTracker.Step>
            <ProgressTrackerStepIndicator />
            <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
          </ProgressTracker.Step>
          <ProgressTracker.Step>
            <ProgressTrackerStepIndicator />
            <ProgressTracker.StepLabel>Deploy with confidence</ProgressTracker.StepLabel>
          </ProgressTracker.Step>
          <ProgressTracker.Step>
            <ProgressTrackerStepIndicator />
            <ProgressTracker.StepLabel>Iterate again and again</ProgressTracker.StepLabel>
          </ProgressTracker.Step>
          <ProgressTracker.Step>
            <ProgressTrackerStepIndicator />
            <ProgressTracker.StepLabel>Repeat</ProgressTracker.StepLabel>
          </ProgressTracker.Step>
        </ProgressTracker>
      </div>
    ))}
  </div>
)
