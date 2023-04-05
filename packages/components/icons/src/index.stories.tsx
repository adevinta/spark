import { useClipboard } from '@docs/helpers/ReactLiveBlock'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { camelCase } from 'change-case'
import { FC, FormEvent, Fragment, useState } from 'react'

import * as Icons from './index'
import * as iconTags from './tags'

const meta: Meta = {
  title: 'components/Icons',
  component: Icons.Check,
}

const tags = Object.fromEntries(Object.entries(iconTags))

export default meta

export const Default: StoryFn = _args => {
  return (
    <Icon size="lg">
      <Icons.Check />
    </Icon>
  )
}

export const List: StoryFn = _args => {
  const [value, setValue] = useState<string>('')
  const handleChange = (event: FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement
    setValue(`${target.value}`)
  }

  const IconElement = ({ name, value: Value }: { name: string; value: FC }) => {
    const { hasCopied, onCopy } = useClipboard(`<${name} />`)
    const currentIconTags = tags[`${camelCase(name)}Tags`] as string[]
    const isHidden = !currentIconTags.join(' ').includes(value)
    const Wrapper = isHidden ? VisuallyHidden : Fragment

    return (
      <Wrapper key={name}>
        <div
          className="flex flex-col content-start items-center gap-sm"
          onClick={onCopy}
          data-tags={`${currentIconTags.join(' ')}`}
        >
          <Button design="filled" shape="pill" intent="surface">
            <Icon key={name} aria-label={name} size="lg">
              <Value />
            </Icon>
          </Button>
          <span className="min-w-[80px] text-center text-caption">{name}</span>
          <span>{hasCopied ? 'copied!' : <br />}</span>
        </div>
      </Wrapper>
    )
  }

  return (
    <div className="flex flex-col content-start items-start gap-md">
      <label htmlFor="default-search-input" className="px-md text-small uppercase">
        search
      </label>
      <input
        className="rounded-md px-md py-sm text-on-surface ring-2 ring-current focus-visible:outline-0"
        id="default-search-input"
        value={value}
        placeholder="icon name"
        onChange={handleChange}
      />
      <div className="flex flex-wrap content-center items-start justify-evenly gap-lg">
        {Object.entries(Icons).map(([name, Value]) => (
          <IconElement key={name} name={name} value={Value} />
        ))}
      </div>
    </div>
  )
}
