import { Job } from '@spark-ui/icons/dist/icons/Job'
import { Meta, StoryFn } from '@storybook/react'

import { Select } from '.'

const meta: Meta<typeof Select> = {
  title: 'Experimental/Select',
  component: Select,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="w-sz-480 bg-success p-xl">
    <Select value="Full time job" placeholder="--Pick a job type--">
      <Select.Trigger>
        <Select.LeadingIcon>
          <Job />
        </Select.LeadingIcon>
      </Select.Trigger>

      <Select.Items>
        <Select.Item>Full time job</Select.Item>
        <Select.Item>Part time job</Select.Item>
        <Select.Item>Internship</Select.Item>
      </Select.Items>
    </Select>
  </div>
)
