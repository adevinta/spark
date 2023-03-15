import path from 'node:path'

import fse from 'fs-extra'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import { TemplateGenerator } from '../src/generate/generators/TemplateGenerator.mjs'
import cmd, { ENTER } from './utils/cmd'

const __dirname = fileURLToPath(import.meta.url)
const cliPath = path.join(__dirname, '../../bin/spark.mjs')
const cliProcess = cmd.create(cliPath)

describe('CLI `spark generate`, when a package name is properly typed', async () => {
  const packageName = 'bar'
  const packageType = 'component'
  const response = await cliProcess.execute(
    ['generate'],
    [packageName, ENTER, packageType, ENTER, 'This is my foo component', ENTER]
  )
  const contextPath = TemplateGenerator.CONTEXTS[packageType] as string
  const packagePath = path.join(process.cwd(), 'packages', contextPath, packageName)

  it('should print the correct output', () => {
    expect(response).toContain(`Created ${packagePath}/.npmignore`)
    expect(response).toContain(`Created ${packagePath}/package.json`)
    expect(response).toContain(`Created ${packagePath}/src/index.ts`)
    expect(response).toContain(`Created ${packagePath}/src/Bar.variants.tsx`)
    expect(response).toContain(`Created ${packagePath}/src/Bar.tsx`)
    expect(response).toContain(`Created ${packagePath}/vite.config.ts`)
    expect(response).toContain(`Created ${packagePath}/src/Bar.stories.mdx`)
    expect(response).toContain(`Created ${packagePath}/src/Bar.test.tsx`)
    expect(response).toContain(`Created ${packagePath}/src/Bar.stories.tsx`)
    expect(response).toContain(`Created ${packagePath}/tsconfig.json`)
  })

  it('should create a new component properly', () => {
    expect(fse.pathExistsSync(`${packagePath}/.npmignore`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/package.json`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/src/index.ts`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/src/Bar.variants.tsx`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/src/Bar.tsx`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/vite.config.ts`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/src/Bar.stories.mdx`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/src/Bar.test.tsx`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/src/Bar.stories.tsx`)).toBe(true)
    expect(fse.pathExistsSync(`${packagePath}/tsconfig.json`)).toBe(true)

    fse.removeSync(packagePath)
  })
})

describe('CLI `spark generate`, when a package name is wrongly typed', async () => {
  const packageName = '123'
  const response = await cliProcess.execute(['generate'], [packageName, ENTER])

  it('should print the correct output', () => {
    expect(response).toContain(
      'Name name must contain letters and dash symbols only (ex: "my-package")'
    )
  })
})
