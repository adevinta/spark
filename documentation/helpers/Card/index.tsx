import { cva } from 'class-variance-authority'
import { type ReactNode } from 'react'

export const cardStyles = cva(
  [
    'sb-unstyled group',
    'inline-flex min-h-sz-96 w-sz-224 flex-col justify-between overflow-hidden rounded-md p-lg',
    'transition-all duration-200',
    'text-left text-body-1 font-bold text-on-support',
    'bg-gradient-to-br from-[#2118C9] to-[#FD398A] shadow',
    'outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
  ],
  {
    variants: {
      disabled: {
        true: 'opacity-dim-3 hover:cursor-not-allowed',
        false: 'hover:cursor-pointer hover:from-[#5952D6] hover:to-[#FE6BA7] hover:shadow-lg',
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
