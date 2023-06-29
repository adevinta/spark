import { Tabs } from '@spark-ui/tabs'
import { ArgTypes as StorybookArgTypes } from '@storybook/blocks'
import { type FC, type ReactNode } from 'react'

interface Props<T> {
  of: T
  description?: string
  subcomponents?: Record<string, any> | null
}

const ComponentDescription = ({ children }: { children: ReactNode }) => {
  return (
    <p className="rounded-md bg-primary-container px-lg py-md text-body-2 text-on-primary-container">
      {children}
    </p>
  )
}

export const ArgTypes = <T extends FC>({ of, description, subcomponents = null }: Props<T>) => {
  if (!subcomponents) return <StorybookArgTypes of={of} />

  const { displayName: name = 'Root' } = of // "Root" in case the root component is missing a displayName
  const subComponentsList = Object.entries(subcomponents)

  return (
    <Tabs defaultValue={name} orientation="vertical" className="sb-unstyled mt-xl">
      <Tabs.List>
        <Tabs.Trigger key={name} value={name}>
          {name}
        </Tabs.Trigger>
        <>
          {subComponentsList.map(([name]) => (
            <Tabs.Trigger key={name} value={name}>
              {name}
            </Tabs.Trigger>
          ))}
        </>
      </Tabs.List>

      <Tabs.Content key={name} value={name} className="py-none">
        {description && <ComponentDescription>{description}</ComponentDescription>}
        <StorybookArgTypes of={of} />
      </Tabs.Content>

      {subComponentsList.map(([name, { of, description }]) => {
        return (
          <Tabs.Content key={name} value={name} className="py-none">
            {description && <ComponentDescription>{description}</ComponentDescription>}
            <StorybookArgTypes of={of} />
          </Tabs.Content>
        )
      })}
    </Tabs>
  )
}
