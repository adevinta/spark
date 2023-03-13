import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { Switch } from '.'

export const Default = () => (
  <ReactLiveBlock scope={{ Switch }}>
    <div>
      <label htmlFor="switch">Switch</label>
      <Switch name="switch" />
    </div>
  </ReactLiveBlock>
)

export const Sizes = () => (
  <ReactLiveBlock scope={{ Switch }}>
    <div>
      <label htmlFor="small">Small switch</label>
      <Switch name="small" size="small" />
    </div>

    <div>
      <label htmlFor="medium">Medium switch</label>
      <Switch name="medium" size="medium" />
    </div>

    <div>
      <label htmlFor="large">Large switch</label>
      <Switch name="large" size="large" />
    </div>
  </ReactLiveBlock>
)

export const Disabled = () => (
  <ReactLiveBlock scope={{ Switch }}>
    <div>
      <label htmlFor="disabled">Disabled switch</label>
      <Switch name="disabled" disabled />
    </div>
  </ReactLiveBlock>
)

export const Colors = () => (
  <ReactLiveBlock scope={{ Switch }}>
    <div>
      <label htmlFor="primary">TODO (switch colors)</label>
      <Switch name="primary" />
    </div>
  </ReactLiveBlock>
)
