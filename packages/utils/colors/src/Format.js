import { converter, formatCss, formatHex, formatHex8, formatHsl, formatRgb } from 'culori'

export class Format {
  #context = {}

  constructor(context) {
    this.#context = typeof context === 'string' ? context : formatCss(context)

    return this
  }

  get hex() {
    return formatHex(this.#context)
  }

  get hex8() {
    return formatHex8(this.#context)
  }

  get rgb() {
    return formatRgb(this.#context)
  }

  get hsl() {
    return formatHsl('hsl')(this.#context)
  }

  get hwb() {
    return formatCss(converter('hwb')(this.#context))
  }

  get lab() {
    return formatCss(converter('lab')(this.#context))
  }

  get lch() {
    return formatCss(converter('lch')(this.#context))
  }

  get oklab() {
    return formatCss(converter('oklab')(this.#context))
  }

  get oklch() {
    return formatCss(converter('oklch')(this.#context))
  }
}
