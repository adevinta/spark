import { Icon } from '@spark-ui/icon'
import { LikeFill } from '@spark-ui/icons/dist/icons/LikeFill'
import { RadioGroup } from '@spark-ui/radio-group'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Badge } from '.'

type BadgeProps = ComponentProps<typeof Badge>

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
}
const sizes: BadgeProps['size'][] = ['sm', 'md']
const intents: BadgeProps['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
  'surface',
]

const fakeAvatar = <div className="h-sz-40 w-sz-40 rounded-lg bg-outline" />

export const Default: StoryFn = _args => <Badge>{fakeAvatar}</Badge>
export const Standalone: StoryFn = _args => <Badge aria-label="New notification" />
export const StandaloneWithCount: StoryFn = _args => <Badge count={1} />
export const StandaloneWithinAnotherElement: StoryFn = _args => (
  <RadioGroup>
    <RadioGroup.Radio value="foo">
      Foo <Badge size="sm" count={3} aria-label={({ count }) => `${count} notifications`} />
    </RadioGroup.Radio>
  </RadioGroup>
)
export const WrappingAnIcon: StoryFn = _args => (
  <Badge size="sm" count={3}>
    {/** TODO: Check the real behaviour with icons in order to avoid custom styles on them. **/}
    <Icon size="lg">
      <LikeFill />
    </Icon>
  </Badge>
)
export const RegularCount: StoryFn = _args => <Badge count={1}>{fakeAvatar}</Badge>
export const LargeCount: StoryFn = _args => (
  <Badge
    count={1000}
    aria-label={({ overflowCount }) => `More than ${overflowCount} notifications`}
  >
    {fakeAvatar}
  </Badge>
)
export const LargeCustomCount: StoryFn = _args => (
  <Badge count={1000} overflowCount={999}>
    {fakeAvatar}
  </Badge>
)

export const Intents: StoryFn = _args => (
  <div className="flex flex-wrap gap-md">
    {intents.map(intent => (
      <Badge key={intent} intent={intent} count={1}>
        {fakeAvatar}
      </Badge>
    ))}
  </div>
)

export const Sizes: StoryFn = _args => (
  <div className="flex flex-wrap gap-md">
    {sizes.map(size => (
      <Badge key={size} size={size} count={25}>
        {fakeAvatar}
      </Badge>
    ))}
  </div>
)

export default meta
