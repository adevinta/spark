import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'
import { StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Button } from '.'

type ButtonProps = ComponentProps<typeof Button>

export const Default: StoryFn = () => (
  <ReactLiveBlock scope={{ Button }}>
    <Button>Default button</Button>
  </ReactLiveBlock>
)

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

export const Sizes: StoryFn = () => (
  <div className="flex items-center gap-md">
    {sizes.map(size => {
      return <Button size={size}>{size} button</Button>
    })}
  </div>
)

export const Shapes: StoryFn = () => (
  <div className="flex items-center gap-md">
    {shapes.map(shape => {
      return <Button shape={shape}>{shape} button</Button>
    })}
  </div>
)

export const Disabled: StoryFn = () => <Button disabled>Disabled button</Button>

export const Design: StoryFn = () => (
  <div className="flex flex-row gap-md">
    {designs.map(design => (
      <Button key={design} design={design} intent="primary">
        {design} button
      </Button>
    ))}
  </div>
)

export const Intent: StoryFn = () => (
  <div className="flex flex-row gap-md">
    {intents.map(intent => (
      <Button key={intent} design="filled" intent={intent}>
        {intent} button
      </Button>
    ))}
  </div>
)
