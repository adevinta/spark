import { Icon } from '@spark-ui/icon'
import { LikeFill } from '@spark-ui/icons/dist/icons/LikeFill'
import { Radio, RadioGroup } from '@spark-ui/radio'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Badge } from '.'

type BadgeProps = ComponentProps<typeof Badge>

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
}
const sizes: BadgeProps['size'][] = ['sm', 'md']
const intents: BadgeProps['intent'][] = ['error', 'info']

const fakeAvatar = <div className="w-sz-40 h-sz-40 bg-outline rounded-lg" />

export const Default: StoryFn = _args => <Badge>{fakeAvatar}</Badge>
export const Standalone: StoryFn = _args => <Badge />
export const StandaloneWithCount: StoryFn = _args => <Badge count={1} />
export const StandaloneWithinAnotherElement: StoryFn = _args => (
  <RadioGroup>
    <Radio value="foo">
      Foo <Badge size="sm" count={3} />
    </Radio>
  </RadioGroup>
)
export const WrappingAnIcon: StoryFn = _args => (
  <Badge size="sm" count={3}>
    {/** TODO: Check the real behaviour with icons in order to avoid custom styles on them. **/}
    <Icon size="lg" className="mx-md">
      <LikeFill />
    </Icon>
  </Badge>
)
export const RegularCount: StoryFn = _args => <Badge count={1}>{fakeAvatar}</Badge>
export const LargeCount: StoryFn = _args => <Badge count={1000}>{fakeAvatar}</Badge>
export const LargeCustomCount: StoryFn = _args => (
  <Badge count={1000} overflowCount={999}>
    {fakeAvatar}
  </Badge>
)

export const Intents: StoryFn = _args => (
  <div className="gap-md flex flex-wrap">
    {intents.map(intent => (
      <Badge key={intent} intent={intent} count={1}>
        {fakeAvatar}
      </Badge>
    ))}
  </div>
)

export const Sizes: StoryFn = _args => (
  <div className="gap-md flex flex-wrap">
    {sizes.map(size => (
      <Badge key={size} size={size} count={25}>
        {fakeAvatar}
      </Badge>
    ))}
  </div>
)

export default meta
