import { useEffect, useState } from 'react'

function findAnchorClosestToTop(elementsList) {
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

export const useActiveAnchor = elements => {
  const [anchorId, setAnchorId] = useState(null)

  const handleScroll = () => {
    if (elements) {
      setAnchorId(findAnchorClosestToTop(elements).id)
    }
  }

  useEffect(() => {
    elements && setAnchorId(findAnchorClosestToTop(elements).id)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements])

  return anchorId
}
