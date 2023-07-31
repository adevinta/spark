import { pascalCase } from 'change-case'
import path from 'path'

import componentize from './utils/componentize.mjs'
import indexify from './utils/indexify.mjs'
import matchFileRoute from './utils/matchFileRoutes.mjs'
import optimize from './utils/optimize.mjs'
import pathSVG from './utils/pathSVG.mjs'
import readFile from './utils/readFile.mjs'
import tagify from './utils/tagify.mjs'
import writeFile from './utils/writeFile.mjs'

const main = async (pattern = 'assets/**/*.svg') => {
  const files = matchFileRoute(undefined, pattern)
  const data = new Map()

  await Promise.all(
    files.map(async filepath => {
      const relativePath = path.relative(path.join(process.cwd()), filepath)
      const { dir, base, name } = path.parse(relativePath)

      const svgData = await pathSVG(readFile(path.join(dir, base)))

      const relativeDir = path.relative('assets', dir)

      const tsxIconCode = componentize({
        componentName: pascalCase(name),
        node: optimize(svgData, {
          attributes: [{ fill: 'currentColor' }, { stroke: 'none' }],
          title: name,
        }).trim(),
        name,
        tags: relativeDir.split('/'),
      })

      data.set(pascalCase(name), { value: tsxIconCode, dir: relativeDir })
    })
  )

  data.forEach(({ value }, name) => {
    writeFile(path.join('src/icons', `${name}.tsx`), value)
  })

  writeFile(path.join('src', 'index.ts'), indexify(data))
  writeFile(path.join('src', 'tags.ts'), tagify(data))
}

await main(...process.argv.splice(2))
