/* eslint-disable max-nested-callbacks */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockResizeObserver } from 'jsdom-testing-mocks'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { createTabs, type TabItem } from './Tabs.stories'

const tabs: TabItem[] = [
  {
    title: 'Yesterday',
    value: 'tab1',
    content: 'Nothing happened',
  },
  {
    title: 'Today',
    value: 'tab2',
    content: 'Make things happen!',
  },
]

const tabsWithIcons = [
  {
    icon: <i title="icon-1" />,
    value: 'tab1',
    content: 'Nothing happened',
  },
  {
    icon: <i title="icon-2" />,
    value: 'tab2',
    content: 'Make things happen!',
  },
]

const tabsWithOverflow = [
  { title: 'One', value: 'tab1', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Two', value: 'tab2', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Three', value: 'tab3', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Four', value: 'tab4', content: 'Lorem ipsum dolor sit amet', disabled: true },
  { title: 'Five', value: 'tab5', content: 'Lorem ipsum dolor sit amet', disabled: true },
  { title: 'Six', value: 'tab6', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Seven', value: 'tab7', content: 'Lorem ipsum dolor sit amet' },
]

describe('Tabs', () => {
  beforeAll(() => {
    mockResizeObserver()
  })

  it('should render tabs and handle callback on value change', async () => {
    const user = userEvent.setup()
    const rootProps = { defaultValue: 'tab1', onValueChange: vi.fn() }

    render(createTabs({ tabs, rootProps }))

    expect(screen.getByText('Yesterday')).toBeInTheDocument()

    await user.click(screen.getByText('Today'))

    expect(rootProps.onValueChange).toHaveBeenCalledTimes(1)
    expect(rootProps.onValueChange).toHaveBeenCalledWith('tab2')
  })

  it('should not trigger any event on disabled tab item click', async () => {
    const user = userEvent.setup()
    const rootProps = { defaultValue: 'tab1', onValueChange: vi.fn() }
    const tabsWithDisabled = [
      ...tabs,
      { title: 'Tomorrow', value: 'tab3', content: 'Things will happen', disabled: true },
    ]

    render(createTabs({ tabs: tabsWithDisabled, rootProps }))

    await user.click(screen.getByText('Tomorrow'))

    expect(rootProps.onValueChange).not.toHaveBeenCalled()
  })

  it('should render tabs with icons only as tab triggers', () => {
    render(createTabs({ tabs: tabsWithIcons }))

    expect(screen.getByTitle('icon-1')).toBeInTheDocument()
    expect(screen.getByTitle('icon-2')).toBeInTheDocument()
  })

  describe('overflow', () => {
    beforeAll(() => {
      vi.stubGlobal('innerWidth', 100)

      Object.defineProperty(HTMLDivElement.prototype, 'clientWidth', {
        value: 100,
        writable: true,
      })

      Object.defineProperty(HTMLDivElement.prototype, 'scrollWidth', {
        value: 200,
        writable: true,
      })
    })

    it('should display navigation arrows on overflow and navigate on click', async () => {
      const user = userEvent.setup()
      render(createTabs({ tabs: tabsWithOverflow }))

      await user.click(screen.getByLabelText('Next'))

      expect(screen.getByText('One').parentNode).toHaveAttribute('data-state', 'inactive')
      expect(screen.getByText('Two').parentNode).toHaveAttribute('data-state', 'active')

      await user.click(screen.getByLabelText('Previous'))

      expect(screen.getByText('One').parentNode).toHaveAttribute('data-state', 'active')
      expect(screen.getByText('Two').parentNode).toHaveAttribute('data-state', 'inactive')
    })

    it('should not display navigation arrows on vertical orientation', () => {
      render(
        createTabs({
          tabs: tabsWithOverflow,
          rootProps: { orientation: 'vertical' },
        })
      )

      expect(screen.queryByLabelText('Previous')).not.toBeInTheDocument()
      expect(screen.queryByLabelText('Next')).not.toBeInTheDocument()
    })

    it('should not display "previous" arrow if selected tab is first one on disabled loop navigation', () => {
      render(
        createTabs({
          tabs: tabsWithOverflow,
          rootProps: { defaultValue: 'tab1' },
          listProps: { loop: false },
        })
      )

      expect(screen.queryByLabelText('Previous')).not.toBeInTheDocument()
      expect(screen.getByLabelText('Next')).toBeInTheDocument()
    })

    it('should not take care of disabled item on arrow click', async () => {
      const user = userEvent.setup()
      render(
        createTabs({
          tabs: tabsWithOverflow,
          rootProps: { defaultValue: 'tab3' },
        })
      )

      await user.click(screen.getByLabelText('Next'))

      expect(screen.getByText('Four').parentNode).not.toHaveAttribute('data-state', 'active')
      expect(screen.getByText('Six').parentNode).toHaveAttribute('data-state', 'active')
    })
  })
})
