import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Icon } from '@spark-ui/icon'
import { ConversationFill } from '@spark-ui/icons/dist/icons/ConversationFill'
import { HolidayFill } from '@spark-ui/icons/dist/icons/HolidayFill'
import { MailFill } from '@spark-ui/icons/dist/icons/MailFill'
import type { Meta, StoryFn } from '@storybook/react'
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
  a11yLabel?: string
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
    a11yLabel: 'Inbox',
    content: 'Your inbox is empty',
    disabled: false,
  },
  {
    children: (
      <Icon size="sm">
        <ConversationFill />
      </Icon>
    ),
    a11yLabel: 'Today',
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
    a11yLabel: 'Upcoming',
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
        {tabs.map(({ value, children, disabled, a11yLabel }) => (
          <Tabs.Trigger key={value} value={value} disabled={disabled} aria-label={a11yLabel}>
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
  <div className="flex flex-row gap-lg">
    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>basic</StoryLabel>
      {createTabs()}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>with icons</StoryLabel>
      {createTabs({ tabs: withIconTabs, rootProps: { defaultValue: 'tab2' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>with icons only</StoryLabel>
      {createTabs({ tabs: withIconOnlyTabs, rootProps: { defaultValue: 'tab3' } })}
    </div>
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="flex flex-row gap-lg">
    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>basic (default)</StoryLabel>
      {createTabs()}
    </div>
    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>main</StoryLabel>
      {createTabs({ rootProps: { intent: 'main' } })}
    </div>
    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>support</StoryLabel>
      {createTabs({ rootProps: { intent: 'support' } })}
    </div>
  </div>
)

export const Size: StoryFn = _args => (
  <div className="flex flex-row gap-lg">
    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>xs</StoryLabel>
      {createTabs({ rootProps: { size: 'xs' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>sm</StoryLabel>
      {createTabs({ rootProps: { size: 'sm' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>md (default)</StoryLabel>
      {createTabs({ rootProps: { size: 'md' } })}
    </div>
  </div>
)

export const State: StoryFn = _args => (
  <div className="flex flex-row gap-lg">
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
  <div className="flex flex-row gap-lg">
    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>horizontal (default)</StoryLabel>
      {createTabs({ rootProps: { orientation: 'horizontal' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      <StoryLabel>vertical</StoryLabel>
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
    <div className="flex flex-row gap-lg">
      <div className="shrink basis-auto overflow-auto">
        <StoryLabel>with loop</StoryLabel>
        {createTabs({
          listProps: { loop: true },
          tabs: overflowTabs,
        })}
      </div>

      <div className="shrink basis-auto overflow-auto">
        <StoryLabel>without loop (default)</StoryLabel>
        {createTabs({ tabs: overflowTabs })}
      </div>
    </div>
  )
}
