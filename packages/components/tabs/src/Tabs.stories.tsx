import { ConversationFill, HolidayFill, MailFill } from '@spark-ui/icons'
import { Meta, StoryFn } from '@storybook/react'

import { Tabs } from '.'
import type { TabsRootProps } from './TabsRoot'
import type { TabsTriggerProps } from './TabsTrigger'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
}

export default meta

interface TabItem {
  title?: string
  value: string
  disabled?: boolean
  icon?: TabsTriggerProps['icon']
  content: string
}

const defaultTabs = [
  {
    title: 'Inbox',
    value: 'tab1',
    disabled: false,
    content: 'Your inbox is empty',
  },
  {
    title: 'Today',
    value: 'tab2',
    disabled: false,
    content: 'Make some coffee',
  },
  {
    title: 'Upcoming',
    value: 'tab3',
    disabled: false,
    content: 'Order more coffee',
  },
]

const invokeTabs = (customProps: TabsRootProps = {}, tabs: TabItem[] = defaultTabs) => {
  return (
    <Tabs defaultValue="tab1" {...customProps}>
      <Tabs.List>
        {tabs.map(({ title, value, icon, disabled }) => (
          <Tabs.Trigger key={value} value={value} label={title} icon={icon} disabled={disabled} />
        ))}
      </Tabs.List>

      {tabs.map(({ content, value }) => (
        <Tabs.Content key={value} value={value}>
          <p>{content}</p>
        </Tabs.Content>
      ))}
    </Tabs>
  )
}

export const Default: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">{invokeTabs({ size: 'xs' })}</div>
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">{invokeTabs()}</div>
    <div className="shrink basis-auto overflow-auto">{invokeTabs({ intent: 'secondary' })}</div>
  </div>
)

export const Size: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">{invokeTabs({ size: 'xs' })}</div>

    <div className="shrink basis-auto overflow-auto">{invokeTabs({ size: 'sm' })}</div>

    <div className="shrink basis-auto overflow-auto">{invokeTabs({ size: 'md' })}</div>
  </div>
)

export const State: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      {invokeTabs({ defaultValue: 'tab2' }, [
        {
          title: 'Inbox',
          value: 'tab1',
          content: 'Your inbox is empty',
          disabled: true,
        },
        {
          title: 'Today',
          value: 'tab2',
          content: 'Make some coffee',
          disabled: false,
        },
        {
          title: 'Upcoming',
          value: 'tab3',
          content: 'Order more coffee',
          disabled: false,
        },
      ])}
    </div>
  </div>
)

export const Iconed: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      {invokeTabs({ defaultValue: 'tab2' }, [
        {
          title: 'Inbox',
          value: 'tab1',
          icon: <MailFill />,
          content: 'Your inbox is empty',
          disabled: true,
        },
        {
          title: 'Today',
          value: 'tab2',
          icon: <ConversationFill />,
          content: 'Make some coffee',
          disabled: false,
        },
        {
          title: 'Upcoming',
          value: 'tab3',
          icon: <HolidayFill />,
          content: 'Order more coffee',
          disabled: false,
        },
      ])}
    </div>

    <div className="shrink basis-auto overflow-auto">
      {invokeTabs({ defaultValue: 'tab2' }, [
        {
          value: 'tab1',
          icon: <MailFill />,
          content: 'Your inbox is empty',
          disabled: true,
        },
        {
          value: 'tab2',
          icon: <ConversationFill />,
          content: 'Make some coffee',
          disabled: false,
        },
        {
          value: 'tab3',
          icon: <HolidayFill />,
          content: 'Order more coffee',
          disabled: false,
        },
      ])}
    </div>
  </div>
)

export const Orientation: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      {invokeTabs({ orientation: 'horizontal' })}
    </div>

    <div className="shrink basis-auto overflow-auto">{invokeTabs({ orientation: 'vertical' })}</div>
  </div>
)

export const Overflow: StoryFn = _args => {
  const overflowTabs = [
    ...defaultTabs,
    {
      title: 'Pending',
      value: 'tab4',
      disabled: false,
      content: 'Wait for your coffee',
    },
    {
      title: 'Blocked',
      value: 'tab5',
      disabled: false,
      content: 'Something went wrong',
    },
    {
      title: 'Sandbox',
      value: 'tab6',
      disabled: false,
      content: 'Imagine your coffee',
    },
  ]

  return (
    <div className="gap-lg flex flex-row">
      <div className="shrink basis-auto overflow-auto">{invokeTabs({}, overflowTabs)}</div>

      <div className="shrink basis-auto overflow-auto">
        <Tabs defaultValue="tab1">
          <Tabs.List loop={false}>
            {overflowTabs.map(({ title, value, disabled }) => (
              <Tabs.Trigger key={value} value={value} label={title} disabled={disabled} />
            ))}
          </Tabs.List>

          {overflowTabs.map(({ content, value }) => (
            <Tabs.Content key={value} value={value}>
              <p>{content}</p>
            </Tabs.Content>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
