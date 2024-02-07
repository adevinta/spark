import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { FavoriteOutline } from '@spark-ui/icons/dist/icons/FavoriteOutline'
import { Meta, StoryFn } from '@storybook/react'

import { LinkBox } from '.'

const meta: Meta<typeof LinkBox> = {
  title: 'Experimental/LinkBox',
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
            <LinkBox.Overlay className="line-clamp-1 text-headline-2" href="#">
              Title
            </LinkBox.Overlay>
          </h2>

          <p className="line-clamp-2 text-body-1">Description</p>
        </div>
      </article>
    </LinkBox>
  </div>
)

export const Nesting: StoryFn = _args => (
  <div className="max-w-sz-256">
    <LinkBox className="space-y-md" asChild>
      <article>
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-neutral shadow-md">
          <img className="size-full" src="https://picsum.photos/200/200" alt="Card image" />

          <div className="absolute bottom-md right-md z-raised">
            <IconButton shape="pill" aria-label="Like">
              <Icon>
                <FavoriteOutline />
              </Icon>
            </IconButton>
          </div>
        </div>

        <div className="space-y-none">
          <h2>
            <LinkBox.Overlay className="line-clamp-1 text-headline-2" href="#">
              Title
            </LinkBox.Overlay>
          </h2>

          <p className="line-clamp-2 text-body-1">Description</p>

          <a className="text-body-2" href="/">
            Read more
          </a>
        </div>
      </article>
    </LinkBox>
  </div>
)
