import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { Checkbox } from './Checkbox'

export const Default = () => (
  <ReactLiveBlock scope={{ Checkbox }}>
    <div className="flex items-center gap-sm">
      <Checkbox id={'c1'} />
      <label
        htmlFor={'c1'}
        className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
      >
        Accept terms and conditions.
      </label>
    </div>
  </ReactLiveBlock>
)

export const Disabled = () => (
  <ReactLiveBlock scope={{ Checkbox }}>
    <div className="flex items-center gap-sm">
      <Checkbox id={'c2'} disabled />
      <label
        htmlFor={'c2'}
        className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
      >
        Accept terms and conditions.
      </label>
    </div>
  </ReactLiveBlock>
)

export const DefaultChecked = () => (
  <ReactLiveBlock scope={{ Checkbox }}>
    <div className="flex items-center gap-sm">
      <Checkbox id={'c3'} defaultChecked />
      <label
        htmlFor={'c3'}
        className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
      >
        Accept terms and conditions.
      </label>
    </div>
  </ReactLiveBlock>
)
const colors = ['primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral']

export const Colors = () => (
  <ReactLiveBlock scope={{ Checkbox }}>
    {colors.map(color => {
      return (
        <div className="flex items-center gap-sm" key={color}>
          <Checkbox id={color} intent={color} />
          <label htmlFor={color}>{color}</label>
        </div>
      )
    })}
  </ReactLiveBlock>
)
