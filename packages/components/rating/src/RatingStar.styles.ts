import { cva, cx, type VariantProps } from 'class-variance-authority'

const emptyRemainingStarsOnHoverClass = cx('peer-hover:[&_>_div]:!w-none')

const ratingStarStyles = cva(
  ['peer', 'after:inset-none', 'group', 'relative', 'after:block after:absolute'],
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
      gap: {
        sm: ['after:w-[calc(100%_+_theme(spacing.sm))]', 'last-of-type:after:content-none'],
        md: ['after:w-[calc(100%_+_theme(spacing.md))]', 'last-of-type:after:content-none'],
      },
    },
    compoundVariants: [
      {
        readOnly: false,
        disabled: false,
        className: cx(emptyRemainingStarsOnHoverClass, 'cursor-pointer'),
      },
    ],
    defaultVariants: {
      disabled: false,
      readOnly: false,
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
    design: {
      filled: [
        'text-main-variant',
        'group-[[data-part=star][data-hovered]]:text-main-variant-hovered',
      ],
      outlined: ['text-on-surface/dim-3'],
    },
  },
})

type RatingStarstylesProps = Omit<VariantProps<typeof ratingStarStyles>, 'gap'>
type RatingStarIconStylesProps = Omit<VariantProps<typeof ratingStarIconStyles>, 'design'>

export { ratingStarStyles, ratingStarIconStyles }
export type { RatingStarstylesProps, RatingStarIconStylesProps }
