import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { Checkbox } from './Checkbox'

export const Default = ({ id = 'c1', ...rest }) => (
  <ReactLiveBlock scope={{ Checkbox }}>
    <div className="flex items-center gap-sm">
      <Checkbox id={id} {...rest} />
      <label
        htmlFor={id}
        className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-50"
      >
        Accept terms and conditions.
      </label>
    </div>
  </ReactLiveBlock>
)

export const Disabled = () => <Default id={'c2'} disabled={true} />

export const DefaultChecked = () => <Default id={'c3'} defaultChecked />
