import { Tabs } from '@spark-ui/tabs'
import { ArgTypes as StorybookArgTypes } from '@storybook/blocks'
import { type FC, type ReactNode } from 'react'

interface Props<T> {
  of: T
  description?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subcomponents?: Record<string, any> | null
}

const ComponentDescription = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="rounded-t-lg bg-surface bg-gradient-to-b from-info via-transparent via-80% to-transparent p-[16px] pb-none text-on-surface">
      <div className="rounded-lg bg-surface px-lg py-md shadow-sm">
        <p className="mb-md text-body-1 font-bold">{`<${name} />`}</p>
        <p className="text-body-2 italic">{children}</p>
      </div>
    </div>
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
        {description && <ComponentDescription name={name}>{description}</ComponentDescription>}
        <StorybookArgTypes of={of} />
      </Tabs.Content>

      {subComponentsList.map(([name, { of, description }]) => {
        return (
          <Tabs.Content key={name} value={name} className="py-none">
            {description && <ComponentDescription name={name}>{description}</ComponentDescription>}
            <StorybookArgTypes of={of} />
          </Tabs.Content>
        )
      })}
    </Tabs>
  )
}
