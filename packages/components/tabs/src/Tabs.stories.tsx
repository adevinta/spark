import { Meta, StoryFn } from '@storybook/react'

import { Tabs } from '.'
import type { TabsRootProps } from './TabsRoot'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
}

export default meta

const tabs = [
  {
    title: 'Inbox',
    value: 'tab1',
  },
  {
    title: 'Today',
    value: 'tab2',
  },

  {
    title: 'Upcoming',
    value: 'tab3',
  },
]

const invokeTabs = (customProps: TabsRootProps = {}) => {
  return (
    <Tabs defaultValue="tab1" {...customProps}>
      <Tabs.List>
        {tabs.map(({ title, value }) => (
          <Tabs.Trigger key={value} value={value}>
            <span>{title}</span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map(({ value }) => (
        <Tabs.Content key={value} value={value}>
          <span>
            {
              {
                tab1: 'Your inbox is empty',
                tab2: 'Make some coffee',
                tab3: 'Order more coffee',
              }[value]
            }
          </span>
        </Tabs.Content>
      ))}
    </Tabs>
  )
}

export const Default: StoryFn = _args => invokeTabs({ size: 'xs' })

export const Intent: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    {invokeTabs()}
    {invokeTabs({ intent: 'secondary' })}
  </div>
)

export const Size: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    {invokeTabs({ size: 'xs' })}

    {invokeTabs({ size: 'sm' })}

    {invokeTabs({ size: 'md' })}
  </div>
)
