import { useEffect, useRef } from 'react'

interface Props {
  callback: () => void
}

const CUSTOM_MARK = 'initial rendering'

export function usePerformanceObserver({ callback }: Props) {
  const callbackRef = useRef(callback)
  const performanceRef = useRef(performance)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'longtask' && list.getEntries().length === 1) {
          setTimeout(() => callbackRef.current(), 0)
        }

        if (entry.name === CUSTOM_MARK) {
          performanceRef.current.clearMarks(CUSTOM_MARK)
          setTimeout(() => callbackRef.current(), 500)
        }
      }
    })

    observer.observe({ entryTypes: ['longtask', 'mark'] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    performanceRef.current.mark(CUSTOM_MARK)
  }, [])
}
