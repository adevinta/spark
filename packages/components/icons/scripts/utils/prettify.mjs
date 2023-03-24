import { format } from 'prettier'

const prettify = svgString => {
  return format(svgString, { cursorOffset: 2, parser: 'babel' })
}

export default prettify
