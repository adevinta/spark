import { type RefObject, useEffect, useRef, useState } from 'react'

interface UseSwipeArgs<T> {
  swipeRef: RefObject<T>
  threshold?: number
}

interface UseSwipeReturn {
  state?: 'start' | 'move' | 'end'
  direction?: 'up' | 'down' | 'right' | 'left'
}

export const useSwipe = <T extends HTMLElement>({
  swipeRef,
  threshold = 10,
}: UseSwipeArgs<T>): UseSwipeReturn => {
  const [state, setState] = useState<UseSwipeReturn['state'] | undefined>()
  const [direction, setDirection] = useState<UseSwipeReturn['direction'] | undefined>()

  const P0 = useRef<Record<'x' | 'y', number> | null>(null)
  const P1 = useRef<Record<'x' | 'y', number> | null>(null)

  const onSwipeStart = (evt: PointerEvent) => {
    P0.current = { x: evt.clientX, y: evt.clientY }
  }

  const onSwipeMove = (evt: PointerEvent) => {
    if (!P0.current) return

    const diffX = Math.abs(evt.clientX - P0.current.x)
    const diffY = Math.abs(evt.clientY - P0.current.y)

    if (diffX > diffY && diffX >= threshold) {
      setDirection(evt.clientX > P0.current.x ? 'right' : 'left')
    } else if (diffY > threshold) {
      setDirection(evt.clientY > P0.current.y ? 'down' : 'up')
    }

    if (!P1.current) {
      setState('start')
      P1.current = { x: evt.clientX, y: evt.clientY }
    } else {
      setState('move')
      P1.current = { x: evt.clientX, y: evt.clientY }
      ;(evt.currentTarget as T).style.setProperty('--swipe-move-x', `${Math.round(evt.clientX)}px`)
      ;(evt.currentTarget as T).style.setProperty('--swipe-move-y', `${Math.round(evt.clientY)}px`)
    }
  }

  const onSwipeEnd = (evt: PointerEvent) => {
    if (!P1.current) return
    setState('end')

    P0.current = null
    P1.current = null
    ;(evt.currentTarget as T).style.removeProperty('--swipe-move-x')
    ;(evt.currentTarget as T).style.removeProperty('--swipe-move-y')
  }

  useEffect(() => {
    if (!swipeRef.current) return

    const swipeElement = swipeRef.current

    swipeElement.addEventListener('pointerdown', onSwipeStart)
    swipeElement.addEventListener('pointermove', onSwipeMove)
    swipeElement.addEventListener('pointerup', onSwipeEnd)

    return () => {
      swipeElement.removeEventListener('pointerdown', onSwipeStart)
      swipeElement.removeEventListener('pointermove', onSwipeMove)
      swipeElement.removeEventListener('pointerup', onSwipeEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    state,
    direction,
  }
}
