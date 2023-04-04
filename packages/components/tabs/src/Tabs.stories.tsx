import { Meta, StoryFn } from '@storybook/react'

import { Tabs } from '.'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    'Tabs.List': Tabs.List,
    'Tabs.Trigger': Tabs.Trigger,
    'Tabs.Content': Tabs.Content,
  },
}

export default meta

interface Tab {
  title: string
  value: string
}

const tabs: Tab[] = [
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

export const Default: StoryFn = _args => (
  <Tabs defaultValue="tab1">
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
