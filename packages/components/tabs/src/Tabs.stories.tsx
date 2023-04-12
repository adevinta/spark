import { ConversationFill, HolidayFill, MailFill } from '@spark-ui/icons'
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
    icon: MailFill,
  },
  {
    title: 'Today',
    value: 'tab2',
    icon: ConversationFill,
  },

  {
    title: 'Upcoming',
    value: 'tab3',
    icon: HolidayFill,
  },
]

const invokeTabs = (customProps: TabsRootProps = {}) => {
  return (
    <Tabs defaultValue="tab1" {...customProps}>
      <Tabs.List>
        {tabs.map(({ title, value }) => (
          <Tabs.Trigger key={value} value={value} label={title} />
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

export const State: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <Tabs defaultValue="tab2">
      <Tabs.List>
        {tabs.map(({ title, value }) => (
          <Tabs.Trigger key={value} value={value} label={title} disabled={value === 'tab1'} />
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
  </div>
)

export const Iconed: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <Tabs defaultValue="tab3">
      <Tabs.List>
        {tabs.map(({ title, value, icon }) => {
          const Icon = icon

          return (
            <Tabs.Trigger
              key={value}
              value={value}
              label={title}
              icon={<Icon />}
              disabled={value === 'tab1'}
            />
          )
        })}
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

    <Tabs defaultValue="tab3">
      <Tabs.List>
        {tabs.map(({ value, icon }) => {
          const Icon = icon

          return (
            <Tabs.Trigger key={value} value={value} icon={<Icon />} disabled={value === 'tab1'} />
          )
        })}
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
  </div>
)

export const Orientation: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    {invokeTabs({ orientation: 'horizontal' })}
    {invokeTabs({ orientation: 'vertical' })}
  </div>
)
