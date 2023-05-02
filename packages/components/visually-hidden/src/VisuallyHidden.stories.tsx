import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Meta, StoryFn } from '@storybook/react'

import { VisuallyHidden } from '.'

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
}

export default meta

export const Default: StoryFn = _args => (
  <button style={{ width: 24, height: 24 }}>
    <i className="text-on-surface">
      <Check />
    </i>
    <VisuallyHidden>Checkmark</VisuallyHidden>
  </button>
)
