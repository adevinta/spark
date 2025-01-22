/* eslint-disable max-lines */
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
import { ChipLeadingIcon } from './ChipLeadingIcon'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['data-entry'],
}

type ChipProps = ComponentProps<typeof Chip>

const designs: ChipProps['design'][] = ['outlined', 'dashed', 'tinted']

const intents: ChipProps['intent'][] = [
  'basic',
  'main',
  'support',
  'accent',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
  'surface',
]

export default meta

export const Default: StoryFn = _args => <Chip>default chip</Chip>

export const Kind: StoryFn = () => {
  const [pressed, setPressed] = useState(true)
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <div className="flex flex-row gap-xl">
      <Chip onClick={() => console.log('assist')} ref={ref}>
        <ChipLeadingIcon>
          <Icon label="calendar">
            <CalendarOutline />
          </Icon>
        </ChipLeadingIcon>
        <Chip.Content>Assist</Chip.Content>
      </Chip>
      <Chip pressed={pressed} onClick={(_, { pressed }) => setPressed(!pressed)}>
        {pressed && (
          <ChipLeadingIcon>
            <Icon label="check">
              <Check />
            </Icon>
          </ChipLeadingIcon>
        )}
        <Chip.Content>Filter</Chip.Content>
      </Chip>
      <Chip>
        <Chip.Content>Input</Chip.Content>
        <Chip.ClearButton label="clear" />
      </Chip>
      <Chip onClick={() => console.log('suggestion')}>Suggestion</Chip>
    </div>
  )
}

const singleSet = Object.entries({
  '🥝': ['fruit'],
  '🍎': ['fruit'],
  '🍇': ['fruit'],
  '🍌': ['fruit'],
  '🍆': ['vegetable'],
  '🧅': ['vegetable'],
  '🥔': ['vegetable'],
  '🌶': ['vegetable'],
  '🥕': ['vegetable'],
})

export const SingleSelectionFilter: StoryFn = () => {
  const [activeFilter, setActive] = useState<undefined | string>('fruit')

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-row items-start gap-md">
        {['fruit', 'vegetable'].map(filter => {
          const isActive = activeFilter === filter

          return (
            <Chip
              key={filter}
              value={filter}
              pressed={isActive}
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
      <div className="flex flex-row gap-x-lg">
        {singleSet.map(([element, types]) => {
          const Element = [undefined, ...types].includes(activeFilter) ? 'span' : VisuallyHidden

          return (
            <Element key={element} className="flex">
              <span className="text-headline-1-expanded">{element}</span>
            </Element>
          )
        })}
      </div>
    </div>
  )
}

const multipleUnionSet = Object.entries({
  '🦍': ['animal'],
  '🦒': ['animal'],
  '🦌': ['animal'],
  '🐄': ['animal'],
  '🐕': ['animal'],
  '🐬': ['animal'],
  '🌺': ['flower'],
  '🌼': ['flower'],
  '🌻': ['flower'],
  '🪷': ['flower'],
  '🌳': ['tree'],
  '🌴': ['tree'],
  '🌲': ['tree'],
})

export const UnionFilter: StoryFn = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['animal', 'tree'])

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-row items-start gap-md">
        {['animal', 'flower', 'tree'].map(filter => {
          const isActive = activeFilters?.includes(filter)

          return (
            <Chip
              key={filter}
              value={filter}
              pressed={isActive}
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
      <div className="flex flex-row gap-x-lg">
        {multipleUnionSet.map(([element, types]) => {
          const Element = types.some(
            type => activeFilters.includes(type) || activeFilters.length === 0
          )
            ? 'span'
            : VisuallyHidden

          return (
            <Element key={element} className="flex">
              <span className="text-headline-1-expanded">{element}</span>
            </Element>
          )
        })}
      </div>
    </div>
  )
}

const multipleIntersectionSet = Object.entries({
  '🦍': ['land', 'wild'],
  '🦒': ['land', 'wild'],
  '🦌': ['land', 'wild'],
  '🐄': ['land', 'domestic'],
  '🐕': ['land', 'domestic'],
  '🐬': ['sea', 'wild'],
  '🐓': ['land', 'domestic'],
  '🐿️': ['land', 'wild'],
  '🦧': ['land', 'wild'],
  '🐳': ['sea', 'wild'],
  '🦈': ['sea', 'wild'],
  '🦭': ['sea', 'land', 'wild'],
  '🦆': ['sea', 'land', 'air', 'wild'],
  '🐡': ['sea', 'wild'],
  '🐟': ['sea', 'wild'],
  '🐞': ['land', 'air', 'wild'],
  '🐢': ['land', 'sea', 'wild', 'domestic'],
  '🦜': ['land', 'air', 'wild', 'domestic'],
})

export const IntersectionFilter: StoryFn = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['land', 'wild'])

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-row items-start gap-md">
        {['land', 'sea', 'air', 'wild', 'domestic'].map(filter => {
          const isActive = activeFilters?.includes(filter)

          return (
            <Chip
              key={filter}
              value={filter}
              pressed={isActive}
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
      <div className="flex flex-row gap-x-lg">
        {multipleIntersectionSet.map(([element, types]) => {
          const Element = activeFilters.every(filter => types.includes(filter))
            ? 'span'
            : VisuallyHidden

          return (
            <Element key={element} className="flex">
              <span className="text-headline-1-expanded">{element}</span>
            </Element>
          )
        })}
      </div>
    </div>
  )
}

export const Input: StoryFn = () => {
  const [value, setValue] = useState<string>('third')
  const [tags, setTags] = useState<string[]>(['first', 'second'])

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col">
        <Label htmlFor="content">Value</Label>
        <InputGroup>
          <SparkInput
            aria-label="value"
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
      </div>
      <span className="flex gap-md">
        {tags.map(tag => (
          <Chip
            intent="neutral"
            key={tag}
            design="dashed"
            onClear={() => {
              setTags(tags.filter(currentTag => tag !== currentTag))
            }}
          >
            <Chip.Content>{tag}</Chip.Content>
            <Chip.ClearButton label="clear" />
          </Chip>
        ))}
      </span>
    </div>
  )
}

export const DefaultIntent: StoryFn = _args => (
  <div className="flex flex-col flex-wrap gap-md">
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip
            onClear={() => console.log('clear')}
            design={design}
            key={`${design}-${intent}`}
            intent={intent}
          >
            <Chip.Content>{intent}</Chip.Content>
            <Chip.ClearButton label="clear" />
          </Chip>
        ))}
      </div>
    ))}
  </div>
)

export const ActionIntent: StoryFn = _args => (
  <div className="flex flex-col flex-wrap gap-md">
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip
            design={design}
            key={`${design}-${intent}`}
            intent={intent}
            onClick={() => console.log(`click ${design} ${intent}`)}
            onClear={() => console.log('clear')}
          >
            <Chip.Content>{intent}</Chip.Content>
            <Chip.ClearButton label="clear" />
          </Chip>
        ))}
      </div>
    ))}
  </div>
)

export const SelectionIntent: StoryFn = _args => (
  <div className="flex flex-col flex-wrap gap-md">
    {designs.map(design => (
      <div key={design} className="flex flex-wrap gap-md">
        {intents.map(intent => (
          <Chip
            defaultPressed={true}
            design={design}
            key={`${design}-${intent}`}
            intent={intent}
            onClear={() => console.log('clear')}
          >
            <Chip.Content>{intent}</Chip.Content>
            <Chip.ClearButton label="clear" />
          </Chip>
        ))}
      </div>
    ))}
  </div>
)

export const Disabled: StoryFn = _args => (
  <div>
    <Chip disabled onClick={() => console.log('click chip')} onClear={() => console.log('clear')}>
      <Chip.Content>Disabled chip</Chip.Content>
      <Chip.ClearButton label="clear" />
    </Chip>
  </div>
)

export const AssistEvent: StoryFn = _args => {
  return (
    <div className="flex max-w-sz-320 flex-col gap-sm rounded-md border-md bg-gradient-to-br from-main to-support-variant p-lg text-surface shadow">
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

export const Suggestion: StoryFn = () => {
  const [isBlurred, setIsBlurred] = useState<boolean>(false)
  const [content, setContent] = useState<string>('')
  const blurHandler = () => setTimeout(() => setIsBlurred(false), 200)
  const focusHandler = () => setIsBlurred(true)

  const Component = isBlurred ? 'div' : VisuallyHidden

  return (
    <div className="relative flex flex-col gap-sm rounded-md p-lg">
      <div className="flex min-h-sz-112 flex-col items-start justify-start">
        <Label htmlFor="email">From</Label>
        <InputGroup>
          <InputGroup.LeadingIcon>
            <Icon label="mail">
              <MailOutline />
            </Icon>
          </InputGroup.LeadingIcon>
          <SparkInput
            aria-label="email"
            onBlur={blurHandler}
            onFocus={focusHandler}
            onChange={event => setContent(event.target.value)}
            value={content}
          />
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
          intent="neutral"
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
          intent="neutral"
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
