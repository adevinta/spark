import { parseSync, stringify } from 'svgson'

const componentize = ({ componentName = 'ComponentName', node = '<svg />', title }) => {
  const {
    children,
    attributes: { fill, stroke, 'data-title': dataTitle, ...otherAttributes } = {
      fill: 'currentColor',
      stroke: 'currentColor',
    },
    ...others
  } = parseSync(node)

  return `import { IconProps } from '../Types'

export const ${componentName} = ({title, fill = '${fill}', stroke = '${stroke}', ...props}: IconProps) => (
  <svg ${Object.entries(otherAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')}
    {...{ ...(title && {'data-title': title}), fill, stroke, ...props}}
    >
      {title === undefined ? undefined : <title>{title}</title>}
    ${stringify(children)}
  </svg>
)

`
}

export default componentize
