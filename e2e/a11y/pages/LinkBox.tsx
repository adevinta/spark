import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { FavoriteOutline } from '@spark-ui/icons/dist/icons/FavoriteOutline'
import { LinkBox } from '@spark-ui/link-box'
import { TextLink } from '@spark-ui/text-link'
import React from 'react'

export const A11yLinkBox = () => (
  <section>
    <div>
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

          <div className="space-y-0">
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
  </section>
)
