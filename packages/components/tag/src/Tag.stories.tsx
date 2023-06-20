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
  'primary',
  'secondary',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
]
const designs: TagProps['design'][] = ['filled', 'outlined', 'tinted']
const shapes: TagProps['shape'][] = ['rounded', 'square', 'pill']

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
  <div className="gap-md flex flex-row">
    {intents.map(intent => (
      <Tag key={intent} intent={intent}>
        {intent} tag
      </Tag>
    ))}
  </div>
)

export const Shapes: StoryFn = _args => (
  <div className="gap-md flex items-center">
    {shapes.map(shape => {
      return (
        <Tag key={shape} shape={shape}>
          {shape} tag
        </Tag>
      )
    })}
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
