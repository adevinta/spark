type ExcludeNull<T> = {
  [K in keyof T]: Exclude<T[K], null>
}
