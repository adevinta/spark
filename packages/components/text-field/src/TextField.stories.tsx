// import { FormField } from '@spark-ui/form-field'
// import { Icon } from '@spark-ui/icon'
// import { Check } from '@spark-ui/icons/dist/icons/Check'
// import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
// import { InputGroup } from '@spark-ui/input'
import { Meta, StoryFn } from '@storybook/react'

// import { ChangeEvent, useState } from 'react'
import {
  TextField,
  // TextFieldProps
} from '.'

const meta: Meta<typeof TextField> = {
  title: 'Experimental/TextField',
  component: TextField,
}

export default meta

export const Default: StoryFn = _args => <TextField>Title</TextField>
