import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps, useState } from 'react'

import { Chip } from '.'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
}

type ChipProps = ComponentProps<typeof Chip>

const designs: ChipProps['design'][] = ['dashed', 'filled', 'outlined', 'tinted']
const intents: ChipProps['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
  'surface',
]

export default meta

export const Default: StoryFn = _args => <Chip>Hello World!</Chip>

const ToogleChip = ({ intent, children }) => {
  const [pressed, setPressed] = useState<undefined | boolean>()

  return (
    <Chip
      onClick={(_, { pressed }) => setPressed(!pressed)}
      intent={intent}
      pressed={pressed}
      design={pressed ? 'filled' : 'outlined'}
    >
      {children}
    </Chip>
  )
}

export const Interactions: StoryFn = _args => {
  return (
    <div className="gap-md flex flex-wrap">
      <ToogleChip>Hello World!</ToogleChip>
    </div>
  )
}

export const Design: StoryFn = _args => (
  <div className="gap-md flex flex-wrap">
    {designs.map(design => (
      <Chip key={design} design={design}>
        {design} chip
      </Chip>
    ))}
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-md flex flex-wrap">
    {intents.map(intent => (
      <Chip key={intent} intent={intent}>
        {intent} chip
      </Chip>
    ))}
  </div>
)
