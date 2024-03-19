/* eslint-disable max-lines */
// import { Button } from '@spark-ui/button'
import { Button } from '@spark-ui/button'
import { Checkbox, CheckboxGroup } from '@spark-ui/checkbox'
import { Chip } from '@spark-ui/chip'
import { Dialog } from '@spark-ui/dialog'
import { FormField } from '@spark-ui/form-field'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { RadioGroup } from '@spark-ui/radio-group'
import { Switch } from '@spark-ui/switch'
import { Tag } from '@spark-ui/tag'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import React, { ComponentProps, useState } from 'react'

import { Combobox } from '.'

const meta: Meta<typeof Combobox> = {
  title: 'Experimental/Combobox',
  component: Combobox,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState<string | undefined>('book-2')
  const [open, setOpen] = useState(true)

  return (
    <div className="flex flex-wrap gap-lg pb-[300px]">
      <div className="flex flex-col gap-lg">
        <FormField>
          <FormField.Label className="font-bold">Opened state:</FormField.Label>
          <Switch checked={open} onCheckedChange={setOpen}>
            {open ? 'Opened' : 'Closed'}
          </Switch>
        </FormField>
        <FormField>
          <FormField.Label className="font-bold">Selected item:</FormField.Label>
          <RadioGroup value={value || ''} onValueChange={setValue}>
            <RadioGroup.Radio value="book-1">To Kill a Mockingbird</RadioGroup.Radio>
            <RadioGroup.Radio value="book-2">War and Peace</RadioGroup.Radio>
            <RadioGroup.Radio value="book-3">The Idiot</RadioGroup.Radio>
            <RadioGroup.Radio value="book-4">A Picture of Dorian Gray</RadioGroup.Radio>
            <RadioGroup.Radio value="book-5">1984</RadioGroup.Radio>
            <RadioGroup.Radio value="book-6">Pride and Prejudice</RadioGroup.Radio>
          </RadioGroup>
        </FormField>
      </div>

      <Combobox
        open={open}
        onOpenChange={setOpen}
        value={value}
        onValueChange={setValue}
        autoFilter={false}
      >
        <Combobox.Trigger className="grow">
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const CustomItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1" className="flex items-center gap-md">
              <Combobox.ItemText>To Kill a Mockingbird</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-2" className="flex items-center gap-md">
              <Combobox.ItemText>War and Peace</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-3" className="flex items-center gap-md">
              <Combobox.ItemText>The Idiot</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-4" className="flex items-center gap-md">
              <Combobox.ItemText>A Picture of Dorian Gray</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-5" className="flex items-center gap-md">
              <Combobox.ItemText>1984</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
            <Combobox.Item value="book-6" className="flex items-center gap-md">
              <Combobox.ItemText>Pride and Prejudice</Combobox.ItemText>
              <Tag>New</Tag>
            </Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const CustomValueEntry: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox allowCustomValue>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Disabled: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox disabled defaultValue="book-1">
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

// export const FilteringManual: StoryFn = () => {
//   const items = {
//     'book-1': 'To Kill a Mockingbird',
//     'book-2': 'War and Peace',
//     'book-3': 'The Idiot',
//     'book-4': 'A Picture of Dorian Gray',
//     'book-5': '1984',
//     'book-6': 'Pride and Prejudice',
//   }
//   const [inputValue, setInputValue] = useState('')

//   return (
//     <div className="pb-[300px]">
//       <Combobox autoFilter={false}>
//         <Combobox.Trigger>
//           <Combobox.Input
//             aria-label="Book"
//             placeholder="Pick a book"
//             value={inputValue}
//             onValueChange={setInputValue}
//           />
//         </Combobox.Trigger>

//         <Combobox.Popover>
//           <Combobox.Items>
//             <Combobox.Empty>No results found</Combobox.Empty>
//             {Object.entries(items).map(([value, text]) => {
//               if (!text.includes(inputValue)) return null

//               return (
//                 <Combobox.Item value={value} key={value}>
//                   {text}
//                 </Combobox.Item>
//               )
//             })}
//           </Combobox.Items>
//         </Combobox.Popover>
//       </Combobox>
//     </div>
//   )
// }

export const ReadOnly: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox readOnly defaultValue="book-1">
        <Combobox.Trigger aria-label="Book">
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const DisabledItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3" disabled>
              The Idiot
            </Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Grouped: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>
        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Group>
              <Combobox.Label>Best-sellers</Combobox.Label>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            </Combobox.Group>

            <Combobox.Divider />

            <Combobox.Group>
              <Combobox.Label>Novelties</Combobox.Label>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Group>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const LeadingIcon: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox>
        <Combobox.Trigger>
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

// ClearIcon

export const ItemIndicator: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox multiple defaultValue={['book-1', 'book-2']}>
        <Combobox.Trigger aria-label="Book">
          <Combobox.SelectedItems />
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>To Kill a Mockingbird</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-2" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>War and Peace</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-3" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>The Idiot</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-4" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>A Picture of Dorian Gray</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-5" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>1984</Combobox.ItemText>
            </Combobox.Item>
            <Combobox.Item value="book-6" className="flex items-center gap-md">
              <Combobox.ItemIndicator />
              <Combobox.ItemText>Pride and Prejudice</Combobox.ItemText>
            </Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const Statuses: StoryFn = () => {
  type Status = ComponentProps<typeof Combobox>['state']

  const statuses: Status[] = ['error', 'alert', 'success']

  return (
    <div className="flex flex-col gap-lg pb-[300px]">
      {statuses.map(status => {
        return (
          <Combobox state={status}>
            <Combobox.Trigger aria-label="Book">
              <Combobox.Input aria-label="Book" placeholder="Pick a book" />
            </Combobox.Trigger>

            <Combobox.Popover>
              <Combobox.Items>
                <Combobox.Empty>No results found</Combobox.Empty>
                <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
                <Combobox.Item value="book-2">War and Peace</Combobox.Item>
                <Combobox.Item value="book-3">The Idiot</Combobox.Item>
                <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
                <Combobox.Item value="book-5">1984</Combobox.Item>
                <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
              </Combobox.Items>
            </Combobox.Popover>
          </Combobox>
        )
      })}
    </div>
  )
}

export const MultipleSelection: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox allowCustomValue multiple defaultValue={['book-1', 'book-2']}>
        <Combobox.Trigger>
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.SelectedItems />
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">
              Pride and Prejudice but it is an extremely long title
            </Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const MultipleSelectionControlled: StoryFn = () => {
  const [value, setValue] = useState<string[]>(['book-2'])
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-wrap gap-lg pb-[300px]">
      <div className="flex flex-col gap-lg">
        <FormField>
          <FormField.Label className="font-bold">Opened state:</FormField.Label>
          <Switch checked={open} onCheckedChange={setOpen}>
            {open ? 'Opened' : 'Closed'}
          </Switch>
        </FormField>
        <FormField>
          <FormField.Label className="font-bold">Selected items:</FormField.Label>
          <CheckboxGroup value={value} onCheckedChange={setValue} className="grow">
            <Checkbox value="book-1">To Kill a Mockingbird</Checkbox>
            <Checkbox value="book-2">War and Peace</Checkbox>
            <Checkbox value="book-3">The Idiot</Checkbox>
            <Checkbox value="book-4">A Picture of Dorian Gray</Checkbox>
            <Checkbox value="book-5">1984</Checkbox>
            <Checkbox value="book-6">Pride and Prejudice</Checkbox>
          </CheckboxGroup>
        </FormField>
      </div>

      <Combobox
        multiple
        autoFilter={false}
        value={value}
        onValueChange={setValue}
        open={open}
        onOpenChange={setOpen}
      >
        <Combobox.Trigger>
          <Combobox.SelectedItems />
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const MultipleSelectionNoWrap: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox
        wrap={false}
        allowCustomValue
        multiple
        defaultValue={['book-1', 'book-2', 'book-3', 'book-4', 'book-5', 'book-6']}
      >
        <Combobox.Trigger>
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.SelectedItems />
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">
              Pride and Prejudice but it is an extremely long title
            </Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const MultipleSelectionDisabled: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox multiple defaultValue={['book-1', 'book-2']} disabled>
        <Combobox.Trigger>
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.SelectedItems />
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const MultipleSelectionReadonly: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox multiple defaultValue={['book-1', 'book-2']} readOnly>
        <Combobox.Trigger>
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.SelectedItems />
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}

export const FormFieldLabel: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField>
        <FormField.Label>Book</FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Empty>No results found</Combobox.Empty>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldHiddenLabel: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField>
        <FormField.Label>
          <VisuallyHidden>Book</VisuallyHidden>
        </FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Empty>No results found</Combobox.Empty>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldReadOnly: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField readOnly>
        <FormField.Label>Book</FormField.Label>
        <Combobox defaultValue="book-1">
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>

          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Empty>No results found</Combobox.Empty>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldDisabled: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField disabled>
        <FormField.Label>Book</FormField.Label>
        <Combobox defaultValue="book-1">
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Empty>No results found</Combobox.Empty>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldRequired: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField isRequired>
        <FormField.Label>Book</FormField.Label>
        <Combobox>
          <Combobox.Trigger>
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Empty>No results found</Combobox.Empty>
              <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
              <Combobox.Item value="book-2">War and Peace</Combobox.Item>
              <Combobox.Item value="book-3">The Idiot</Combobox.Item>
              <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
              <Combobox.Item value="book-5">1984</Combobox.Item>
              <Combobox.Item value="book-6">Pride and Prejudice</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
      </FormField>
    </div>
  )
}

export const FormFieldValidation: StoryFn = () => {
  const [state, setState] = useState<undefined | 'success' | 'alert' | 'error'>('error')

  return (
    <div className="pb-[300px]">
      <FormField state={state}>
        <FormField.Label>Statuses</FormField.Label>
        <Combobox
          onValueChange={value => {
            setState(value === 'default' ? undefined : (value as 'success' | 'alert' | 'error'))
          }}
        >
          <Combobox.Trigger aria-label="Book">
            <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          </Combobox.Trigger>
          <Combobox.Popover>
            <Combobox.Items>
              <Combobox.Empty>No results found</Combobox.Empty>
              <Combobox.Item value="default">default</Combobox.Item>
              <Combobox.Item value="success">success</Combobox.Item>
              <Combobox.Item value="alert">alert</Combobox.Item>
              <Combobox.Item value="error">error</Combobox.Item>
            </Combobox.Items>
          </Combobox.Popover>
        </Combobox>
        <FormField.HelperMessage>
          An effective title significantly increases your chances of making a sale
        </FormField.HelperMessage>
        <FormField.SuccessMessage>Well done!</FormField.SuccessMessage>
        <FormField.AlertMessage>Take care of this field</FormField.AlertMessage>
        <FormField.ErrorMessage>The field is invalid</FormField.ErrorMessage>
      </FormField>
    </div>
  )
}

export const IsLoading: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Combobox isLoading defaultOpen={true}>
        <Combobox.Trigger>
          <Combobox.LeadingIcon>
            <PenOutline />
          </Combobox.LeadingIcon>
          <Combobox.Input aria-label="Book" placeholder="Pick a book" />
          <Combobox.ClearButton aria-label="Clear input" />
          <Combobox.Disclosure openedLabel="Close popup" closedLabel="Open popup" />
        </Combobox.Trigger>

        <Combobox.Popover>
          <Combobox.Items>
            <Combobox.Empty>No results found</Combobox.Empty>
            <Combobox.Item value="book-1">To Kill a Mockingbird</Combobox.Item>
            <Combobox.Item value="book-2">War and Peace</Combobox.Item>
            <Combobox.Item value="book-3">The Idiot</Combobox.Item>
            <Combobox.Item value="book-4">A Picture of Dorian Gray</Combobox.Item>
            <Combobox.Item value="book-5">1984</Combobox.Item>
            <Combobox.Item value="book-6">
              Pride and Prejudice but it is an extremely long title
            </Combobox.Item>
          </Combobox.Items>
        </Combobox.Popover>
      </Combobox>
    </div>
  )
}
export const ModalSearch: StoryFn = () => {
  const books = [
    { id: 1, name: 'Things Fall Apart' },
    { id: 2, name: 'The Catcher in the Rye' },
    { id: 3, name: 'The Great Gatsby' },
    { id: 4, name: 'Fairy tales' },
    { id: 5, name: 'The Hobbit' },
    { id: 6, name: 'The Lord of the Rings' },
    { id: 7, name: 'And Then There Were None' },
    { id: 8, name: 'The Da Vinci Code' },
    { id: 9, name: 'The Alchemist' },
    { id: 10, name: 'The Epic Of Gilgamesh' },
    { id: 11, name: 'The Book Thief' },
    { id: 12, name: 'The Little Prince' },
    { id: 13, name: 'The Book Of Job' },
    { id: 14, name: 'The Grapes Of Wrath' },
    { id: 15, name: 'Pride and Prejudice' },
    { id: 16, name: 'The Odyssey' },
    { id: 17, name: 'One Hundred Years of Solitude' },
    { id: 18, name: 'Crime and Punishment' },
    { id: 19, name: 'Gypsy Ballads' },
    { id: 20, name: 'Love in the Time of Cholera' },
    { id: 21, name: 'Hunger' },
    { id: 22, name: 'The Old Man and the Sea' },
    { id: 23, name: 'To Kill a Mockingbird' },
    { id: 24, name: 'War and Peace' },
    { id: 25, name: 'The Idiot' },
    { id: 26, name: 'Scaramouche' },
    { id: 27, name: 'A Picture of Dorian Gray' },
    { id: 28, name: '1984' },
  ]
  const [value, setValue] = useState<string | undefined>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="m-sm flex h-[600px] w-full items-center justify-center border-sm border-dashed bg-gradient-to-br from-main to-support-variant text-surface">
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <Combobox
          onValueChange={value => {
            if (value === undefined) {
              setValue(undefined)
            } else {
              const [_, id] = value.split('-')
              const book = books.find(({ id: bookId }) => `${bookId}` === id)
              setValue(book ? book?.name : undefined)
            }
            setIsOpen(false)
          }}
          defaultValue={value}
        >
          {value ? (
            <Chip intent="surface" onClear={() => setValue(undefined)}>
              <Chip.Content>{value}</Chip.Content>
              <Chip.ClearButton label={'Clear'} />
            </Chip>
          ) : (
            <>
              <Dialog.Trigger asChild>
                <Button design="outlined" intent="surface" onClick={() => setIsOpen(true)}>
                  Search a book...
                </Button>
              </Dialog.Trigger>
              <Dialog.Overlay />
              <Dialog.Portal>
                <Dialog.Content size="sm">
                  <Dialog.Header>
                    <Combobox.Trigger>
                      <Combobox.Input aria-label="Book" placeholder="Pick a book" />
                      <Combobox.ClearButton aria-label={'Clear input'} />
                    </Combobox.Trigger>
                  </Dialog.Header>
                  <Dialog.Body>
                    <Combobox.Items>
                      <Combobox.Empty>No results found</Combobox.Empty>
                      {books.map(({ name, id }) => (
                        <Combobox.Item value={`book-${id}`}>{name}</Combobox.Item>
                      ))}
                    </Combobox.Items>
                  </Dialog.Body>
                </Dialog.Content>
              </Dialog.Portal>
            </>
          )}
        </Combobox>
      </Dialog>
    </div>
  )
}
