import { parse, random } from 'culori'

import { Format } from './Format.js'
import { Mode } from './Mode.js'
import { serialize } from './serialize.js'
export class Color {
  #value = {}
  #alpha = undefined
  #mode = undefined

  constructor(value) {
    const mode = Mode.getFormat(value)
    const result = parse(value)
    if (result) {
      const { mode: _mode, alpha, ...rest } = result

      this.#mode = mode
      this.#alpha = alpha
      this.#value = Object.assign(rest)
    }
  }

  static random() {
    const result = random()
    const { mode, alpha, ...value } = result
    const color = new Color()
    color.value(value)
    color.alpha(alpha)
    color.mode(mode)

    return color
  }

  get r() {
    return [Mode.RGB].includes(this.#mode) ? this.#value.r * 255 : null
  }

  set r(value) {
    if ((this.#mode = Mode.RGB)) this.#value.r = value / 255

    return this
  }

  get g() {
    return [Mode.RGB].includes(this.#mode) ? this.#value.r * 255 : null
  }

  set g(value) {
    if ((this.#mode = Mode.RGB)) this.#value.g = value / 255

    return this
  }

  get b() {
    return [Mode.RGB].includes(this.#mode) ? this.#value.r * 255 : null
  }

  set b(value) {
    if ((this.#mode = Mode.RGB)) this.#value.b = value / 255

    return this
  }

  get mode() {
    return this.#mode
  }

  set mode(mode) {
    this.#mode = mode

    return this
  }

  get alpha() {
    return this.#alpha
  }

  set alpha(value) {
    this.#alpha = value

    return this
  }

  get css() {
    serialize({ mode: this.#mode, alpha: this.#alpha, ...this.#value })
  }

  set value(value) {
    this.#value = Object.assign(value)

    return this
  }

  get value() {
    return this.#value
  }

  // get inverse() {
  //   const color = this.to.oklch
  //   color.h = color.h + (180 % 360)
  //   const inverse = new Color(serialize('oklch')(color))
  //   // return inverse.to.
  // }

  get to() {
    return new Format({ mode: this.#mode, alpha: this.#alpha, ...this.#value })
  }
}
