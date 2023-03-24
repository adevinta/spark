const indexify = componentsMap =>
  `${Array.from(componentsMap.entries())
    .map(([name, { dir }]) => `export { ${name} } from './icons/${name}'`)
    .join('\n')}\n`

export default indexify
