import {
  Design,
  DesignLookup,
  Intent,
  IntentLookup,
  Picks,
  Shape,
  ShapeLookup,
  Size,
  SizeLookup,
} from './types'

function makeSizes<P extends Size[] = []>(
  sizes: P extends [] ? SizeLookup : Picks<SizeLookup, P>
): { size: P extends [] ? SizeLookup : Picks<SizeLookup, P> } {
  return {
    size: sizes,
  }
}

function makeIntents<P extends Intent[] = []>(
  intents: P extends [] ? IntentLookup : Picks<IntentLookup, P>
): { intent: P extends [] ? IntentLookup : Picks<IntentLookup, P> } {
  return {
    intent: intents,
  }
}

function makeDesigns<P extends Design[] = []>(
  designs: P extends [] ? DesignLookup : Picks<DesignLookup, P>
): { design: P extends [] ? DesignLookup : Picks<DesignLookup, P> } {
  return {
    design: designs,
  }
}

function makeShapes<P extends Shape[] = []>(
  shapes: P extends [] ? ShapeLookup : Picks<ShapeLookup, P>
): { shape: P extends [] ? ShapeLookup : Picks<ShapeLookup, P> } {
  return {
    shape: shapes,
  }
}

export { makeSizes, makeIntents, makeDesigns, makeShapes }
