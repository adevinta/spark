import { Picks, VariantLookup } from './types'

/* eslint-disable space-before-function-paren */
function makeVariants<
  Variant extends 'design' | 'intent' | 'shape' | 'size',
  P extends (keyof VariantLookup[Variant])[] = []
>(
  variants: P extends [] ? VariantLookup[Variant] : Picks<VariantLookup[Variant], P>
): P extends [] ? VariantLookup[Variant] : Picks<VariantLookup[Variant], P> {
  return variants
}

export { makeVariants }
