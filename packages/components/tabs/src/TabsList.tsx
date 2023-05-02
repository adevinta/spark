/* eslint-disable max-lines-per-function */
import * as RadixTabs from '@radix-ui/react-tabs'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { ArrowVerticalLeft } from '@spark-ui/icons/dist/icons/ArrowVerticalLeft'
import { ArrowVerticalRight } from '@spark-ui/icons/dist/icons/ArrowVerticalRight'
import { forwardRef, type ReactElement, useCallback, useEffect, useRef, useState } from 'react'

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
   * @default false
   */
  loop?: boolean
  children: ReactElement[]
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#list
       */
      asChild = false,
      loop = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const wrapperRef = useRef(null)
    const innerRef = useRef(null)
    const listRef = ref || innerRef
    const { orientation } = useTabsContext()

    const { width } = useResizeObserver(wrapperRef)

    const [withArrows, setWithArrows] = useState<
      Record<'prev' | 'next', 'visible' | 'hidden' | 'disabled'>
    >({ prev: 'hidden', next: 'hidden' })

    useEffect(() => {
      /**
       * Show/hide arrows
       */
      /* istanbul ignore if -- @preserve */
      if (!('current' in listRef) || !listRef.current) {
        return
      }

      if (orientation !== 'horizontal') {
        setWithArrows({ prev: 'hidden', next: 'hidden' })
      } else {
        setWithArrows({
          prev: listRef.current.scrollWidth > listRef.current.clientWidth ? 'visible' : 'hidden',
          next: listRef.current.scrollWidth > listRef.current.clientWidth ? 'visible' : 'hidden',
        })
      }
    }, [orientation, listRef, width])

    useEffect(() => {
      /**
       * Enable/disable arrows
       */
      /* istanbul ignore if -- @preserve */
      if (!('current' in listRef) || !listRef.current || withArrows.prev === 'hidden' || loop) {
        return
      }

      const toggleArrowsVisibility = (target: HTMLDivElement) => {
        setWithArrows({
          prev: target.scrollLeft > 0 ? 'visible' : 'disabled',
          next:
            target.scrollLeft + target.clientWidth < target.scrollWidth ? 'visible' : 'disabled',
        })
      }

      const currentList = listRef.current

      toggleArrowsVisibility(currentList)

      currentList.addEventListener('scroll', ({ target }) =>
        toggleArrowsVisibility(target as HTMLDivElement)
      )

      return () =>
        currentList.removeEventListener('scroll', ({ target }) =>
          toggleArrowsVisibility(target as HTMLDivElement)
        )
    }, [listRef, withArrows.prev, loop])

    const handlePrevClick = useCallback(() => {
      /* istanbul ignore if -- @preserve */
      if (!('current' in listRef) || !listRef.current) {
        return
      }

      const shouldLoopForward = loop && listRef.current.scrollLeft <= 0

      listRef.current.scrollTo({
        left: shouldLoopForward
          ? listRef.current.scrollLeft + listRef.current.scrollWidth - listRef.current.clientWidth
          : listRef.current.scrollLeft - listRef.current.clientWidth,
        behavior: 'smooth',
      })
    }, [listRef, loop])

    const handleNextClick = useCallback(() => {
      /* istanbul ignore if -- @preserve */
      if (!('current' in listRef) || !listRef.current) {
        return
      }

      const shouldLoopBackward =
        loop &&
        listRef.current.scrollLeft + listRef.current.clientWidth >= listRef.current.scrollWidth

      listRef.current.scrollTo({
        left: shouldLoopBackward ? 0 : listRef.current.scrollLeft + listRef.current.clientWidth,
        behavior: 'smooth',
      })
    }, [listRef, loop])

    return (
      <div className={wrapperStyles({ className })} ref={wrapperRef}>
        {withArrows.prev !== 'hidden' && (
          <Button
            shape="square"
            intent="surface"
            size="sm"
            className={navigationArrowStyles()}
            onClick={handlePrevClick}
            disabled={withArrows.prev === 'disabled'}
            aria-label="Scroll left"
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

        {withArrows.next !== 'hidden' && (
          <Button
            shape="square"
            intent="surface"
            size="sm"
            className={navigationArrowStyles()}
            onClick={handleNextClick}
            disabled={withArrows.next === 'disabled'}
            aria-label="Scroll right"
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
