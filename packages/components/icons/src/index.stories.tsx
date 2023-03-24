import { Meta, StoryFn } from '@storybook/react'

import * as Icons from './index'

const meta: Meta = {
  title: 'components/Icons',
  component: Object.entries(Icons)[0][1],
}

export default meta

// console.log(JSON.stringify(Object.entries(Icons)))

export const Default: StoryFn = _args => (
  <div className="flex items-center gap-sm">
    {Object.entries(Icons).map(([name, Value]) => {
      return (
        <div className="flex flex-col items-center gap-sm">
          <i
            key={name}
            aria-label={name}
            className="text-on-surface"
            style={{ width: 24, height: 24 }}
          >
            <Value />
          </i>
          {name}
        </div>
      )
    })}
  </div>
)
