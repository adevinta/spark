import { noCase, pascalCase } from 'change-case'
import { parseSync, stringify } from 'svgson'

const componentize = ({ name = 'componentName', node = '<svg />', tags = [] }) => {
  const {
    children,
    attributes: { fill, stroke, ...otherAttributes } = {
      fill: 'currentColor',
      stroke: 'currentColor',
    },
  } = parseSync(node)
  const nameTags = [name]

  return `import React, { type Ref } from 'react'
import { IconProps } from '../Types'

export const ${pascalCase(
    name
  )} = React.forwardRef(({title, fill = '${fill}', stroke = '${stroke}', ...props}: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} ${Object.entries(otherAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')}
      {...{ ...(title && {'data-title': title}), fill, stroke, ...props}}
      dangerouslySetInnerHTML={{__html: (title === undefined ? '' : \`<title>\${title}</title>\`) + '${stringify(
        children
      )}'}}
  />
))

${pascalCase(name)}.displayName = '${pascalCase(name)}'

export const tags = ${JSON.stringify([...nameTags, ...tags.map(tag => noCase(`${tag}`))])}
`
}

export default componentize
