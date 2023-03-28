import { format } from 'prettier'

const prettify = svgString => {
  return format(svgString, {
    printWidth: 100,
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    cursorOffset: 2,
    parser: 'babel',
  })
}

export default prettify
