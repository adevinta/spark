import { Icon } from '@spark-ui/icon'
import { Link as LinkSVG } from '@spark-ui/icons/dist/icons/Link'
import { TextLink } from '@spark-ui/text-link'
import React from 'react'

export const A11yTextLink = () => (
  <section>
    <div>
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
    </div>

    <div>
      <p>
        External{' '}
        <TextLink href="https://en.wikipedia.org/wiki/Kitten" target="_blank" className="gap-sm">
          link
          <Icon>
            <LinkSVG />
          </Icon>
        </TextLink>
        .
      </p>
    </div>
  </section>
)
