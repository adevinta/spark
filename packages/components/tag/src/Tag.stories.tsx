import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Tag } from '.'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
}

export default meta

type TagProps = ComponentProps<typeof Tag>

const intents: TagProps['intent'][] = [
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
const designs: TagProps['design'][] = ['filled', 'outlined', 'tinted']

export const Default: StoryFn = _args => <Tag>Default tag</Tag>

export const Design: StoryFn = _args => (
  <div className="flex flex-row gap-md">
    {designs.map(design => (
      <Tag key={design} design={design}>
        {design} tag
      </Tag>
    ))}
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="flex flex-col gap-md">
    {designs.map(design => (
      <div key={design} className="flex flex-row gap-md">
        {intents.map(intent => {
          if (design !== 'filled' && intent === 'surface') {
            return <span className="self-center text-small">N/A</span>
          }

          return (
            <Tag key={intent} design={design} intent={intent as any}>
              {intent} tag
            </Tag>
          )
        })}
      </div>
    ))}
  </div>
)

export const Icons: StoryFn = _args => (
  <div className="flex flex-wrap gap-md">
    <Tag>
      Button
      <Icon>
        <Check />
      </Icon>
    </Tag>
    <Tag>
      <Icon>
        <Check />
      </Icon>
      Button
    </Tag>
  </div>
)
