import * as RadixTabs from '@radix-ui/react-tabs'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { ArrowVerticalLeft, ArrowVerticalRight } from '@spark-ui/icons'
import React, { forwardRef, type ReactElement, useEffect, useMemo, useRef, useState } from 'react'

import { useTabsContext } from './TabsContext'
import { listStyles, navigationArrowStyles, wrapperStyles } from './TabsList.styles'
import { useResizeObserver } from './useResizeObserver'

export interface TabsListProps extends Omit<RadixTabs.TabsListProps, 'children'> {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean
  /**
   * When true, keyboard navigation will loop from last tab to first, and vice versa.
   * @default true
   */
  loop?: boolean
  children: ReactElement[]
}

const getSelectedTabIndex = (list: ReactElement[], selectedTab?: string) => {
  return list.findIndex(elm => (elm?.props.value as string) === selectedTab)
}

const getNextTabIndex = (list: ReactElement[], selectedTabIndex: number) => {
  if (selectedTabIndex < list.length - 1) {
    return list.findIndex(elm => list.indexOf(elm) >= selectedTabIndex + 1 && !elm.props.disabled)
  } else {
    return 0
  }
}

const getPreviousTabIndex = (list: ReactElement[], selectedTabIndex: number) => {
  if (selectedTabIndex > 0) {
    const match = list.filter(elm => list.indexOf(elm) < selectedTabIndex && !elm.props.disabled)

    return match ? list.indexOf(match[match.length - 1] as ReactElement) : list.length - 1
  } else {
    return list.length - 1
  }
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#list
       */
      asChild = false,
      loop = true,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const wrapperRef = useRef(null)
    const innerRef = useRef(null)
    const listRef = ref || innerRef
    const { orientation, selectedTab, setSelectedTab } = useTabsContext()
    const tabs = useRef<ReactElement[]>(children)

    const { width } = useResizeObserver(wrapperRef)

    const tabPivots = useMemo(() => {
      const selected = getSelectedTabIndex(tabs.current, selectedTab)
      const next = getNextTabIndex(tabs.current, selected)
      const previous = getPreviousTabIndex(tabs.current, selected)

      return { previous, selected, next }
    }, [tabs, selectedTab])

    const [shouldDisplayPrev, setShouldDisplayPrev] = useState(false)
    const [shouldDisplayNext, setShouldDisplayNext] = useState(false)

    // eslint-disable-next-line complexity
    useEffect(() => {
      const hasOverflow =
        listRef && 'current' in listRef && listRef.current
          ? listRef.current.scrollWidth > listRef.current.clientWidth
          : false

      setShouldDisplayPrev(
        orientation === 'horizontal' && hasOverflow && (loop || tabPivots.selected > 0)
      )
      setShouldDisplayNext(
        orientation === 'horizontal' && hasOverflow && (loop || tabPivots.next !== 0)
      )
    }, [loop, orientation, tabPivots, listRef, width])

    const handlePrevClick = () => setSelectedTab(tabs.current?.[tabPivots.previous]?.props.value)
    const handleNextClick = () => setSelectedTab(tabs.current?.[tabPivots.next]?.props.value)

    return (
      <div className={wrapperStyles({ className })} ref={wrapperRef}>
        {shouldDisplayPrev && (
          <Button
            shape="square"
            intent="surface"
            size="sm"
            className={navigationArrowStyles()}
            onClick={handlePrevClick}
            disabled={tabPivots.previous === undefined}
            aria-label="Previous"
          >
            <Icon size="sm">
              <ArrowVerticalLeft />
            </Icon>
          </Button>
        )}

        <RadixTabs.List
          ref={listRef}
          className={listStyles()}
          asChild={asChild}
          loop={loop}
          {...rest}
        >
          {children}
        </RadixTabs.List>

        {shouldDisplayNext && (
          <Button
            shape="square"
            intent="surface"
            size="sm"
            className={navigationArrowStyles()}
            onClick={handleNextClick}
            disabled={tabPivots.next === undefined}
            aria-label="Next"
          >
            <Icon size="sm">
              <ArrowVerticalRight />
            </Icon>
          </Button>
        )}
      </div>
    )
  }
)

TabsList.displayName = 'Tabs.List'
