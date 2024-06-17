import path from 'node:path'

import fse from 'fs-extra'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import cmd, { ENTER } from '../../test/utils/cmd'

const __dirname = fileURLToPath(import.meta.url)
const cliPath = path.join(__dirname, '../../../bin/spark.mjs')
const cliProcess = cmd.create(cliPath)

/**
 * CMD test util return a string response, but in this specific case
 * we want to preserve the report as readable data.
 */
const getJSONReportFromData = (data: string) => {
  const regex = /({[\s\S]*})/ // Regular expression to match the JSON object
  const match = data.match(regex)

  return match ? JSON.parse(match[0]) : undefined
}

describe('CLI `spark scan`', () => {
  describe('Adoption (components adoption)', () => {
    it('should execute command with default config', async () => {
      const response = await cliProcess.execute(['scan', 'adoption'], [ENTER])

      expect(response).toContain('Loading default configuration')
      expect(response).toContain('Scanning adoption for @spark-ui')
      expect(response).toContain('Found')

      /**
       * With no output option the adoption report will be simply logged
       */
      const report = getJSONReportFromData(response)
      expect(report).toBeDefined()
    })

    it('should write report to output file path', async () => {
      const response = await cliProcess.execute(['scan', 'adoption'], [ENTER], ['-o report.json'])
      console.log({ response })

      expect(response).toContain('Scanning adoption for @spark-ui')

      /**
       * With output option the adoption report will written into an output file,
       * and not logged anymore
       */
      const report = getJSONReportFromData(response)
      expect(report).toBeUndefined()

      expect(fse.pathExistsSync('report.json')).toBe(true)
      fse.removeSync('report.json')
    })
  })
})

// Custom config
// Sorting option
