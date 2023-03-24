const componentize = ({
  componentName = 'ComponentName',
  node = '<svg />',
}) => `export const ${componentName} = () => (
  ${node}
)

`

export default componentize
