import { Dropdown } from '@spark-ui/dropdown'
import { FormField, FormFieldProps } from '@spark-ui/form-field'
import React from 'react'

interface DropdownMultipleFieldProps extends FormFieldProps {
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
}

export const DropdownMultipleField = ({
  name = 'hobbies',
  defaultValue,
  value,
  onValueChange,
  ...fieldProps
}: DropdownMultipleFieldProps) => {
  return (
    <FormField name={name} {...fieldProps}>
      <FormField.Label>Hobbies</FormField.Label>

      <Dropdown multiple value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        <Dropdown.Trigger>
          <Dropdown.Value placeholder="What are your hobbies?" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="cooking" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>Cooking</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="gaming" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>Gaming</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="reading" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>Reading</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="sport" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>Sport</Dropdown.ItemText>
            </Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>

      <FormField.ErrorMessage>This field is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
