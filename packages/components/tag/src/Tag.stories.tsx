import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Tag } from '.'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['data-display'],
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
  <div className="gap-md flex flex-row">
    {designs.map(design => (
      <Tag key={design} design={design}>
        {design} tag
      </Tag>
    ))}
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-md flex flex-col">
    {designs.map(design => (
      <div key={design} className="gap-md flex flex-row">
        {intents.map(intent => {
          if (design !== 'filled' && intent === 'surface') {
            return (
              <span key={intent} className="text-small self-center">
                N/A
              </span>
            )
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
  <div className="gap-md flex flex-wrap">
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
