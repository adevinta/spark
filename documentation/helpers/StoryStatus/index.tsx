import { cva } from 'class-variance-authority'
import { ReactElement } from 'react'

const wrapperStyles = cva(['sb-unstyled', 'my-lg', 'rounded-md', 'p-lg'], {
  variants: {
    status: {
      draft: ['bg-error', 'text-on-error'],
      deprecated: ['bg-neutral', 'text-on-neutral'],
    },
  },
  defaultVariants: {
    status: 'draft' as const,
  },
})

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
      <p className={'mb-sm text-headline-2 font-bold'}>{title}</p>
      <p className="text-caption">{description}</p>
    </div>
  )
}
