import { useEffect, useState } from 'react'

export function useIsVisible(
  elementRef: React.RefObject<HTMLElement | null>,
  parentRef: React.RefObject<HTMLElement | null>
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!parentRef.current || !elementRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry) {
          setIsVisible(entry.isIntersecting)
        }
      },
      {
        root: parentRef.current,
        threshold: 0.2,
      }
    )

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [elementRef, parentRef])

  return isVisible
}
