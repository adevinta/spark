import { Tabs } from '@spark-ui/tabs'
import { ArgTypes as StorybookArgTypes } from '@storybook/blocks'
import { type FC, type ReactNode, useEffect, useState } from 'react'

interface Props<T> {
  of: T
  description?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subcomponents?: Record<string, any> | null
}

const ComponentDescription = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="rounded-t-lg bg-surface bg-gradient-to-b from-info p-lg pb-none text-on-surface">
      <div className="rounded-lg bg-surface px-lg py-md shadow-sm">
        <p className="mb-md text-body-1 font-bold">{`<${name} />`}</p>
        <p className="text-body-2 italic">{children}</p>
      </div>
    </div>
  )
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

export const ArgTypes = <T extends FC>({ of, description, subcomponents = null }: Props<T>) => {
  const windowWidth = useWindowWidth()

  if (!subcomponents) return <StorybookArgTypes of={of} />

  const { displayName: name = 'Root' } = of // "Root" in case the root component is missing a displayName
  const subComponentsList = Object.entries(subcomponents)

  const tabsOrientation = windowWidth < 640 ? 'horizontal' : 'vertical'

  return (
    <Tabs
      defaultValue={name}
      orientation={tabsOrientation}
      className="sb-unstyled mt-xl overflow-hidden"
    >
      <Tabs.List className={tabsOrientation === 'horizontal' ? 'mb-md' : ''}>
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
