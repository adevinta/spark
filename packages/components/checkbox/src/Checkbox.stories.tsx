import { FormField } from '@spark-ui/form-field'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => <Checkbox>Accept terms and conditions</Checkbox>

export const Disabled: StoryFn = _args => <Checkbox disabled>Accept terms and conditions</Checkbox>

export const Uncontrolled: StoryFn = () => {
  const handleCheckedChange = (current: boolean, indeterminate?: boolean) => {
    console.log(current, indeterminate)
  }

  return (
    <div className="gap-lg flex flex-col">
      <Checkbox defaultChecked onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [checked, setChecked] = useState(true)

  const handleCheckedChange = (current: boolean) => {
    setChecked(current)
  }

  return (
    <div className="gap-lg flex">
      <Checkbox checked={checked} onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>

      <Checkbox checked="indeterminate" onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>
    </div>
  )
}

const intent = ['primary', 'success', 'alert', 'error', 'info', 'neutral'] as const

export const Intent: StoryFn = _args => (
  <div className="gap-lg flex">
    {intent.map(color => {
      return (
        <Checkbox className="capitalize" key={color} intent={color}>
          {color}
        </Checkbox>
      )
    })}
  </div>
)

export const Icon: StoryFn = _args => (
  <div className="gap-lg flex flex-col">
    <Checkbox defaultChecked icon={<Close />}>
      Accept terms and conditions
    </Checkbox>
    <Checkbox checked="indeterminate" indeterminateIcon={<Plus />}>
      Accept terms and conditions
    </Checkbox>
  </div>
)

export const Group: StoryFn = _args => {
  return (
    <CheckboxGroup name="sport">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupControlled: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  const handleCheckedChange = (current: string[]) => {
    setValue(current)
  }

  return (
    <CheckboxGroup value={value} onCheckedChange={handleCheckedChange}>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupUncontrolled: StoryFn = () => {
  const handleCheckedChange = (value: string[]) => {
    console.log(value)
  }

  return (
    <CheckboxGroup defaultValue={['soccer', 'tennis']} onCheckedChange={handleCheckedChange}>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupOrientation: StoryFn = _args => {
  return (
    <CheckboxGroup orientation="horizontal" intent="neutral">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupIntent: StoryFn = _args => {
  return (
    <CheckboxGroup intent="neutral">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupImproved: StoryFn = () => {
  return (
    <FormField name="sport" isRequired>
      <FormField.Label asChild>
        <span>Sports</span>
      </FormField.Label>

      <CheckboxGroup>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>

      <FormField.ErrorMessage>The sport field is required.</FormField.ErrorMessage>
    </FormField>
  )
}
// export const GroupRequired: StoryFn = () => {
//   return (
//     <FormField name="sport" isRequired>
//       <FormField.Label asChild>
//         <span>Sports</span>
//       </FormField.Label>

//       <CheckboxGroup>
//         <Checkbox value="soccer">Soccer</Checkbox>
//         <Checkbox value="tennis">Tennis</Checkbox>
//         <Checkbox value="baseball">Baseball</Checkbox>
//       </CheckboxGroup>

//       <FormField.ErrorMessage>The sport field is required.</FormField.ErrorMessage>
//     </FormField>
//   )
// }

// export const GroupValidation: StoryFn = () => {
//   const [value, setValue] = useState<string[]>([])

//   const handleCheckedChange = (current: string[]) => {
//     setValue(current)
//   }

//   return (
//     <FormField name="sport" isInvalid={value.length === 0} isRequired>
//       <FormField.Label asChild>
//         <span>Sports</span>
//       </FormField.Label>

//       <CheckboxGroup value={value} onCheckedChange={handleCheckedChange}>
//         <Checkbox value="soccer">Soccer</Checkbox>

//         <Checkbox value="tennis">Tennis</Checkbox>

//         <Checkbox value="baseball">Baseball</Checkbox>
//       </CheckboxGroup>

//       <FormField.ErrorMessage>The sport field is required.</FormField.ErrorMessage>
//     </FormField>
//   )
// }
