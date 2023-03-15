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
const design: ButtonProps['design'][] = ['filled', 'outlined', 'tinted', 'ghost']

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
                  Button ({size})
                </Button>
              )
            })}
          </div>

          <div className="flex items-center gap-md">
            <p className="text-headline-2 font-bold">Design</p>
            {design.map(size => {
              return (
                <Button design={size} intent={intent}>
                  Button ({size})
                </Button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </ReactLiveBlock>
)
