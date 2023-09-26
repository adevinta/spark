import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { BookmarkFill } from '@spark-ui/icons/dist/icons/BookmarkFill'
import { BookmarkOutline } from '@spark-ui/icons/dist/icons/BookmarkOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Toggle } from '.'

const meta: Meta<typeof Toggle> = {
  title: 'Experimental/Toggle',
  component: Toggle,
}

export default meta

export const Default: StoryFn = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex gap-lg">
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        <IconButton aria-label="Add to bookmarks">
          <Icon>{pressed ? <BookmarkFill /> : <BookmarkOutline />}</Icon>
        </IconButton>
      </Toggle>
    </div>
  )
}

export const WithButton: StoryFn = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex gap-lg">
      <Toggle pressed={pressed} asChild onPressedChange={setPressed}>
        <Button design={pressed ? 'filled' : 'outlined'}>
          Receive notifications
          {pressed && (
            <Icon>
              <Check />
            </Icon>
          )}
        </Button>
      </Toggle>
    </div>
  )
}
