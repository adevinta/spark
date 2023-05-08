/* eslint-disable max-lines-per-function */
import * as RadixTabs from '@radix-ui/react-tabs'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { ArrowVerticalLeft } from '@spark-ui/icons/dist/icons/ArrowVerticalLeft'
import { ArrowVerticalRight } from '@spark-ui/icons/dist/icons/ArrowVerticalRight'
import { forwardRef, type ReactElement, useEffect, useRef, useState } from 'react'

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

type ArrowState = 'visible' | 'hidden' | 'disabled'

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

    const [arrows, setArrows] = useState<Record<'prev' | 'next', ArrowState>>({
      prev: 'hidden',
      next: 'hidden',
    })

    useEffect(() => {
      /**
       * Show/hide arrows
       */
      if (typeof listRef === 'function' || !listRef.current) {
        return
      }

      if (orientation !== 'horizontal') {
        setArrows({ prev: 'hidden', next: 'hidden' })
      } else {
        setArrows({
          prev: listRef.current.scrollWidth > listRef.current.clientWidth ? 'visible' : 'hidden',
          next: listRef.current.scrollWidth > listRef.current.clientWidth ? 'visible' : 'hidden',
        })
      }
    }, [orientation, listRef, width])

    useEffect(() => {
      /**
       * Enable/disable arrows
       */
      if (typeof listRef === 'function' || !listRef.current || arrows.prev === 'hidden' || loop) {
        return
      }

      const toggleArrowsVisibility = (target: HTMLDivElement) => {
        setArrows({
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
    }, [listRef, arrows.prev, loop])

    const handlePrevClick = () => {
      if (typeof listRef === 'function' || !listRef.current) {
        return
      }

      const shouldLoopForward = loop && listRef.current.scrollLeft <= 0

      listRef.current.scrollTo({
        left: shouldLoopForward
          ? listRef.current.scrollLeft + listRef.current.scrollWidth - listRef.current.clientWidth
          : listRef.current.scrollLeft - listRef.current.clientWidth,
        behavior: 'smooth',
      })
    }

    const handleNextClick = () => {
      if (typeof listRef === 'function' || !listRef.current) {
        return
      }

      const shouldLoopBackward =
        loop &&
        listRef.current.scrollLeft + listRef.current.clientWidth >= listRef.current.scrollWidth

      listRef.current.scrollTo({
        left: shouldLoopBackward ? 0 : listRef.current.scrollLeft + listRef.current.clientWidth,
        behavior: 'smooth',
      })
    }

    return (
      <div className={wrapperStyles({ className })} ref={wrapperRef}>
        {arrows.prev !== 'hidden' && (
          <Button
            shape="square"
            intent="surface"
            size="sm"
            className={navigationArrowStyles()}
            onClick={handlePrevClick}
            disabled={arrows.prev === 'disabled'}
            aria-label="Scroll left"
          >
            <Icon>
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

        {arrows.next !== 'hidden' && (
          <Button
            shape="square"
            intent="surface"
            size="sm"
            className={navigationArrowStyles()}
            onClick={handleNextClick}
            disabled={arrows.next === 'disabled'}
            aria-label="Scroll right"
          >
            <Icon>
              <ArrowVerticalRight />
            </Icon>
          </Button>
        )}
      </div>
    )
  }
)

TabsList.displayName = 'Tabs.List'
