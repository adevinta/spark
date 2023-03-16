import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { Checkbox } from '.'

export const Default = () => (
  <ReactLiveBlock scope={{ Checkbox }}>
    <div className="flex items-center gap-sm">
      <Checkbox id="c1" />
      <label htmlFor="c1">Accept terms and conditions.</label>
    </div>
  </ReactLiveBlock>
)
