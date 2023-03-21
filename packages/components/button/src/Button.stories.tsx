import { StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Button } from '.'

type ButtonProps = ComponentProps<typeof Button>

export const Default: StoryFn = args => <Button {...args}>Default button</Button>

const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg']
const intents: ButtonProps['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'danger',
  'neutral',
  'surface',
]
const designs: ButtonProps['design'][] = ['filled', 'outlined', 'tinted', 'ghost', 'contrast']
const shapes: ButtonProps['shape'][] = ['rounded', 'square', 'pill']

export const Sizes: StoryFn = args => (
  <div className="flex items-center gap-md">
    {sizes.map(size => {
      return (
        <Button size={size} {...args}>
          {size} button
        </Button>
      )
    })}
  </div>
)

export const Shapes: StoryFn = args => (
  <div className="flex items-center gap-md">
    {shapes.map(shape => {
      return (
        <Button shape={shape} {...args}>
          {shape} button
        </Button>
      )
    })}
  </div>
)

export const Disabled: StoryFn = args => (
  <Button disabled {...args}>
    Disabled button
  </Button>
)

export const Design: StoryFn = args => (
  <div className="flex flex-row gap-md">
    {designs.map(design => (
      <Button key={design} design={design} intent="primary" {...args}>
        {design} button
      </Button>
    ))}
  </div>
)

export const Intent: StoryFn = args => (
  <div className="flex flex-row gap-md">
    {intents.map(intent => (
      <Button key={intent} design="filled" intent={intent} {...args}>
        {intent} button
      </Button>
    ))}
  </div>
)
