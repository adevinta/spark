import { useEffect } from 'react'

export function useScrollEnd(
  scrollRef: React.RefObject<HTMLDivElement | null>,
  onScrollEnd: () => void
) {
  useEffect(() => {
    const element = scrollRef.current
    if (!element) return

    element.addEventListener('scrollend', onScrollEnd)

    return () => {
      element.removeEventListener('scrollend', onScrollEnd)
    }
  }, [scrollRef, onScrollEnd])
}
