export function scrollToAnchor(anchorId) {
  const element = document.getElementById(anchorId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function updateUrlAnchor(hash) {
  // eslint-disable-next-line no-undef
  parent.location.href = parent.location.href.split('#')[0] + '#' + hash
}
