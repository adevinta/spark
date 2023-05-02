import { Button } from '@spark-ui/button'
import { Radio, RadioGroup } from '@spark-ui/radio'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => <Checkbox id={'c1'}>Accept terms and conditions.</Checkbox>

export const Disabled: StoryFn = _args => <Checkbox disabled>Accept terms and conditions.</Checkbox>

export const UncontrolledState: StoryFn = _args => {
  const [index, setIndex] = useState<number>(0)
  const handleReset = () => {
    setIndex(index + 1)
  }

  return (
    <div className="gap-lg flex flex-col" key={index}>
      <div className="gap-lg flex flex-row">
        <Button onClick={handleReset}>reset</Button>
      </div>
      <Checkbox defaultChecked>Accept terms and conditions.</Checkbox>
      <Checkbox defaultChecked="indeterminate">Accept terms and conditions.</Checkbox>
      <Checkbox defaultChecked={false}>Accept terms and conditions.</Checkbox>
    </div>
  )
}

export const ControlledState: StoryFn = _args => {
  const [index, setIndex] = useState<number>(0)
  const [checked, setChecked] = useState<boolean | 'indeterminate' | undefined>()
  const handleReset = () => {
    setIndex(index + 1)
    setChecked(undefined)
  }
  const handleChange = (value: string) => {
    if (value === 'undefined') {
      setChecked(undefined)
    } else if (value === 'true') {
      setChecked(true)
    } else if (value === 'indeterminate') {
      setChecked('indeterminate')
    } else {
      setChecked(false)
    }
  }

  return (
    <div className="gap-lg flex flex-col">
      <div className="gap-lg flex flex-row">
        <Button onClick={handleReset} disabled={checked === undefined}>
          reset
        </Button>
        <RadioGroup onValueChange={handleChange} value={`${checked}`}>
          <Radio value="undefined">undefined (uncontrolled – state-full)</Radio>
          <Radio value="true">checked</Radio>
          <Radio value="indeterminate">indeterminate</Radio>
          <Radio value="false">unchecked</Radio>
        </RadioGroup>
      </div>
      <Checkbox
        key={index}
        checked={checked}
        onCheckedChange={(checked, indeterminate) =>
          setChecked(indeterminate ? 'indeterminate' : checked)
        }
      >
        Accept terms and conditions.
      </Checkbox>
    </div>
  )
}

const intent = ['primary', 'success', 'alert', 'error', 'info', 'neutral'] as const

export const Intent: StoryFn = _args => (
  <>
    {intent.map(color => {
      return (
        <Checkbox key={color} intent={color}>
          {color}
        </Checkbox>
      )
    })}
  </>
)
export const Icon: StoryFn = _args => (
  <Checkbox
    defaultChecked
    icon={
      <svg viewBox="0 0 200 200" fill="currentColor">
        <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
      </svg>
    }
  >
    Accept terms and conditions.
  </Checkbox>
)
