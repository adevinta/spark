import { Subtitle } from '@docs/helpers/Subtitle'
import { Icon } from '@spark-ui/icon'
import { ConversationFill } from '@spark-ui/icons/dist/icons/ConversationFill'
import { HolidayFill } from '@spark-ui/icons/dist/icons/HolidayFill'
import { MailFill } from '@spark-ui/icons/dist/icons/MailFill'
import { Meta, StoryFn } from '@storybook/react'
import type { ReactNode } from 'react'

import { Tabs } from '.'
import type { TabsListProps } from './TabsList'
import type { TabsRootProps } from './TabsRoot'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
}

export default meta

export interface TabItem {
  children?: ReactNode
  value: string
  disabled?: boolean
  content: string
}

const defaultTabs = [
  {
    children: <span>Inbox</span>,
    value: 'tab1',
    disabled: false,
    content: 'Your inbox is empty',
  },
  {
    children: <span>Today</span>,
    value: 'tab2',
    disabled: false,
    content: 'Make some coffee',
  },
  {
    children: <span>Upcoming</span>,
    value: 'tab3',
    disabled: false,
    content: 'Order more coffee',
  },
]

const withIconTabs = [
  {
    value: 'tab1',
    children: (
      <>
        <Icon size="sm">
          <MailFill />
        </Icon>
        <span>Inbox</span>
      </>
    ),
    content: 'Your inbox is empty',
    disabled: false,
  },
  {
    children: (
      <>
        <Icon size="sm">
          <ConversationFill />
        </Icon>
        <span>Today</span>
      </>
    ),
    value: 'tab2',
    content: 'Make some coffee',
    disabled: false,
  },
  {
    children: (
      <>
        <Icon size="sm">
          <HolidayFill />
        </Icon>
        <span>Upcoming</span>
      </>
    ),
    value: 'tab3',
    content: 'Order more coffee',
    disabled: false,
  },
]

const withIconOnlyTabs = [
  {
    value: 'tab1',
    children: (
      <Icon size="sm">
        <MailFill />
      </Icon>
    ),
    content: 'Your inbox is empty',
    disabled: false,
  },
  {
    children: (
      <Icon size="sm">
        <ConversationFill />
      </Icon>
    ),
    value: 'tab2',
    content: 'Make some coffee',
    disabled: false,
  },
  {
    children: (
      <Icon size="sm">
        <HolidayFill />
      </Icon>
    ),
    value: 'tab3',
    content: 'Order more coffee',
    disabled: false,
  },
]

export const createTabs = ({
  rootProps = {},
  listProps = {},
  tabs = defaultTabs,
}: {
  rootProps?: TabsRootProps
  listProps?: Omit<TabsListProps, 'children'>
  tabs?: TabItem[]
} = {}) => {
  return (
    <Tabs defaultValue="tab1" {...rootProps}>
      <Tabs.List {...listProps}>
        {tabs.map(({ value, children, disabled }) => (
          <Tabs.Trigger key={value} value={value} disabled={disabled}>
            {children}
          </Tabs.Trigger>
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
    <div className="shrink basis-auto overflow-auto">
      <Subtitle>basic</Subtitle>
      {createTabs()}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <Subtitle>with icons</Subtitle>
      {createTabs({ tabs: withIconTabs, rootProps: { defaultValue: 'tab2' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <Subtitle>with icons only</Subtitle>
      {createTabs({ tabs: withIconOnlyTabs, rootProps: { defaultValue: 'tab3' } })}
    </div>
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      <Subtitle>primary (default)</Subtitle>
      {createTabs()}
    </div>
    <div className="shrink basis-auto overflow-auto">
      <Subtitle>secondary</Subtitle>
      {createTabs({ rootProps: { intent: 'secondary' } })}
    </div>
  </div>
)

export const Size: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      <Subtitle>xs</Subtitle>
      {createTabs({ rootProps: { size: 'xs' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <Subtitle>sm</Subtitle>
      {createTabs({ rootProps: { size: 'sm' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <Subtitle>md (default)</Subtitle>
      {createTabs({ rootProps: { size: 'md' } })}
    </div>
  </div>
)

export const State: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      {createTabs({
        rootProps: { defaultValue: 'tab2' },
        tabs: [
          {
            children: <span>Inbox</span>,
            value: 'tab1',
            content: 'Your inbox is empty',
            disabled: true,
          },
          {
            children: <span>Today</span>,
            value: 'tab2',
            content: 'Make some coffee',
            disabled: false,
          },
          {
            children: <span>Upcoming</span>,
            value: 'tab3',
            content: 'Order more coffee',
            disabled: false,
          },
        ],
      })}
    </div>
  </div>
)

export const Orientation: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      <Subtitle>horizontal (default)</Subtitle>
      {createTabs({ rootProps: { orientation: 'horizontal' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <Subtitle>vertical</Subtitle>
      {createTabs({ rootProps: { orientation: 'vertical' } })}
    </div>
  </div>
)

export const Overflow: StoryFn = _args => {
  const overflowTabs = [
    ...defaultTabs,
    {
      children: <span>Pending</span>,
      value: 'tab4',
      disabled: false,
      content: 'Wait for your coffee',
    },
    {
      children: <span>Blocked</span>,
      value: 'tab5',
      disabled: false,
      content: 'Something went wrong',
    },
    {
      children: <span>Sandbox</span>,
      value: 'tab6',
      disabled: false,
      content: 'Imagine your coffee',
    },
  ]

  return (
    <div className="gap-lg flex flex-row">
      <div className="shrink basis-auto overflow-auto">
        <Subtitle>with loop</Subtitle>
        {createTabs({
          listProps: { loop: true },
          tabs: overflowTabs,
        })}
      </div>

      <div className="shrink basis-auto overflow-auto">
        <Subtitle>without loop (default)</Subtitle>
        {createTabs({ tabs: overflowTabs })}
      </div>
    </div>
  )
}
