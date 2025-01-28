import { useEffect, useRef, useState } from 'react'

type VisibilityState = 'visible' | 'partial' | 'hidden'

export const useVisibility = (ref: React.RefObject<HTMLElement | null>) => {
  const [visibility, setVisibility] = useState<VisibilityState>('hidden')
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio === 1) {
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
      threshold: [0, 0.5, 1], // Observe when partially or fully visible
    })

    const currentRef = ref.current
    if (currentRef) {
      observer.current.observe(currentRef)
    }

    return () => {
      if (observer.current && currentRef) {
        observer.current.disconnect()
      }
    }
  }, [ref])

  return visibility
}

export default useVisibility
