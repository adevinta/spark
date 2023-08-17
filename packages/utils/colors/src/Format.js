import { converter } from 'culori'

export class Format {
  #context = {}

  constructor(context) {
    this.#context = Object.assign(context)
  }

  get hex() {
    return converter('rgb')(this.#context)
  }

  get rgb() {
    return converter('rgb')(this.#context)
  }

  get hsl() {
    return converter('hsl')(this.#context)
  }

  get hwb() {
    return converter('hwb')(this.#context)
  }

  get lab() {
    return converter('lab')(this.#context)
  }

  get lch() {
    return converter('lch')(this.#context)
  }

  get oklab() {
    return converter('oklab')(this.#context)
  }

  get oklch() {
    return converter('oklch')(this.#context)
  }
}
