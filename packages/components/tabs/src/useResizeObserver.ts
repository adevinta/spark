import { type RefObject, useEffect, useRef, useState } from 'react'

interface Size {
  width?: number
  height?: number
}

type ResizeCallback = (entry?: ResizeObserverEntry) => void

export const useResizeObserver = <T extends Element>(
  target: RefObject<T> | T,
  onResize?: ResizeCallback
): Size => {
  const [size, setSize] = useState<Size>({ width: undefined, height: undefined })
  const resizeObserverRef = useRef<ResizeObserver>()
  const resizeCallbackRef = useRef<ResizeCallback | undefined>(onResize)

  useEffect(() => {
    const targetElm = target && 'current' in target ? target.current : target
    if (!targetElm) {
      return
    }

    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver(([entry]) => {
        const { inlineSize: width, blockSize: height } = entry?.borderBoxSize[0] ?? {}
        resizeCallbackRef.current?.(entry)

        setSize({ width, height })
      })
    }

    resizeObserverRef.current.observe(targetElm as unknown as HTMLElement)

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.unobserve(targetElm as unknown as HTMLElement)
      }
    }
  }, [target, resizeCallbackRef])

  return size
}
