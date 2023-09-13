import { Icon } from '@spark-ui/icon'
import { Link as LinkSVG } from '@spark-ui/icons/dist/icons/Link'
import { Meta, StoryFn } from '@storybook/react'

import { TextLink, type TextLinkProps } from '.'

const meta: Meta<typeof TextLink> = {
  title: 'Experimental/TextLink',
  component: TextLink,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <p>
      You should learn more about{' '}
      <TextLink href="https://en.wikipedia.org/wiki/Kitten" target="_blank">
        kitten
      </TextLink>{' '}
      and{' '}
      <TextLink href="https://en.wikipedia.org/wiki/Puppy" target="_blank">
        puppies
      </TextLink>
      .
    </p>
  )
}

export const Sizes: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-md">
      {['text-caption', 'text-body-1', 'text-headline-1'].map(textSize => {
        return (
          <p className={textSize}>
            Have you head about{' '}
            <TextLink href="/?path=/docs/getting-started--docs" target="_blank">
              Spark
            </TextLink>{' '}
            ? It’s awesome .
          </p>
        )
      })}
      <p className="text-body-1">
        Have you head about{' '}
        <TextLink
          href="/?path=/docs/getting-started--docs"
          target="_blank"
          className="text-display-1"
        >
          Spark
        </TextLink>{' '}
        ? It’s awesome .
      </p>
    </div>
  )
}

const intents: TextLinkProps['intent'][] = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
]

export const Intents: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-md">
      {intents.map(intent => (
        <p key={intent}>
          {intent}{' '}
          <TextLink intent={intent} href="https://en.wikipedia.org/wiki/Kitten" target="_blank">
            link
          </TextLink>
          .
        </p>
      ))}
    </div>
  )
}

export const Icons: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-md">
      <p>
        External{' '}
        <TextLink href="https://en.wikipedia.org/wiki/Kitten" target="_blank">
          link
          <Icon>
            <LinkSVG />
          </Icon>
        </TextLink>
        .
      </p>
    </div>
  )
}
