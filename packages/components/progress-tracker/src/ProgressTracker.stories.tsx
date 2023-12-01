import { Meta, StoryFn } from '@storybook/react'

import { ProgressTracker } from '.'

const meta: Meta<typeof ProgressTracker> = {
  title: 'Experimental/ProgressTracker',
  component: ProgressTracker,
}

export default meta

export const Default: StoryFn = _args => (
  <ProgressTracker stepIndex={1} onStepClick={id => console.log('Clicked on', id)}>
    <ProgressTracker.Step label="Etape 1" />
    <ProgressTracker.Step label="Etape 2" />
    <ProgressTracker.Step label="Etape 3 azdazjodzaijdpzao jdaezpiod eza" />
  </ProgressTracker>
)
