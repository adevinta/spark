import { LinkBox } from '@spark-ui/link-box'
import { cx } from 'class-variance-authority'

interface Props {
  children: string
  description?: string
  href?: string
  img?: string
  isExternalLink?: boolean
  className?: string
}

export const ComponentCard = ({ children, description, img, href, className }: Props) => {
  return (
    <LinkBox className="space-y-md" asChild>
      <article
        className={cx(
          'sb-unstyled border-sm border-outline p-lg hover:bg-surface-hovered',
          className
        )}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-neutral">
          <img
            className="size-full object-cover"
            src={img || 'https://picsum.photos/id/366/200/200'}
            alt={children}
          />
        </div>

        <div className="space-y-none">
          <h4 className="mb-md text-info">
            <LinkBox.Link className="line-clamp-1 text-headline-2" href={href}>
              {children}
            </LinkBox.Link>
          </h4>

          <p className="line-clamp-2 break-words text-body-2">{description}</p>
        </div>
      </article>
    </LinkBox>
  )
}
