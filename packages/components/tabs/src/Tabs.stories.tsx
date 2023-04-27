import { Icon } from '@spark-ui/icon'
import { ConversationFill, HolidayFill, MailFill } from '@spark-ui/icons'
import { Meta, StoryFn } from '@storybook/react'
import type { ReactNode } from 'react'

import { Tabs } from '.'
import { TabsListProps } from './TabsList'
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
    <div className="shrink basis-auto overflow-auto">{createTabs()}</div>
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">{createTabs()}</div>
    <div className="shrink basis-auto overflow-auto">
      {createTabs({ rootProps: { intent: 'secondary' } })}
    </div>
  </div>
)

export const Size: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      {createTabs({ rootProps: { size: 'xs' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      {createTabs({ rootProps: { size: 'sm' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
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

export const Iconed: StoryFn = _args => (
  <div className="gap-lg flex flex-row">
    <div className="shrink basis-auto overflow-auto">
      {createTabs({
        rootProps: { defaultValue: 'tab2' },
        tabs: [
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
            disabled: true,
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
        ],
      })}
    </div>

    <div className="shrink basis-auto overflow-auto">
      {createTabs({
        rootProps: { defaultValue: 'tab2' },
        tabs: [
          {
            value: 'tab1',
            children: (
              <Icon size="sm">
                <MailFill />
              </Icon>
            ),
            content: 'Your inbox is empty',
            disabled: true,
          },
          {
            value: 'tab2',
            children: (
              <Icon size="sm">
                <ConversationFill />
              </Icon>
            ),
            content: 'Make some coffee',
            disabled: false,
          },
          {
            value: 'tab3',
            children: (
              <Icon size="sm">
                <HolidayFill />
              </Icon>
            ),
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
      {createTabs({ rootProps: { orientation: 'horizontal' } })}
    </div>

    <div className="shrink basis-auto overflow-auto">
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
      <div className="shrink basis-auto overflow-auto">{createTabs({ tabs: overflowTabs })}</div>

      <div className="shrink basis-auto overflow-auto">
        {createTabs({
          listProps: { loop: false },
          tabs: overflowTabs,
        })}
      </div>
    </div>
  )
}
