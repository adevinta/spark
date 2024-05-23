import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { FavoriteOutline } from '@spark-ui/icons/dist/icons/FavoriteOutline'
import { TextLink } from '@spark-ui/text-link'
import { Meta, StoryFn } from '@storybook/react'

import { LinkBox } from '.'

const meta: Meta<typeof LinkBox> = {
  title: 'Components/LinkBox',
  component: LinkBox,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="max-w-sz-256">
    <LinkBox className="space-y-md" asChild>
      <article>
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-neutral shadow-md">
          <img className="size-full" src="https://picsum.photos/200/200" alt="" />
        </div>

        <div className="space-y-none">
          <h2>
            <LinkBox.Link className="line-clamp-1 text-headline-2" href="#">
              Title
            </LinkBox.Link>
          </h2>

          <p className="line-clamp-2 text-body-1">Description</p>
        </div>
      </article>
    </LinkBox>
  </div>
)

export const Nesting: StoryFn = _args => (
  <div className="max-w-sz-256">
    <LinkBox asChild>
      <article className="space-y-md">
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-neutral shadow-md">
          <img className="size-full" src="https://picsum.photos/200/200" alt="Card image" />

          <LinkBox.Raised>
            <IconButton shape="pill" aria-label="Like" className="!absolute bottom-md right-md">
              <Icon>
                <FavoriteOutline />
              </Icon>
            </IconButton>
          </LinkBox.Raised>
        </div>

        <div className="space-y-none">
          <h2>
            <LinkBox.Link className="line-clamp-1 text-headline-2" href="#">
              Title
            </LinkBox.Link>
          </h2>

          <p className="text-body-1">
            <span>Read about </span>
            <LinkBox.Raised>
              <TextLink href="https://en.wikipedia.org/wiki/Kitten" target="_blank">
                kittens
              </TextLink>
            </LinkBox.Raised>
            <span> and </span>
            <LinkBox.Raised>
              <TextLink href="https://en.wikipedia.org/wiki/Puppy" target="_blank">
                puppies
              </TextLink>
            </LinkBox.Raised>
            <span>. </span>
          </p>
        </div>
      </article>
    </LinkBox>
  </div>
)
