import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'
import { type ComponentProps } from 'react'

import { Button } from '.'

type ButtonProps = ComponentProps<typeof Button>

export const Default = () => (
  <ReactLiveBlock scope={{ Button }}>
    <Button>Default button</Button>
  </ReactLiveBlock>
)

const sizes: ButtonProps['size'][] = ['md', 'lg']
const intents: ButtonProps['intent'][] = ['primary', 'secondary']
const designs: ButtonProps['design'][] = ['filled', 'outlined', 'tinted', 'ghost']
const shapes: ButtonProps['shape'][] = ['rounded', 'square', 'pill']

export const Variants = () => (
  <ReactLiveBlock scope={{ Button }}>
    <div className="flex flex-col gap-md">
      {intents.map(intent => (
        <div className=" flex flex-col gap-md rounded-sm border-sm border-outline p-lg">
          <p className="text-headline-1 font-bold">{intent}</p>
          <div className="flex items-center gap-md">
            <p className="text-headline-2 font-bold">Sizes</p>
            {sizes.map(size => {
              return (
                <Button size={size} intent={intent}>
                  {size} button
                </Button>
              )
            })}
          </div>

          <div className="flex items-center gap-md">
            <p className="text-headline-2 font-bold">Design</p>
            {designs.map(design => {
              return (
                <Button design={design} intent={intent}>
                  {design} button
                </Button>
              )
            })}
          </div>

          <div className="flex items-center gap-md">
            <p className="text-headline-2 font-bold">Shape</p>
            {shapes.map(shape => {
              return (
                <Button shape={shape} intent={intent}>
                  {shape} button
                </Button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </ReactLiveBlock>
)
