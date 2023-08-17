/* eslint-disable max-lines */
import { Input } from '@spark-ui/input'
import { Label } from '@spark-ui/label'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Color } from './index'

const meta: Meta = {
  title: 'Utils/Colors',
}

export default meta

export const Default: StoryFn = _args => {
  const [value, setValue] = useState('#DDDDDD')
  const color = new Color(value)
  console.log(color)

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col">
        <Label htmlFor="value">value</Label>
        <Input name="value" value={value} onChange={event => setValue(event.target.value)} />
      </div>
      <div className="flex flex-row flex-nowrap">
        <span style={{ backgroundColor: color.to.hex }}>{color.to.hex}</span>
      </div>
    </div>
  )
}
