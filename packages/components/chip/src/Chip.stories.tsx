import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { Chip } from '.'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
}

type ChipProps = ComponentProps<typeof Chip>

const designs: ChipProps['design'][] = ['outlined', 'filled', 'dashed', 'tinted']

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

export const Default: StoryFn = _args => (
  <Chip>
    Hello World!
    <Chip.ClearButton onClick={() => console.log('clear')} />
  </Chip>
)

export const Intent: StoryFn = _args => (
  <div className="flex flex-col flex-wrap gap-md">
    Default
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip design={design} key={`${design}-${intent}`} intent={intent}>
            {intent} chip
          </Chip>
        ))}
      </div>
    ))}
    Actionable
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip
            design={design}
            key={`${design}-${intent}`}
            intent={intent}
            onClick={() => console.log(`click ${design} ${intent}`)}
          >
            {intent} chip
          </Chip>
        ))}
      </div>
    ))}
  </div>
)
