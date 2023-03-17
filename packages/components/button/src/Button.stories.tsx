import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'
import { type ComponentProps } from 'react'

import { Button } from '.'

type ButtonProps = ComponentProps<typeof Button>

export const Default = () => (
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

export const Sizes = () => (
  <ReactLiveBlock scope={{ Button }}>
    <div className="flex items-center gap-md">
      {sizes.map(size => {
        return <Button size={size}>{size} button</Button>
      })}
    </div>
  </ReactLiveBlock>
)

export const Shapes = () => (
  <ReactLiveBlock scope={{ Button }}>
    <div className="flex items-center gap-md">
      {shapes.map(shape => {
        return <Button shape={shape}>{shape} button</Button>
      })}
    </div>
  </ReactLiveBlock>
)

export const Disabled = () => (
  <ReactLiveBlock scope={{ Button }}>
    <Button disabled>Disabled button</Button>
  </ReactLiveBlock>
)

export const Design = () => (
  <ReactLiveBlock scope={{ Button }}>
    <div className="flex flex-col gap-md">
      {designs.map(design => (
        <div key={design} className="flex flex-row gap-lg">
          <p className="text-headline-1 font-bold">{design}</p>
          {intents.map(intent => (
            <Button key={`${design}-${intent}`} design={design} intent={intent}>
              {intent}
            </Button>
          ))}
        </div>
      ))}
    </div>
  </ReactLiveBlock>
)

export const Variants = () => (
  <ReactLiveBlock scope={{ Button }}>
    <div className="flex flex-col gap-md">
      {intents.map(intent => (
        <div className=" flex flex-col gap-md rounded-sm border-outline p-lg shadow-md">
          <div className="flex flex-col gap-lg">
            <p className="text-headline-1 font-bold">{intent}</p>
            {designs.map(design => {
              return (
                <div className="flex items-center gap-md">
                  <Button design={design} intent={intent}>
                    {design}
                  </Button>
                  <Button design={design} intent={intent} disabled>
                    {design} (disabled)
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </ReactLiveBlock>
)
