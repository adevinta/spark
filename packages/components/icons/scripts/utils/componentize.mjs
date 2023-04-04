import { noCase, pascalCase } from 'change-case'
import { parseSync, stringify } from 'svgson'

const componentize = ({ name = 'componentName', node = '<svg />', tags = [] }) => {
  const {
    children,
    attributes: { fill, stroke, 'data-title': dataTitle, ...otherAttributes } = {
      fill: 'currentColor',
      stroke: 'currentColor',
    },
    ...others
  } = parseSync(node)
  const nameTags = [name]

  return `import { IconProps } from '../Types'

export const ${pascalCase(
    name
  )} = ({title, fill = '${fill}', stroke = '${stroke}', ...props}: IconProps) => (
  <svg ${Object.entries(otherAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')}
      {...{ ...(title && {'data-title': title}), fill, stroke, ...props}}
      dangerouslySetInnerHTML={{__html: (title === undefined ? '' : \`<title>\${title}</title>\`) + '${stringify(
        children
      )}'}}
  />
)

export const tags = ${JSON.stringify([...nameTags, ...tags.map(tag => noCase(`${tag}`))])}
`
}

export default componentize
