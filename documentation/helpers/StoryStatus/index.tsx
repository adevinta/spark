import { cva } from 'class-variance-authority'
import { ReactElement } from 'react'

const wrapperStyles = cva(
  ['sb-unstyled', 'shadow-normal', 'my-lg', 'rounded-md', 'p-md', 'shadow-normal'],
  {
    variants: {
      status: {
        draft: ['bg-error-container', 'text-on-error-container'],
        deprecated: ['bg-neutral-container', 'text-on-neutral-container'],
      },
    },
    defaultVariants: {
      status: 'draft' as const,
    },
  }
)

interface Props {
  status: 'draft' | 'final' | 'deprecated'
}

export const StoryStatus = ({ status }: Props): ReactElement | null => {
  if (status === 'final') {
    return null
  }

  const title = status === 'draft' ? 'Draft' : 'Deprecated'
  const description =
    status === 'draft'
      ? 'This documentation is a work in progress. It means it is subject to changes.'
      : 'This documentation describes a feature that no longer exists.'

  return (
    <div className={wrapperStyles({ status })}>
      <p className={'mb-sm text-l font-bold'}>{title}</p>
      <p className="text-m">{description}</p>
    </div>
  )
}
