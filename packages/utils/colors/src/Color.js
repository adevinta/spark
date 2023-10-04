import { parse, random } from 'culori'

import { Format } from './Format.js'
import { Mode } from './Mode.js'
import { serialize } from './serialize.js'
export class Color {
  #value = ''
  #mode = undefined

  constructor(value) {
    this.#mode = Mode.getFormat(value)
    this.#value = value

    return this
  }

  static random(mode) {
    // TODO:
    return serialize(random(mode))
  }

  static isValid(value) {
    return Boolean(Mode.getFormat(value))
  }

  get mode() {
    return this.#mode
  }

  set mode(mode) {
    this.#mode = mode

    return this
  }

  // get alpha() {
  //   return this.#alpha
  // }
  //
  // set alpha(value) {
  //   this.#alpha = value
  //
  //   return this
  // }

  set value(value) {
    this.#value = Object.assign(value)

    return this
  }

  get value() {
    return this.#value
  }

  get to() {
    return new Format(this.#value)
  }

  get inverse() {
    const color = parse(this.to.oklch)
    color.h = color.h + (180 % 360)
    const result = new Format(color)

    return new Color(result[this.#mode])
  }

  light(value) {
    const color = parse(this.to.oklch)
    color.l = value

    const result = new Format(color)

    return new Color(result?.[this.#mode])
  }

  chroma(value) {
    const color = parse(this.to.oklch)
    color.c = value

    const result = new Format(color)

    return new Color(result?.[this.#mode])
  }

  get on() {
    const color = parse(this.to.oklch)
    color.l = color.l > 0.5 ? 0 : 1

    const result = new Format(color)

    return new Color(result?.[this.#mode])
  }
}
