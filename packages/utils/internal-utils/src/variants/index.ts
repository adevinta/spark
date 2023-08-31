import { Picks, VariantLookup } from './types'

function makeVariants<
  Variant extends 'design' | 'intent' | 'shape' | 'size',
  /* eslint-disable-next-line space-before-function-paren */
  P extends (keyof VariantLookup[Variant])[] = [],
>(
  variants: P extends [] ? VariantLookup[Variant] : Picks<VariantLookup[Variant], P>
): P extends [] ? VariantLookup[Variant] : Picks<VariantLookup[Variant], P> {
  return variants
}

export { makeVariants }
