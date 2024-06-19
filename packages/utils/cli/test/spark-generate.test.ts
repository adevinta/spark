import path from 'node:path'

import fse from 'fs-extra'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import { TemplateGenerator } from '../src/generate/generators/TemplateGenerator.mjs'
import cmd, { ENTER } from './utils/cmd'

const __dirname = fileURLToPath(import.meta.url)
const cliPath = path.join(__dirname, '../../bin/spark.mjs')
const cliProcess = cmd.create(cliPath)

describe('CLI `spark generate` (component package)', () => {
  it('should properly generate package from CLI when arguments are valid', async () => {
    // GIVEN a package definition
    const packageName = 'bar'
    const packageType = 'component'

    // WHEN we execute the `spark generate` command
    const response = await cliProcess.execute(
      ['generate'],
      [packageName, ENTER, packageType, ENTER, 'This is my foo component', ENTER]
    )
    const contextPath = TemplateGenerator.CONTEXTS[packageType] as string
    const packagePath = path.join(process.cwd(), 'packages', contextPath, packageName)

    // THEN each file is created and the user is informed about it
    const expectedFiles = [
      '/.npmignore',
      '/package.json',
      '/src/index.ts',
      '/src/Bar.styles.ts',
      '/src/Bar.tsx',
      '/vite.config.ts',
      '/src/Bar.doc.mdx',
      '/src/Bar.test.tsx',
      '/src/Bar.stories.tsx',
      '/tsconfig.json',
    ]

    const assertExpectedFiles = (filePath: string) => {
      expect(response.toString()).toContain(`Created ${packagePath}${filePath}`)
      expect(fse.pathExistsSync(`${packagePath}${filePath}`)).toBe(true)
    }

    expectedFiles.forEach(assertExpectedFiles)

    // Finally we clean up the generated component package
    fse.removeSync(packagePath)
  })

  it('should prevent generating package when argument are invalid', async () => {
    // GIVEN the package name is not using kebab-case notation
    const packageName = '123'
    const packageType = 'component'

    // WHEN we try to create it
    const response = await cliProcess.execute(['generate'], [packageName, ENTER])
    const contextPath = TemplateGenerator.CONTEXTS[packageType] as string
    const packagePath = path.join(process.cwd(), 'packages', contextPath, packageName)

    // THEN it throws an error and fails to create files for this package
    expect(response.toString()).toContain(
      'Name name must contain letters and dash symbols only (ex: "my-package")'
    )
    expect(fse.pathExistsSync(packagePath)).toBe(false)
  })
})
