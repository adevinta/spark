import { RefObject, useLayoutEffect, useState } from 'react'

export function useDynamicScrollWidth(ref: RefObject<HTMLElement | null>): number {
  const [scrollWidth, setScrollWidth] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) return

    const updateScrollWidth = () => {
      if (ref.current?.scrollWidth) {
        setScrollWidth(ref.current.scrollWidth)
      }
    }

    // Resize observer to handle size changes of the element itself
    const resizeObserver = new ResizeObserver(updateScrollWidth)
    resizeObserver.observe(ref.current)

    // Mutation observer to handle changes in child elements
    const mutationObserver = new MutationObserver(updateScrollWidth)
    mutationObserver.observe(ref.current, {
      childList: true,
      subtree: true,
      attributes: true,
    })

    // Initial update
    updateScrollWidth()

    return () => {
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [ref])

  return scrollWidth
}
