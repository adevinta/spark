import path from 'node:path'

import fse from 'fs-extra'
import { fileURLToPath } from 'url'
import { beforeEach, describe, expect, it } from 'vitest'

import cmd, { ENTER } from '../../test/utils/cmd'

const __dirname = fileURLToPath(import.meta.url)
const cliPath = path.join(__dirname, '../../../bin/spark.mjs')

const cliProcess = cmd.create(cliPath)

describe('CLI `spark scan`', () => {
  const OUTPUT_FILE = 'report.json'

  const EXT_CONFIG_FILE_PATH = 'packages/utils/cli/test/stubs/scanConfigWithCustomExtensions.js'
  const SORT_CONFIG_FILE_PATH = 'packages/utils/cli/test/stubs/scanConfigWithCustomSorting.js'
  const DETAILED_OUTPUT_CONFIG_FILE_PATH =
    'packages/utils/cli/test/stubs/scanConfigWithDetailedOutput.js'
  const IMPORTS_CONFIG_FILE_PATH = 'packages/utils/cli/test/stubs/scanConfigWithCustomImports.js'

  const adoptionCommand = async (args: string[] = []) => {
    /**
     * We define here some common options such as custom directory (for performance reasons).
     */
    return await cliProcess.execute(
      ['scan', 'adoption', '-dir', './packages/components', ...args],
      [ENTER]
    )
  }

  beforeEach(() => {
    if (fse.existsSync(OUTPUT_FILE)) fse.removeSync(OUTPUT_FILE)
  })

  afterAll(() => {
    if (fse.existsSync(OUTPUT_FILE)) fse.removeSync(OUTPUT_FILE)
  })

  describe('Adoption (components adoption)', () => {
    it('should execute command with default config', async () => {
      const response = await adoptionCommand(['-v'])

      expect(response).toMatch(/Loading default configuration/i)
      expect(response).toMatch(/Scanning adoption for @spark-ui/i)

      expect(response).toMatch(/Found/i)

      /**
       * With no output option the adoption report will be simply logged
       */
      expect(
        response.filter(
          (entry: string | Record<string, unknown>) =>
            entry['@spark-ui/button' as keyof typeof entry]
        )
      ).toBeDefined()
    })

    describe('Results details with output', () => {
      it('should output results with packages details from command option', async () => {
        await adoptionCommand(['-d', '-o', OUTPUT_FILE])

        expect(fse.pathExistsSync(OUTPUT_FILE)).toBe(true)

        const outputContent = JSON.parse(fse.readFileSync(OUTPUT_FILE, 'utf-8'))

        Object.keys(outputContent).forEach(outputItem => {
          expect(Object.keys(outputContent[outputItem]).includes('results')).toBeTruthy()
        })
      })

      it('should output results with packages details from configuration file', async () => {
        await adoptionCommand(['-c', DETAILED_OUTPUT_CONFIG_FILE_PATH])

        expect(fse.pathExistsSync(OUTPUT_FILE)).toBe(true)

        const outputContent = JSON.parse(fse.readFileSync(OUTPUT_FILE, 'utf-8'))

        Object.keys(outputContent).forEach(outputItem => {
          expect(Object.keys(outputContent[outputItem]).includes('results')).toBeTruthy()
        })
      })
    })

    describe('Results sorting', () => {
      it('should sort results alphabetically from command option', async () => {
        const response = await adoptionCommand(['-v', '-s', 'alphabetical'])

        expect(response).toMatch(/Loading default configuration/i)
        expect(response).toMatch(/Scanning adoption for @spark-ui/i)

        const pkgList = Object.keys(
          response.filter((entry: string | Record<string, unknown>) => typeof entry !== 'string')[0]
        )

        const sparkInputIndex = pkgList.indexOf('@spark-ui/input')
        const sparkFormFieldIndex = pkgList.indexOf('@spark-ui/form-field')

        expect(sparkInputIndex).toBeGreaterThan(sparkFormFieldIndex)
      })

      it('should sort results alphabetically from configuration file', async () => {
        const response = await adoptionCommand(['-v', '-c', SORT_CONFIG_FILE_PATH])

        expect(response).toMatch(/Loading spark-ui custom configuration file/i)
        expect(response).toMatch(/Scanning adoption for @spark-ui/i)

        const pkgList = Object.keys(
          response.filter((entry: string | Record<string, unknown>) => typeof entry !== 'string')[0]
        )

        const sparkInputIndex = pkgList.indexOf('@spark-ui/input')
        const sparkFormFieldIndex = pkgList.indexOf('@spark-ui/form-field')

        expect(sparkInputIndex).toBeGreaterThan(sparkFormFieldIndex)
      })
    })

    describe('File extensions', () => {
      it('should execute command with custom extensions from command option', async () => {
        const response = await adoptionCommand(['-v', '-ext', '.css'])

        expect(response).toMatch(/Loading default configuration/i)
        expect(response).toMatch(/Scanning adoption for @spark-ui/i)

        expect(response).toMatch(/No files found with "@spark-ui" imports across directory/i)
      })

      it('should execute command with custom extensions from configuration file', async () => {
        const response = await adoptionCommand(['-v', '-c', EXT_CONFIG_FILE_PATH])

        expect(response).toMatch(/Loading spark-ui custom configuration file/i)
        expect(response).toMatch(/Scanning adoption for @spark-ui/i)

        expect(response).toMatch(/No files found with "@spark-ui" imports across directory/i)
      })
    })

    describe('Imports patterns', () => {
      it('should execute command for custom import patterns from command option', async () => {
        const response = await adoptionCommand(['-v', '-i', '@react-aria', '@react-stately'])

        expect(response).toMatch(/Scanning adoption for @react-aria/i)
        expect(response).toMatch(/Scanning adoption for @react-stately/i)
      })

      it('should execute command for custom import patterns from configuration file', async () => {
        const response = await adoptionCommand(['-v', '-c', IMPORTS_CONFIG_FILE_PATH])

        expect(response).toMatch(/Scanning adoption for @react-aria/i)
        expect(response).toMatch(/Scanning adoption for @react-stately/i)
      })
    })
  })
})
