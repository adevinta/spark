import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

type ButtonProps = ComponentProps<typeof Button>

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

export const Default: StoryFn = _args => <Button>Default button</Button>

export const Sizes: StoryFn = _args => (
  <div className="gap-md flex items-center">
    {sizes.map(size => {
      return (
        <Button key={size} size={size}>
          {size} button
        </Button>
      )
    })}
  </div>
)

export const Shapes: StoryFn = _args => (
  <div className="gap-md flex items-center">
    {shapes.map(shape => {
      return (
        <Button key={shape} shape={shape}>
          {shape} button
        </Button>
      )
    })}
  </div>
)

export const Disabled: StoryFn = _args => <Button disabled>Disabled button</Button>

export const Design: StoryFn = _args => (
  <div className="gap-md flex flex-row">
    {designs.map(design => (
      <Button key={design} design={design}>
        {design} button
      </Button>
    ))}
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-md flex flex-row">
    {intents.map(intent => (
      <Button key={intent} intent={intent}>
        {intent} button
      </Button>
    ))}
  </div>
)

export const Link: StoryFn = _args => (
  <div className="gap-md flex flex-row">
    <Button asChild>
      <a href="/">button</a>
    </Button>
  </div>
)
