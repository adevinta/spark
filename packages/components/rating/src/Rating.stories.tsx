import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'

import { Rating, type RatingProps } from '.'

const meta: Meta<typeof Rating> = {
  title: 'Experimental/Rating',
  component: Rating,
}

export default meta

const sizes: RatingProps['size'][] = ['sm', 'md', 'lg']

export const Default: StoryFn = _args => <Rating defaultValue={3} aria-label="Rating control" />

export const Readonly: StoryFn = _args => (
  <Rating defaultValue={3.5} aria-label="Rating control with readOnly" readOnly />
)

export const Disabled: StoryFn = _args => (
  <Rating defaultValue={3} aria-label="Rating control disabled" disabled />
)

export const Size: StoryFn = _args => (
  <div className="flex flex-row flex-wrap gap-xl">
    {sizes.map(size => (
      <div key={size} className="">
        <StoryLabel>{`${size}${size === 'md' ? ' (default)' : ''}`}</StoryLabel>
        <Rating defaultValue={3} size={size} aria-label={`Rating control ${size}`} />
      </div>
    ))}
  </div>
)
