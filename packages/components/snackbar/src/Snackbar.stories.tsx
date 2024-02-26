import { Button } from '@spark-ui/button'
import { Meta, StoryFn } from '@storybook/react'

import { addSnackbar, Snackbar } from '.'

const meta: Meta<typeof Snackbar> = {
  title: 'Experimental/Snackbar',
  component: Snackbar,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div>
      <Snackbar />

      <Button onClick={() => addSnackbar({ message: "You're done!" })}>Show me a snackbar</Button>
    </div>
  )
}
