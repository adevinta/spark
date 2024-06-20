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
  const CONFIG_FILE_PATH = 'packages/utils/cli/test/stubs/scanConfig.js'

  beforeEach(() => {
    if (fse.existsSync(OUTPUT_FILE)) fse.removeSync(OUTPUT_FILE)
  })

  describe('Adoption (components adoption)', () => {
    it('should execute command with default config', async () => {
      const response = await cliProcess.execute(['scan', 'adoption', '-v'], [ENTER])

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

    it('should write report to output file path', async () => {
      await cliProcess.execute(['scan', 'adoption', '-o', OUTPUT_FILE], [ENTER])

      expect(fse.pathExistsSync(OUTPUT_FILE)).toBe(true)
    })

    it('should execute command with custom configuration file', async () => {
      const response = await cliProcess.execute(
        ['scan', 'adoption', '-v', '-c', CONFIG_FILE_PATH], // !!!
        [ENTER]
      )

      expect(response).toMatch(/Loading spark-ui custom configuration file/i)
      expect(response).toMatch(/Scanning adoption for @spark-ui/i)
    })

    // it.only('should add details about each match', async () => {
    //   const response = await cliProcess.execute(['scan', 'adoption', '-v', '-d'], [ENTER])

    //   console.log({ response })
    // })
  })
})
