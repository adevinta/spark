import { useEffect } from 'react'

export function useScrollEnd(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  deps: any[]
) {
  useEffect(() => {
    if (!ref.current) return

    const handleScrollEnd = () => {
      callback()
    }

    ref.current.addEventListener('scrollend', handleScrollEnd, { passive: true })

    return () => {
      ref.current?.removeEventListener('scrollend', handleScrollEnd)
    }
  }, [ref, ...deps])
}
