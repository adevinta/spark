import { FormField } from '@spark-ui/form-field'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => <Checkbox>Accept terms and conditions.</Checkbox>

export const HiddenLabel: StoryFn = _args => (
  <Checkbox>
    <VisuallyHidden>Toggle property</VisuallyHidden>
  </Checkbox>
)

export const Disabled: StoryFn = _args => <Checkbox disabled>Accept terms and conditions.</Checkbox>

export const UncontrolledState: StoryFn = _args => {
  const handleCheckedChange = (current: boolean, indeterminate?: boolean) => {
    console.log(current, indeterminate)
  }

  return (
    <div className="gap-lg flex flex-col">
      <Checkbox defaultChecked onCheckedChange={handleCheckedChange}>
        Soccer
      </Checkbox>

      <Checkbox defaultChecked="indeterminate" onCheckedChange={handleCheckedChange}>
        Tennis
      </Checkbox>

      <Checkbox defaultChecked={false} onCheckedChange={handleCheckedChange}>
        Baseball
      </Checkbox>
    </div>
  )
}

export const ControlledState: StoryFn = _args => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate')

  const handleCheckedChange = (current: boolean, indeterminate?: boolean) => {
    console.log(indeterminate)
    setChecked(current)
  }

  return (
    <div className="gap-lg flex flex-col">
      <Checkbox checked={checked} onCheckedChange={handleCheckedChange}>
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
        <Checkbox className="capitalize" key={color} intent={color}>
          {color}
        </Checkbox>
      )
    })}
  </>
)

export const Icon: StoryFn = _args => (
  <Checkbox defaultChecked icon={<Plus />}>
    Accept terms and conditions.
  </Checkbox>
)

export const Group: StoryFn = _args => {
  return (
    <CheckboxGroup>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupLabel: StoryFn = _args => {
  return (
    <FormField>
      <FormField.Label asChild>
        <span>Sports</span>
      </FormField.Label>

      <CheckboxGroup>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const GroupHiddenLabel: StoryFn = _args => {
  return (
    <FormField>
      <FormField.Label asChild>
        <VisuallyHidden>
          <span>Sports</span>
        </VisuallyHidden>
      </FormField.Label>

      <CheckboxGroup>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const GroupControlled: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  const handleChange = (current: string[]) => {
    setValue(current)
  }

  return (
    <FormField>
      <FormField.Label asChild>
        <span>Sports</span>
      </FormField.Label>

      <CheckboxGroup value={value} onChange={handleChange}>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const GroupUncontrolled: StoryFn = () => {
  const handleChange = (value: string[]) => {
    console.log(value)
  }

  return (
    <FormField>
      <FormField.Label asChild>
        <span>Sports</span>
      </FormField.Label>

      <CheckboxGroup defaultValue={['soccer', 'tennis']} onChange={handleChange}>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const GroupRequired: StoryFn = () => {
  return (
    <FormField isRequired>
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

export const GroupValidation: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  const handleChange = (current: string[]) => {
    setValue(current)
  }

  return (
    <FormField isInvalid={value.length === 0} isRequired>
      <FormField.Label asChild>
        <span>Sports</span>
      </FormField.Label>

      <CheckboxGroup value={value} onChange={handleChange}>
        <Checkbox value="soccer">Soccer</Checkbox>

        <Checkbox value="tennis">Tennis</Checkbox>

        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const GroupIndividualValidation: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  const handleChange = (current: string[]) => {
    setValue(current)
  }

  return (
    <FormField>
      <FormField.Label asChild>
        <span>Sports</span>
      </FormField.Label>

      <CheckboxGroup value={value} onChange={handleChange}>
        <FormField isInvalid={!value.includes('soccer')}>
          <Checkbox value="soccer">Soccer</Checkbox>
        </FormField>

        <FormField isInvalid={!value.includes('tennis')}>
          <Checkbox value="tennis">Tennis</Checkbox>
        </FormField>

        <FormField isInvalid={!value.includes('baseball')}>
          <Checkbox value="baseball">Baseball</Checkbox>
        </FormField>
      </CheckboxGroup>
    </FormField>
  )
}
