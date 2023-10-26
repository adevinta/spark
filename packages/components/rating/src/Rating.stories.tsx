import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Rating } from '.'

const meta: Meta<typeof Rating> = {
  title: 'Experimental/Rating',
  component: Rating,
}

type RatingProps = ComponentProps<typeof Rating>

export default meta

export const Default: StoryFn = _args => (
  <div className="w-fit">
    <Rating defaultValue={2.5} />
  </div>
)

export const ReadOnly: StoryFn = _args => (
  <div className="w-fit">
    <Rating readOnly defaultValue={2.5} />
  </div>
)

export const Disabled: StoryFn = _args => (
  <div className="w-fit">
    <Rating disabled defaultValue={2.5} />
  </div>
)

const sizes: RatingProps['size'][] = ['sm', 'md', 'lg']
export const Sizes: StoryFn = _args => (
  <div className="flex flex-col flex-wrap items-start gap-md">
    {sizes.map(size => {
      return (
        <div key={size} className="w-fit">
          <Rating size={size} defaultValue={2.5} />
        </div>
      )
    })}
  </div>
)
