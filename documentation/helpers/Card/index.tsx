import { cva } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const cardStyles = cva(
  [
    'sb-unstyled',
    'inline-flex w-sz-224 flex-col justify-between overflow-hidden rounded-md p-md shadow',
    'transition-all duration-200',
    'text-left text-body-1 font-bold text-on-basic',
    'bg-gradient-to-br from-main to-basic',
    'outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
  ],
  {
    variants: {
      disabled: {
        true: 'opacity-dim-3 hover:cursor-not-allowed',
        false: 'hover:cursor-pointer hover:shadow-lg',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

interface Props {
  children: ReactNode
  description?: string
  href?: string
  isExternalLink?: boolean
}

export const Card = ({ children, description, href, isExternalLink = false, ...rest }: Props) => {
  const dynamicProps = isExternalLink
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : {}

  return (
    <a className={cardStyles(rest)} href={href} {...dynamicProps}>
      <div className="sb-unstyled h-full rounded-md bg-surface p-md text-on-surface">
        {children}

        {description && (
          <>
            <hr className="sb-unstyled my-md border-on-surface" />
            <p className="text-caption font-regular">{description}</p>
          </>
        )}
      </div>
    </a>
  )
}
