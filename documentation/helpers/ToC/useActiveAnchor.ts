import { useCallback, useEffect, useState } from 'react'

function findAnchorClosestToTop(elementsList: HTMLHeadingElement[]) {
  if (!elementsList) return null

  let closestElement = null
  let closestDistance = Number.MAX_VALUE

  for (const element of elementsList) {
    const distance = Math.abs(element.getBoundingClientRect().top - 0)
    if (distance < closestDistance) {
      closestElement = element
      closestDistance = distance
    }
  }

  return closestElement
}

export const useActiveAnchor = (elements: HTMLHeadingElement[]): HTMLHeadingElement | null => {
  const [activeAnchor, setActiveAnchor] = useState<HTMLHeadingElement | null>(null)

  const handleScroll = useCallback(() => {
    if (elements) {
      const closestAnchor = findAnchorClosestToTop(elements)
      if (closestAnchor) {
        setActiveAnchor(closestAnchor)
      }
    }
  }, [elements])

  useEffect(() => {
    const closestAnchor = elements && findAnchorClosestToTop(elements)
    if (closestAnchor) {
      setActiveAnchor(closestAnchor)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [elements, handleScroll])

  return activeAnchor
}
