import { Icon } from '@spark-ui/icon'
// import { Toy } from '@spark-ui/icons/dist/icons/Toy'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { InputGroup } from '@spark-ui/input'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps, useState } from 'react'

import { Chip } from '.'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
}

type ChipProps = ComponentProps<typeof Chip>

const designs: ChipProps['design'][] = ['outlined', 'filled', 'dashed', 'tinted']

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

export const Default: StoryFn = _args => <Chip>default chip</Chip>

export const SingleSelectionFilter: StoryFn = _args => {
  const [activeFilter, setActive] = useState<undefined | string>('number')

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-row items-start gap-md">
        {['vowel', 'consonant', 'number', 'symbol'].map(filter => {
          const isActive = activeFilter === filter

          return (
            <Chip
              key={filter}
              value={filter}
              pressed={isActive}
              design={isActive ? 'filled' : undefined}
              onClick={(_event, { pressed, value }) => {
                setActive(pressed ? undefined : (value as string))
              }}
            >
              {isActive && (
                <Chip.LeadingIcon aria-label="active">
                  <Icon label="active">
                    <Check />
                  </Icon>
                </Chip.LeadingIcon>
              )}
              <Chip.Content>{filter}</Chip.Content>
            </Chip>
          )
        })}
      </div>
      <div className="flex flex-row gap-md">
        {Object.entries({
          1: ['number'],
          A: ['vowel'],
          B: ['consonant'],
          C: ['consonant'],
          '!': ['symbol'],
          6: ['number'],
          '∞': ['number', 'symbol'],
          U: ['vowel'],
          '†': ['symbol'],
        }).map(([color, types]) => {
          const Element = [undefined, ...types].includes(activeFilter) ? 'span' : VisuallyHidden

          return (
            <Element key={color} className="flex h-sz-32 rounded-md p-md">
              <span className="text-caption">{color}</span>
            </Element>
          )
        })}
      </div>
    </div>
  )
}

export const UnionFilter: StoryFn = _args => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['consonant', 'symbol'])

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-row items-start gap-md">
        {['vowel', 'consonant', 'number', 'symbol'].map(filter => {
          const isActive = activeFilters?.includes(filter)

          return (
            <Chip
              key={filter}
              value={filter}
              pressed={isActive}
              design={isActive ? 'tinted' : 'dashed'}
              onClick={(_event, { pressed, value }) => {
                setActiveFilters(
                  pressed
                    ? activeFilters.filter(filter => filter !== value)
                    : [...activeFilters, value as string]
                )
              }}
            >
              {isActive && (
                <Chip.LeadingIcon aria-label="active">
                  <Icon label="active">
                    <Check />
                  </Icon>
                </Chip.LeadingIcon>
              )}
              <Chip.Content>{filter}</Chip.Content>
            </Chip>
          )
        })}
      </div>
      <div className="flex flex-row gap-md">
        {Object.entries({
          1: ['number'],
          A: ['vowel'],
          B: ['consonant'],
          C: ['consonant'],
          '!': ['symbol'],
          6: ['number'],
          '∞': ['number', 'symbol'],
          U: ['vowel'],
          '†': ['symbol'],
        }).map(([color, types]) => {
          const Element = types.some(
            type => activeFilters.includes(type) || activeFilters.length === 0
          )
            ? 'span'
            : VisuallyHidden

          return (
            <Element key={color} className="flex h-sz-32 rounded-md p-md">
              <span className="text-caption">{color}</span>
            </Element>
          )
        })}
      </div>
    </div>
  )
}

export const IntersectionFilter: StoryFn = _args => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['number', 'symbol'])

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-row items-start gap-md">
        {['vowel', 'consonant', 'number', 'symbol'].map(filter => {
          const isActive = activeFilters?.includes(filter)

          return (
            <Chip
              key={filter}
              value={filter}
              pressed={isActive}
              design={isActive ? 'filled' : 'dashed'}
              onClick={(_event, { pressed, value }) => {
                setActiveFilters(
                  pressed
                    ? activeFilters.filter(filter => filter !== value)
                    : [...activeFilters, value as string]
                )
              }}
            >
              {isActive && (
                <Chip.LeadingIcon aria-label="active">
                  <Icon label="active">
                    <Check />
                  </Icon>
                </Chip.LeadingIcon>
              )}
              <Chip.Content>{filter}</Chip.Content>
            </Chip>
          )
        })}
      </div>
      <div className="flex flex-row gap-md">
        {Object.entries({
          1: ['number'],
          A: ['vowel'],
          B: ['consonant'],
          C: ['consonant'],
          '!': ['symbol'],
          6: ['number'],
          '∞': ['number', 'symbol'],
          U: ['vowel'],
          '†': ['symbol'],
        }).map(([color, types]) => {
          const Element = activeFilters.every(filter => types.includes(filter))
            ? 'span'
            : VisuallyHidden

          return (
            <Element key={color} className="flex h-sz-32 rounded-md p-md">
              <span className="text-caption">{color}</span>
            </Element>
          )
        })}
      </div>
    </div>
  )
}

export const Input: StoryFn = _args => (
  <div className="flex flex-col">
    <InputGroup>
      <Input />
    </InputGroup>
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="flex flex-col flex-wrap gap-md">
    Default
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip design={design} key={`${design}-${intent}`} intent={intent}>
            {intent} chip huge huge chip long and wrong
          </Chip>
        ))}
      </div>
    ))}
    Actionable
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip
            design={design}
            key={`${design}-${intent}`}
            intent={intent}
            onClick={() => console.log(`click ${design} ${intent}`)}
          >
            {intent} chip huge huge chip long and wrong
          </Chip>
        ))}
      </div>
    ))}
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="flex flex-col flex-wrap gap-md">
    Default
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip design={design} key={`${design}-${intent}`} intent={intent}>
            {intent} chip huge huge chip long and wrong
          </Chip>
        ))}
      </div>
    ))}
    Actionable
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip
            design={design}
            key={`${design}-${intent}`}
            intent={intent}
            onClick={() => console.log(`click ${design} ${intent}`)}
          >
            {intent} chip huge huge chip long and wrong
          </Chip>
        ))}
      </div>
    ))}
  </div>
)
