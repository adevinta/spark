import { useClipboard } from '@docs/helpers/ReactLiveBlock'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { Meta, StoryFn } from '@storybook/react'
import { ChangeEvent, FC, useEffect, useState } from 'react'

import { Check as IconCheck } from './icons/Check'

const meta: Meta = {
  title: 'components/Icons',
  component: IconCheck,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <Icon size="lg">
      <IconCheck />
    </Icon>
  )
}

export const List: StoryFn = _args => {
  const [icons, setIcons] = useState<[originalName: string, lowercaseName: string, iconElm: FC][]>(
    []
  )
  const [value, setValue] = useState<string>('')

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(`${target.value}`)
  }

  const filteredIcons = icons.filter(([, lowercaseName]) =>
    lowercaseName.includes(value.toLowerCase())
  )

  useEffect(() => {
    import('./index').then(dynamicIcons => {
      setIcons(
        Object.entries(dynamicIcons as object).map(([name, iconElm]) => [
          name,
          name.toLowerCase(),
          iconElm,
        ])
      )
    })
  }, [])

  return (
    <div className="gap-md flex flex-col content-start items-start">
      <label htmlFor="default-search-input" className="px-md text-small uppercase">
        search
      </label>

      <input
        className="px-md py-sm text-on-surface rounded-md ring-2 ring-current focus-visible:outline-0"
        id="default-search-input"
        value={value}
        placeholder="icon name"
        onChange={handleChange}
      />

      <div className="gap-lg flex flex-wrap content-center items-start justify-evenly">
        {filteredIcons.map(([originalName, , element]) => (
          <Components.IconElement key={originalName} name={originalName} element={element} />
        ))}
      </div>
    </div>
  )
}

const Components = {
  IconElement: ({ name, element: Element }: { name: string; element: FC }) => {
    const { hasCopied, onCopy } = useClipboard(`<${name} />`)

    return (
      <div className="gap-sm flex flex-col content-start items-center" onClick={onCopy}>
        <Button design="filled" shape="pill" intent="surface">
          <Icon aria-label={name} size="lg">
            <Element />
          </Icon>
        </Button>
        <span className="text-caption min-w-[80px] text-center">{name}</span>
        <span>{hasCopied ? 'copied!' : <br />}</span>
      </div>
    )
  },
}
