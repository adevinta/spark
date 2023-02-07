import merge from 'deepmerge'
import component from './component'

export function getComponentConfiguration(name: string, options = {}) {
  return getConfiguration(component, options, name)
}

function getConfiguration(configuration: Record<string, unknown>, options = {}, name?: string) {
  const result = merge.all(
    [
      configuration,
      name ? { build: { lib: { name } } } : {},
      options
    ],
    {}
  )

  return result
}