import { useLayoutEffect, useState } from 'react'

function isSnapPoint(element: HTMLElement): boolean {
  if (!element) return false

  const style = getComputedStyle(element)
  const snapAlign = style.scrollSnapAlign
  // || style.webkitScrollSnapAlign // Compatibilité WebKit

  return snapAlign !== 'none'
}

export function useSnapPoints(containerRef: React.RefObject<HTMLUListElement | null>) {
  const [snapPoints, setSnapPoints] = useState<number[]>([])

  const container = containerRef.current

  useLayoutEffect(() => {
    const updateSnapPoints = () => {
      if (!container) return

      const children = Array.from(container.children) as HTMLElement[]

      const points = children.reduce<number[]>((accum, child) => {
        return isSnapPoint(child) ? [...accum, child.offsetLeft - container.offsetLeft] : accum
      }, [])

      setSnapPoints(points)
    }

    updateSnapPoints()

    window.addEventListener('resize', updateSnapPoints)

    return () => window.removeEventListener('resize', updateSnapPoints)
  }, [container])

  return snapPoints
}
