import { VariantLookup } from './types'

function makeVariants<Variant extends 'design' | 'intent' | 'shape' | 'size'>(
  variants: Partial<VariantLookup[Variant]>
): Partial<VariantLookup[Variant]> {
  return variants
}

export { makeVariants }
