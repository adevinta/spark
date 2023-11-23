import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Select } from '.'

describe('Select', () => {
  it('should render', () => {
    const placeholder = '--Pick a job type--'
    const options = {
      '1': 'Full time job',
      '2': 'Part time job',
      '3': 'Internship',
    }

    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>

        <Select.Items>
          {Object.entries(options).map(([value, label]) => {
            return (
              <Select.Item key={value} value={value}>
                {label}
              </Select.Item>
            )
          })}
        </Select.Items>
      </Select>
    )

    const optionsLabels = [placeholder, ...Object.values(options)]

    optionsLabels.forEach(label => {
      expect(screen.getByText(label, { selector: 'option' })).toBeInTheDocument()
    })
  })
})
