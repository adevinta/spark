import { Tabs } from '@spark-ui/tabs'
import { ArgTypes as StorybookArgTypes } from '@storybook/blocks'

interface Props {
  of: any
  subcomponents?: Record<string, any>
}

export const ArgTypes = ({ of, subcomponents = [] }: Props) => {
  const componentsList = {
    [of.displayName]: of,
    ...subcomponents,
  }

  return (
    <Tabs defaultValue={of.displayName} className="sb-unstyled">
      <Tabs.List>
        {Object.entries(componentsList).map(([name]) => (
          <Tabs.Trigger key={name} value={name} label={name} />
        ))}
      </Tabs.List>
      {Object.entries(componentsList).map(([name, component]) => (
        <Tabs.Content key={name} value={name}>
          <StorybookArgTypes of={component} />
        </Tabs.Content>
      ))}
    </Tabs>
  )
}
