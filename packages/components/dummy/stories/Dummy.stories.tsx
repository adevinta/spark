import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { Dummy } from '../src'

export const Default = () => (
  <ReactLiveBlock scope={{ Dummy }}>
    <Dummy type="foo" />
  </ReactLiveBlock>
)
