/* eslint-disable max-lines */
// import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
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
      <Combobox multiple defaultValue={['book-1', 'book-2']}>
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
