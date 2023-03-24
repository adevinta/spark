import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { Portal } from '.'

export const Default = () => (
  <ReactLiveBlock scope={{ Portal }}>
    <Portal>Hello World!</Portal>
  </ReactLiveBlock>
)
