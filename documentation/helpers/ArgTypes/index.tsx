import { Tabs } from '@spark-ui/tabs'
import { ArgTypes as StorybookArgTypes } from '@storybook/blocks'
import type { FC } from 'react'

interface Props<T> {
  of?: T
  subcomponents?: Record<string, T>
}

export const ArgTypes = <T extends FC>({ of, subcomponents = {} }: Props<T>) => {
  const components = {
    [of?.displayName as string]: of,
    ...subcomponents,
  }

  return (
    <Tabs defaultValue={of?.displayName} orientation="vertical" className="sb-unstyled mt-xl">
      <Tabs.List>
        {Object.keys(components).map(name => (
          <Tabs.Trigger key={name} value={name}>
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {Object.entries(components).map(([name, component]) => (
        <Tabs.Content key={name} value={name} className="py-none">
          <StorybookArgTypes of={component} />
        </Tabs.Content>
      ))}
    </Tabs>
  )
}
