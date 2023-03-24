#!/usr/bin/env node

import { capitalCase } from 'change-case'
import path from 'path'

import componentize from './utils/componentize.mjs'
import indexify from './utils/indexify.mjs'
import matchFileRoute from './utils/matchFileRoutes.mjs'
import optimize from './utils/optimize.mjs'
import pathSVG from './utils/pathSVG.mjs'
import prettify from './utils/prettify.mjs'
import readFile from './utils/readFile.mjs'
import titleize from './utils/titleize.mjs'
import writeFile from './utils/writeFile.mjs'

const main = async (pattern = 'assets/**/*.svg') => {
  const files = matchFileRoute(undefined, pattern)
  const data = new Map()

  await Promise.all(
    files.map(async filepath => {
      const relativePath = path.relative(path.join(process.cwd()), filepath)
      const { root, dir, base, ext, name } = path.parse(relativePath)

      const svgData = await pathSVG(readFile(path.join(dir, base)))

      const tsxIconCode = prettify(
        componentize({
          componentName: capitalCase(name),
          node: titleize(
            optimize(svgData, {
              attributes: [{ fill: 'currentColor' }, { stroke: 'currentColor' }],
              title: name,
            }).trim(),
            name
          ),
        })
      )

      data.set(capitalCase(name), { value: tsxIconCode, dir: path.relative('assets', dir) })
    })
  )

  data.forEach(({ value, dir }, name) => {
    writeFile(path.join('src/icons', dir, `${name}.tsx`), value)
  })

  writeFile(path.join('src', 'index.ts'), indexify(data))
}

await main(...process.argv.splice(2))
