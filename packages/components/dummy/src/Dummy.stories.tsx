import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'
import { ComponentMeta } from '@storybook/react'

import { Dummy } from '.'

export const Default = () => (
  <ReactLiveBlock scope={{ Dummy }}>
    <Dummy type="foo" />
  </ReactLiveBlock>
)

export default {
  title: 'Dummy',
  component: Default,
} as ComponentMeta<typeof Dummy>
