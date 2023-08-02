import { Checkbox } from '@spark-ui/checkbox'
import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { FavoriteOutline } from '@spark-ui/icons/dist/icons/FavoriteOutline'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps, useState } from 'react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

type ButtonProps = ComponentProps<typeof Button>

const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg']
const intents: ButtonProps['intent'][] = [
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
const designs: ButtonProps['design'][] = ['filled', 'outlined', 'tinted', 'ghost', 'contrast']
const shapes: ButtonProps['shape'][] = ['rounded', 'square', 'pill']

export const Default: StoryFn = _args => <Button>Default button</Button>

export const Sizes: StoryFn = _args => (
  <div className="flex flex-wrap items-center gap-md">
    {sizes.map(size => {
      return (
        <Button key={size} size={size}>
          Button {size}
        </Button>
      )
    })}
  </div>
)

export const Shapes: StoryFn = _args => (
  <div className="flex flex-wrap items-center gap-md">
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
  <div className="flex flex-wrap gap-md">
    {designs.map(design => (
      <Button key={design} design={design}>
        {design} button
      </Button>
    ))}
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="flex flex-wrap gap-md">
    {intents.map(intent => (
      <Button key={intent} intent={intent}>
        {intent} button
      </Button>
    ))}
  </div>
)

export const Icons: StoryFn = _args => (
  <div className="flex flex-wrap gap-md">
    <Button>
      Button
      <Icon>
        <FavoriteOutline />
      </Icon>
    </Button>
    <Button>
      <Icon>
        <FavoriteOutline />
      </Icon>
      Button
    </Button>
    <Button>
      <Icon>
        <FavoriteOutline />
      </Icon>
      Button
      <Icon>
        <Check />
      </Icon>
    </Button>
  </div>
)

export const Loading: StoryFn = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="flex flex-col items-start gap-lg">
      <Checkbox checked={isLoading} onClick={() => setIsLoading(!isLoading)}>
        Toggle loading state
      </Checkbox>

      <Button isLoading={isLoading} loadingLabel="Loading...">
        <Icon>
          <FavoriteOutline />
        </Icon>
        Button (width is preserved)
      </Button>
    </div>
  )
}

export const LoadingWithText: StoryFn = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="flex flex-col items-start gap-lg">
      <Checkbox checked={isLoading} onClick={() => setIsLoading(!isLoading)}>
        Toggle loading state
      </Checkbox>

      <Button isLoading={isLoading} loadingText="Loading...">
        <Icon>
          <FavoriteOutline />
        </Icon>
        Button with long text
      </Button>

      <Button
        isLoading={isLoading}
        loadingText="Loading (spinner to the right)..."
        spinnerPlacement="right"
      >
        <Icon>
          <FavoriteOutline />
        </Icon>
        Button with long text
      </Button>
    </div>
  )
}

export const Link: StoryFn = _args => (
  <div className="flex flex-wrap gap-md">
    <Button asChild>
      <a href="/">Button as a link</a>
    </Button>
  </div>
)
