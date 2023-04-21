import { Checkbox } from '@spark-ui/checkbox'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Stack } from '.'

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
}

export default meta

const textStyles = 'p-md bg-neutral text-on-neutral rounded-sm text-caption'
const previewStyles =
  'border-sm p-md border-outline rounded-sm border-dashed hover:bg-surface-hovered'

export const Direction: StoryFn = _args => (
  <Stack>
    <div>
      <p className="text-headline-2 mb-md">Vertical (default)</p>
      <Stack className={previewStyles}>
        <span className={textStyles}>1</span>
        <span className={textStyles}>2</span>
        <span className={textStyles}>3</span>
      </Stack>
    </div>

    <div>
      <p className="text-headline-2 mb-md">Horizontal</p>
      <Stack direction="horizontal" className={previewStyles}>
        <span className={textStyles}>1</span>
        <span className={textStyles}>2</span>
        <span className={textStyles}>3</span>
      </Stack>
    </div>
  </Stack>
)

const spacings = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const

export const Spacing: StoryFn = _args => (
  <Stack>
    {spacings.map(spacing => {
      return (
        <div>
          <p className="text-headline-2 mb-md">{spacing}</p>
          <Stack direction="horizontal" spacing={spacing} className={previewStyles}>
            <span className={textStyles}>1</span>
            <span className={textStyles}>2</span>
            <span className={textStyles}>3</span>
          </Stack>
        </div>
      )
    })}
  </Stack>
)

const alignments = ['start', 'end', 'center', 'baseline', 'stretch'] as const

export const Align: StoryFn = _args => (
  <Stack direction="horizontal" wrap align="stretch">
    {alignments.map(align => {
      return (
        <div>
          <p className="text-headline-2 mb-md">{align}</p>
          <Stack align={align} className={`${previewStyles} min-w-sz-112`}>
            <span className={textStyles}>1</span>
            <span className={textStyles}>2</span>
            <span className={textStyles}>3</span>
          </Stack>
        </div>
      )
    })}
  </Stack>
)

const justify = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const

export const Justify: StoryFn = _args => (
  <Stack align="stretch">
    {justify.map(value => {
      return (
        <div>
          <p className="text-headline-2 mb-md">{value}</p>
          <Stack direction="horizontal" justify={value} className={previewStyles}>
            <span className={textStyles}>1</span>
            <span className={textStyles}>2</span>
            <span className={textStyles}>3</span>
          </Stack>
        </div>
      )
    })}
  </Stack>
)

const longArray = Array.from({ length: 20 }, (_, i) => i + 1)

export const Wrap: StoryFn = _args => {
  const [wrap, setWrap] = useState(true)

  return (
    <Stack>
      <Checkbox
        defaultChecked={wrap}
        onCheckedChange={checkedStatus => {
          setWrap(!!checkedStatus)
        }}
      >
        wrap items
      </Checkbox>
      <Stack
        direction="horizontal"
        wrap={wrap}
        className={`${previewStyles} w-sz-320 h-sz-160 overflow-hidden overflow-x-auto`}
      >
        {longArray.map(n => {
          return <span className={`${textStyles} grow`}>{n}</span>
        })}
      </Stack>
    </Stack>
  )
}
