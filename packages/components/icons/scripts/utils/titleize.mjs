import { parseSync, stringify } from 'svgson'

const titleize = (svgString, title) => {
  const { children, attributes, ...others } = parseSync(svgString)
  const dataTitle = title || attributes['data-title']

  return stringify({
    ...others,
    attributes,
    children: [
      {
        name: 'title',
        type: 'element',
        value: '',
        attributes: {},
        children: [
          {
            name: '',
            type: 'text',
            value: dataTitle,
            attributes: {},
            children: [],
          },
        ],
      },
      ...children,
    ],
  })
}

export default titleize
