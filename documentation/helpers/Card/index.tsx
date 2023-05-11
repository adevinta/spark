import { cva } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const cardStyles = cva(
  [
    'sb-unstyled group',
    'p-lg w-sz-224 min-h-sz-96 inline-flex flex-col justify-between overflow-hidden rounded-md',
    'transition-all duration-200',
    '!text-on-secondary text-body-1 text-left font-bold',
    'from-primary to-secondary bg-gradient-to-br shadow',
    'focus-visible:ring-outline-high outline-none focus-visible:ring-2',
  ],
  {
    variants: {
      disabled: {
        true: 'opacity-dim-3 hover:cursor-not-allowed',
        false:
          'hover:from-primary-hovered hover:to-secondary-hovered hover:cursor-pointer hover:shadow-lg',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

export const descriptionStyles = cva(
  [
    'text-caption font-regular',
    'translate-y-[calc(100%+16px)] opacity-0',
    'transition-all duration-300 ease-out',
  ],
  {
    variants: {
      disabled: {
        false: 'group-hover:translate-y-none group-hover:opacity-[1]',
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
      {children}
      {description && <p className={descriptionStyles(rest)}>{description}</p>}
    </a>
  )
}
