import { cx } from 'class-variance-authority'

export const ratingStyles = cx(
  'inline-flex gap-sm',
  'peer-[.is-clicked]:shadow-none peer-focus-visible:u-ring',
  '[&_[data-star]:hover_~_[data-star]_>_div]:!w-none' /* 1 */
)

/**
 * 1. Display the remaining stars as outlined.
 * By 'remaining,' we mean the stars located to the right of the cursor
 */
