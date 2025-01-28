import { useEffect, useRef, useState } from 'react'

type VisibilityState = 'hidden' | 'partial' | 'visible'

export const useVisibility = (
  elementRef: React.RefObject<HTMLElement | null>,
  containerRef: React.RefObject<HTMLElement | null>
) => {
  const [visibility, setVisibility] = useState<VisibilityState>('hidden')
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Treat a near-1 ratio as fully visible to avoid float inaccuracies
          const roundedRatio = Math.round(entry.intersectionRatio * 100) / 100
          if (roundedRatio >= 0.99) {
            setVisibility('visible')
          } else {
            setVisibility('partial')
          }
        } else {
          setVisibility('hidden')
        }
      })
    }

    observer.current = new IntersectionObserver(handleVisibilityChange, {
      root: containerRef.current, // Specify the container as the observation root
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Finer granularity in thresholds
    })

    const currentElement = elementRef.current
    if (currentElement) {
      observer.current.observe(currentElement)
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [elementRef, containerRef])

  return visibility
}
