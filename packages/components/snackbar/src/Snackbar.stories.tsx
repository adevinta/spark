import { Button } from '@spark-ui/button'
import { Meta, StoryFn } from '@storybook/react'
import { useEffect } from 'react'

import { addSnackbar, type AddSnackbarArgs, Snackbar } from '.'

const meta: Meta<typeof Snackbar> = {
  title: 'Experimental/Snackbar',
  component: Snackbar,
}

export default meta

const designs: AddSnackbarArgs['design'][] = ['filled', 'tinted']

const intents: AddSnackbarArgs['intent'][] = [
  'success',
  'alert',
  'error',
  'info',
  'neutral',
  'main',
  'basic',
  'support',
  'accent',
  'inverse',
]

export const Default: StoryFn = _args => {
  useEffect(() => {
    addSnackbar({
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam quasi nisi nam eligendi repellat magnam, nostrum praesentium vel quidem obcaecati in minima deleniti maxime minus molestiae vero cupiditate dolorum!',
      timeout: 1000000,
    })
  }, [])

  return (
    <div>
      <Snackbar />

      <Button onClick={() => addSnackbar({ message: "You're done!" })}>Display snackbar</Button>
    </div>
  )
}

export const Design: StoryFn = _args => {
  return (
    <div>
      <Snackbar />

      <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
        {designs.map(design => (
          <Button
            key={design}
            onClick={() => addSnackbar({ message: "You're done!", design, timeout: 1000000 })}
          >
            {`Display ${design}${design === 'filled' ? ' (default)' : ''} snackbar`}
          </Button>
        ))}
      </div>
    </div>
  )
}

export const Intent: StoryFn = _args => {
  return (
    <div>
      <Snackbar />

      <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
        {intents.map(intent => (
          <Button
            key={intent}
            {...(intent === 'inverse'
              ? {
                  intent: 'surface',
                }
              : {
                  intent: intent === 'error' ? 'danger' : intent,
                })}
            onClick={() => addSnackbar({ message: "You're done!", intent, timeout: 1000000 })}
          >
            {`Display ${intent}${intent === 'neutral' ? ' (default)' : ''} snackbar`}
          </Button>
        ))}
      </div>
    </div>
  )
}
