import * as RadixTabs from '@radix-ui/react-tabs'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { ArrowVerticalLeft, ArrowVerticalRight } from '@spark-ui/icons'
import { forwardRef, type ReactElement, useEffect, useMemo, useRef, useState } from 'react'

import { useTabsContext } from './TabsContext'
import { listStyles, navigationArrowStyles, wrapperStyles } from './TabsList.styles'

export type TabsListProps = Omit<RadixTabs.TabsListProps, 'children'> & {
  children: ReactElement[]
}

const getSelectedTabIndex = (list: ReactElement[], selectedTab?: string) => {
  const matchingChild = list.find(elm => (elm?.props.value as string) === selectedTab)

  return matchingChild ? list.indexOf(matchingChild) : 0
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
      ...rest
    },
    ref
  ) => {
    const innerRef = useRef(null)
    const listRef = ref || innerRef
    const { orientation, selectedTab, setSelectedTab } = useTabsContext()
    const tabs = useRef<ReactElement[]>(children)

    const tabPivots = useMemo(() => {
      const selected = getSelectedTabIndex(children, selectedTab)
      const next = selected < children.length - 1 ? selected + 1 : 0
      const previous = selected > 0 ? selected - 1 : children.length - 1

      return { previous, selected, next }
    }, [children, selectedTab])

    const [shouldDisplayPrev, setShouldDisplayPrev] = useState(false)
    const [shouldDisplayNext, setShouldDisplayNext] = useState(false)

    // eslint-disable-next-line complexity
    useEffect(() => {
      const hasOverflow =
        typeof listRef !== 'function' && listRef.current
          ? listRef.current.scrollWidth > listRef.current.clientWidth
          : false

      setShouldDisplayPrev(
        orientation === 'horizontal' && hasOverflow && (loop || tabPivots.selected > 0)
      )
      setShouldDisplayNext(
        orientation === 'horizontal' && hasOverflow && (loop || tabPivots.next !== 0)
      )
    }, [loop, orientation, tabPivots, listRef])

    const handlePrevClick = () => setSelectedTab(tabs.current?.[tabPivots.previous]?.props.value)
    const handleNextClick = () => setSelectedTab(tabs.current?.[tabPivots.next]?.props.value)

    return (
      <div className={wrapperStyles()}>
        {shouldDisplayPrev && (
          <Button
            shape="square"
            intent="surface"
            size="sm"
            className={navigationArrowStyles()}
            onClick={handlePrevClick}
            disabled={tabPivots.previous === undefined}
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
