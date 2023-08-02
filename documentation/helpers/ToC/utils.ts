export function scrollToAnchor(anchorId: string) {
  const element = document.getElementById(anchorId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
