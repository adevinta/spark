import { Meta, StoryFn } from '@storybook/react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Experimental/Dropdown',
  component: Dropdown,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="w-sz-480 ">
      <Dropdown />
    </div>
  )
}

// export const Default: StoryFn = _args => {
//   return (
//     <div className="w-sz-480 ">
//       <Dropdown>
//         <Dropdown.Trigger>
//           <Dropdown.LeadingIcon>
//             <Job />
//           </Dropdown.LeadingIcon>
//           <Dropdown.Value placeholder="--Pick a job type--" />
//         </Dropdown.Trigger>

//         <Dropdown.Popover>
//           <Dropdown.Items aria-label="Job type">
//             <Dropdown.Item value="1">Full time job</Dropdown.Item>
//             <Dropdown.Item value="2">Part time job</Dropdown.Item>
//             <Dropdown.Item value="3">Internship</Dropdown.Item>
//           </Dropdown.Items>
//         </Dropdown.Popover>
//       </Dropdown>
//     </div>
//   )
// }
