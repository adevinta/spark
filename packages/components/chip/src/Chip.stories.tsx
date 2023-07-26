import { Icon } from '@spark-ui/icon'
import { AccountFill } from '@spark-ui/icons/dist/icons/AccountFill'
import { CalendarOutline } from '@spark-ui/icons/dist/icons/CalendarOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { EyeOutline } from '@spark-ui/icons/dist/icons/EyeOutline'
import { MailOutline } from '@spark-ui/icons/dist/icons/MailOutline'
import { Input as SparkInput, InputGroup } from '@spark-ui/input'
import { Label } from '@spark-ui/label'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps, useRef, useState } from 'react'

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

export const Input: StoryFn = _args => {
  const [value, setValue] = useState<string>('third')
  const [tags, setTags] = useState<string[]>(['first', 'second'])

  return (
    <div className="flex flex-col gap-md">
      <InputGroup>
        <SparkInput
          value={value}
          onChange={event => setValue(event.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              !tags.includes(value) && setTags([...tags, value])
              setValue('')
            }
          }}
        />
      </InputGroup>
      <span className="flex gap-md">
        {tags.map(tag => (
          <Chip key={tag} design="dashed">
            <Chip.Content>{tag}</Chip.Content>
            <Chip.ClearButton
              onClick={() => setTags(tags.filter(currentTag => tag !== currentTag))}
              label="clear"
            />
          </Chip>
        ))}
      </span>
    </div>
  )
}

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

export const AssistEvent: StoryFn = _args => {
  return (
    <div className="flex max-w-sz-320 flex-col gap-sm rounded-md border-md bg-gradient-to-br from-primary to-secondary p-lg text-surface shadow">
      <div className="flex min-h-sz-128 flex-col items-start justify-between">
        <span className="font-mono text-small uppercase">Passed Event</span>
        <span className="flex flex-col">
          <span className="text-headline-1">WWDC23</span>
          <span className="text-body-1">Worldwide Developers Conference</span>
        </span>
      </div>
      <hr className="bg-surface" />
      <div className="flex flex-col gap-md">
        <span className="text-small">June 6, 2023</span>
        <div className="flex flex-row gap-md">
          <Chip intent="surface" onClick={() => console.log('Add to iCal')}>
            <Chip.LeadingIcon>
              <Icon label="calendar">
                <CalendarOutline />
              </Icon>
            </Chip.LeadingIcon>
            <Chip.Content>Add to iCal</Chip.Content>
          </Chip>
          <Chip intent="surface" onClick={() => console.log('Join the meet')}>
            <Chip.LeadingIcon>
              <Icon label="join the meet">
                <EyeOutline />
              </Icon>
            </Chip.LeadingIcon>
            <Chip.Content>Join the meet</Chip.Content>
          </Chip>
        </div>
      </div>
    </div>
  )
}

export const Suggestion: StoryFn = _args => {
  const [isBlurred, setIsBlurred] = useState<boolean>(false)
  const [content, setContent] = useState<string>('')
  const blurHandler = () => setTimeout(() => setIsBlurred(false), 200)
  const focusHandler = () => setIsBlurred(true)

  const Component = isBlurred ? 'div' : VisuallyHidden

  return (
    <div className="relative flex flex-col gap-sm rounded-md p-lg">
      <div className="flex min-h-sz-112 flex-col items-start justify-start">
        <Label htmlFor="email">From</Label>
        <InputGroup aria-label="email">
          <InputGroup.LeadingIcon>
            <Icon label="mail">
              <MailOutline />
            </Icon>
          </InputGroup.LeadingIcon>
          <SparkInput onBlur={blurHandler} onFocus={focusHandler} value={content} />
          <InputGroup.ClearButton aria-label="clear" onClick={() => setContent('')} />
        </InputGroup>
      </div>
      <Component className="absolute bottom-none right-none flex w-full justify-start gap-md px-lg pb-lg">
        <Chip
          tabIndex={-1}
          design={content === 'john.doe@email.com' ? 'tinted' : 'dashed'}
          onClick={() => {
            setContent('john.doe@email.com')
          }}
        >
          <Chip.LeadingIcon>
            <Icon label="icon">
              <AccountFill />
            </Icon>
          </Chip.LeadingIcon>
          <Chip.Content>John Doe</Chip.Content>
        </Chip>
        <Chip
          tabIndex={-1}
          design={content === 'jane.doe@email.com' ? 'tinted' : 'dashed'}
          onClick={() => {
            setContent('jane.doe@email.com')
          }}
        >
          <Chip.LeadingIcon>
            <Icon label="icon">
              <AccountFill />
            </Icon>
          </Chip.LeadingIcon>
          <Chip.Content>Jane Doe</Chip.Content>
        </Chip>
      </Component>
    </div>
  )
}
