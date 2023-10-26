import { tw } from '@spark-ui/internal-utils'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const emptyRemainingStarsOnHoverClass = cx('peer-hover:[&_>_div]:!w-none')

const ratingStarStyles = cva(
  ['peer', 'group', 'relative', 'after:block after:inset-none after:absolute'],
  {
    variants: {
      disabled: {
        true: 'opacity-dim-3',
        false: '',
      },
      readOnly: {
        true: '',
        false: '',
      },
      isLastItem: {
        true: '',
        false: '',
      },
      gap: {
        sm: '',
        md: '',
      },
    },
    compoundVariants: [
      {
        readOnly: false,
        disabled: false,
        className: cx(emptyRemainingStarsOnHoverClass, 'cursor-pointer'),
      },
      { gap: 'sm', isLastItem: false, className: tw('after:w-[calc(100%_+_theme(spacing.sm))]') },

      { gap: 'md', isLastItem: false, className: tw('after:w-[calc(100%_+_theme(spacing.md))]') },
    ],
    defaultVariants: {
      disabled: false,
      readOnly: false,
      isLastItem: false,
      gap: 'sm',
    },
  }
)

const ratingStarIconStyles = cva('', {
  variants: {
    size: {
      sm: 'text-caption-link',
      md: 'text-body-1',
      lg: 'text-display-1',
    },
    kind: {
      filled: [
        'text-main-variant',
        'group-[[data-part=star][data-hovered]]:text-main-variant-hovered',
      ],
      outlined: ['text-on-surface/dim-3'],
    },
  },
})

type RatingStarstylesProps = VariantProps<typeof ratingStarStyles>

export { ratingStarStyles, ratingStarIconStyles }
export type { RatingStarstylesProps }
