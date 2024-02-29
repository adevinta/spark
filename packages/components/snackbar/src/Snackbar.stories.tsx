import { Button } from '@spark-ui/button'
import { RadioGroup } from '@spark-ui/radio-group'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { addSnackbar, type AddSnackbarArgs, Snackbar, type SnackbarProps } from '.'

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

const positions: SnackbarProps['position'][] = [
  'top',
  'top-right',
  'top-left',
  'bottom',
  'bottom-right',
  'bottom-left',
]

export const Default: StoryFn = _args => {
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
          <Button key={design} onClick={() => addSnackbar({ message: "You're done!", design })}>
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
            onClick={() => addSnackbar({ message: "You're done!", intent })}
          >
            {`Display ${intent}${intent === 'neutral' ? ' (default)' : ''} snackbar`}
          </Button>
        ))}
      </div>
    </div>
  )
}

export const Position: StoryFn = _args => {
  const [position, setPosition] = useState<SnackbarProps['position']>('bottom')

  return (
    <div>
      <Snackbar position={position} />

      <div>
        <RadioGroup
          className="mb-xl flex gap-xl"
          value={`${position}`}
          orientation="horizontal"
          onValueChange={value => setPosition(value as ExcludeNull<SnackbarProps>['position'])}
        >
          {positions.map(position => (
            <RadioGroup.Radio key={position} value={`${position}`} className="capitalize">
              {position?.replace('-', ' ')}
            </RadioGroup.Radio>
          ))}
        </RadioGroup>

        <Button onClick={() => addSnackbar({ message: "You're done!" })}>Display snackbar</Button>
      </div>
    </div>
  )
}
