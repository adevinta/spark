export interface Validator<T> {
  validate(value: T): string | void
}
