import { Icon as SparkIcon } from '@spark-ui/icon'
import { CameraFill } from '@spark-ui/icons/dist/icons/CameraFill'
import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps, ReactElement, useState } from 'react'

import { Chip } from '.'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
}

type ChipProps = ComponentProps<typeof Chip>

const designs: ChipProps['design'][] = ['dashed', 'filled', 'outlined', 'tinted']
const intents: ChipProps['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
  'surface',
]

export default meta

export const Default: StoryFn = _args => <Chip>Hello World!</Chip>

export const MaxLength: StoryFn = _args => (
  <div className="gap-md flex flex-col flex-wrap">
    <div className="gap-md flex flex-wrap">
      <Chip>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Chip>
      <Chip
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
      <Chip
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
        onClose={() => console.log('close')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
    </div>
    <div className="gap-md flex flex-wrap">
      <Chip design="filled">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Chip>
      <Chip
        design="filled"
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
      <Chip
        design="filled"
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
        onClose={() => console.log('close')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
    </div>
    <div className="gap-md flex flex-wrap">
      <Chip design="dashed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Chip>
      <Chip
        design="dashed"
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
      <Chip
        design="dashed"
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
        onClose={() => console.log('close')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
    </div>
    <div className="gap-md flex flex-wrap">
      <Chip design="tinted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Chip>
      <Chip
        design="tinted"
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
      <Chip
        design="tinted"
        icon={
          <SparkIcon>
            <CameraFill />
          </SparkIcon>
        }
        onClose={() => console.log('close')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Chip>
    </div>
  </div>
)

export const Disabled: StoryFn = _args => (
  <div className="gap-md flex flex-wrap">
    <Chip disabled>disabled</Chip>
    <Chip disabled onClose={() => console.log('close')}>
      disabled
    </Chip>
  </div>
)

export const Icon: StoryFn = _args => (
  <div className="gap-md flex flex-wrap">
    <Chip
      icon={
        <SparkIcon>
          <CameraFill />
        </SparkIcon>
      }
    >
      Trailing icon
    </Chip>
    <Chip
      icon={
        <SparkIcon>
          <CameraFill />
        </SparkIcon>
      }
      onClose={() => console.log('close')}
    >
      Trailing icon
    </Chip>
    <Chip
      icon={
        <SparkIcon>
          <CameraFill />
        </SparkIcon>
      }
    />
  </div>
)

const ToggleChip = ({
  intent,
  children,
}: {
  intent?: ChipProps['intent']
  children?: ReactElement | string
}) => {
  const [pressed, setPressed] = useState<undefined | boolean>()

  return (
    <Chip
      onClick={(_, { pressed }) => setPressed(!pressed)}
      intent={intent}
      pressed={pressed}
      design={pressed ? 'filled' : 'outlined'}
    >
      {children}
    </Chip>
  )
}

export const Interactions: StoryFn = _args => {
  return (
    <div className="gap-md flex flex-wrap">
      <ToggleChip>Hello World!</ToggleChip>
    </div>
  )
}

export const Behavior: StoryFn = _args => {
  const [pressed, setPressed] = useState<undefined | boolean>(false)

  return (
    <div className="gap-md flex flex-wrap">
      <Chip>default</Chip>
      <Chip
        onClick={() => {
          console.log('actionable')
        }}
      >
        actionable
      </Chip>
      <Chip
        defaultPressed={false}
        onClick={(_, { pressed }) => {
          setPressed(!pressed)
          console.log('toggleable')
        }}
        design={pressed ? 'tinted' : undefined}
      >
        toggle
      </Chip>
      <Chip
        onClose={_ => {
          console.log('closable')
        }}
      >
        closeable
      </Chip>
    </div>
  )
}

export const Design: StoryFn = _args => (
  <div className="gap-md flex flex-col flex-wrap">
    <div className="gap-md flex flex-wrap">
      {designs.map(design => (
        <Chip key={design} design={design}>
          {design} chip
        </Chip>
      ))}
    </div>
    <div className="gap-md flex flex-wrap">
      {designs.map(design => (
        <Chip key={design} design={design} onClick={() => console.log('click')}>
          {design} chip
        </Chip>
      ))}
    </div>
  </div>
)

export const onClose: StoryFn = _args => (
  <div className="gap-md flex flex-col flex-wrap">
    <div className="gap-md flex flex-wrap">
      {designs.map(design => (
        <Chip key={design} design={design} onClose={() => console.log('close')}>
          chip
        </Chip>
      ))}
    </div>
    <div className="gap-md flex flex-wrap">
      {designs.map(design => (
        <Chip
          key={design}
          design={design}
          onClick={() => console.log('click')}
          onClose={() => console.log('close')}
        >
          chip
        </Chip>
      ))}
    </div>
    <div className="gap-md flex flex-wrap">
      {designs.map(design => (
        <Chip
          key={design}
          design={design}
          icon={
            <SparkIcon>
              <CameraFill />
            </SparkIcon>
          }
          onClose={() => console.log('close')}
        ></Chip>
      ))}
    </div>
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-md flex flex-col flex-wrap">
    {designs.map(design => (
      <div key={design} className="gap-md flex flex-wrap">
        {intents.map(intent => (
          <Chip design={design} key={`${design}-${intent}`} intent={intent}>
            {intent} chip
          </Chip>
        ))}
      </div>
    ))}
  </div>
)
