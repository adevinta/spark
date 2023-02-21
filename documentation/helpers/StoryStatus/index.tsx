import { ReactElement } from 'react'
import { cva } from 'class-variance-authority'

const wrapperStyles = cva(
  ['sb-unstyled', 'shadow-normal', 'my-l', 'rounded-s', 'p-m', 'shadow-normal'],
  {
    variants: {
      status: {
        draft: ['bg-error-container', 'text-on-error-container'],
        deprecated: ['bg-neutral-container', 'text-on-neutral-container'],
      },
    },
    defaultVariants: {
      status: 'draft',
    },
  }
)

interface Props {
  status: 'draft' | 'final' | 'deprecated'
}

export const StoryStatus = ({ status }: Props): ReactElement | null => {
  if (status === 'final') return null

  const title = status === 'draft' ? 'Draft' : 'Deprecated'
  const description =
    status === 'draft'
      ? 'This documentation is a work in progress. It means it is subject to changes.'
      : 'This documentation describes a feature that no longer exists.'

  return (
    <div className={wrapperStyles({ status })}>
      <p className={'mb-s text-l font-bold'}>{title}</p>
      <p className="text-m">{description}</p>
    </div>
  )
}
