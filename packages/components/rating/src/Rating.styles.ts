import { cx } from 'class-variance-authority'

export const ratingStyles = cx(
  'flex',
  'peer-[[data-part=input][data-clicked]]:shadow-none peer-focus-visible:u-ring',
  '[&_[data-part=star]:hover_~_[data-part=star]_>_div]:!w-none' /* 1 */
)

/**
 * 1. Display the remaining stars as outlined.
 * By 'remaining', we mean the stars located to the right of the cursor
 */
