/* eslint-disable complexity */
import { type RefObject, useEffect, useRef, useState } from 'react'

interface UseSwipeArgs<T> {
  swipeRef: RefObject<T>
  onSwipeStart?: () => void
  onSwipeMove?: () => void
  onSwipeCancel?: () => void
  onSwipeEnd?: () => void
  threshold?: number
}

interface UseSwipeReturn {
  state?: 'start' | 'move' | 'cancel' | 'end'
  direction?: 'up' | 'down' | 'right' | 'left'
}

const SWIPE_THRESHOLD = 75

export const useSwipe = <T extends HTMLElement>({
  swipeRef,
  onSwipeStart,
  onSwipeMove,
  onSwipeCancel,
  onSwipeEnd,
  threshold = 10,
}: UseSwipeArgs<T>): UseSwipeReturn => {
  const [state, setState] = useState<UseSwipeReturn['state']>()
  const [direction, setDirection] = useState<UseSwipeReturn['direction']>()

  const origin = useRef<Record<'x' | 'y', number> | null>(null)
  const delta = useRef<Record<'x' | 'y', number> | null>(null)

  const handleSwipeStart = (evt: PointerEvent) => {
    origin.current = { x: evt.clientX, y: evt.clientY }
    onSwipeStart?.()
  }

  const handleSwipeMove = (evt: PointerEvent) => {
    if (!origin.current) return

    const deltaX = Math.abs(evt.clientX - origin.current.x)
    const deltaY = Math.abs(evt.clientY - origin.current.y)

    if (deltaX > deltaY && deltaX > threshold) {
      setDirection(evt.clientX > origin.current.x ? 'right' : 'left')
    } else if (deltaY > threshold) {
      setDirection(evt.clientY > origin.current.y ? 'down' : 'up')
    }

    if (!delta.current) {
      setState('start')
      delta.current = { x: deltaX, y: deltaY }
    } else {
      setState('move')
      delta.current = { x: deltaX, y: deltaY }
      ;(evt.currentTarget as T).style.setProperty(
        '--swipe-position-x',
        `${deltaX > deltaY ? evt.clientX - origin.current.x : 0}px`
      )
      ;(evt.currentTarget as T).style.setProperty(
        '--swipe-position-y',
        `${!(deltaX > deltaY) ? evt.clientY - origin.current.y : 0}px`
      )
    }

    onSwipeMove?.()
  }

  const handleSwipeEnd = () => {
    if (!delta.current) return

    const { x: deltaX, y: deltaY } = delta.current

    origin.current = null
    delta.current = null

    if (deltaX > deltaY) {
      if (deltaX > SWIPE_THRESHOLD) {
        setState('end')
        onSwipeEnd?.()
      } else {
        setState('cancel')
        onSwipeCancel?.()
      }
    } else {
      if (deltaY > SWIPE_THRESHOLD) {
        setState('end')
        onSwipeEnd?.()
      } else {
        setState('cancel')
        onSwipeCancel?.()
      }
    }
  }

  useEffect(() => {
    if (!swipeRef.current) return

    const swipeElement = swipeRef.current

    swipeElement.addEventListener('pointerdown', handleSwipeStart)
    swipeElement.addEventListener('pointermove', handleSwipeMove)
    swipeElement.addEventListener('pointerup', handleSwipeEnd)

    return () => {
      swipeElement.removeEventListener('pointerdown', handleSwipeStart)
      swipeElement.removeEventListener('pointermove', handleSwipeMove)
      swipeElement.removeEventListener('pointerup', handleSwipeEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    state,
    direction,
  }
}
