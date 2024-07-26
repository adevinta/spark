import type { TestInfo } from '@playwright/test'
import type { AxeResults } from 'axe-core'
import { writeFileSync } from 'fs'

export const buildComponentReport = async ({
  component,
  results,
  testInfo,
}: {
  component: string
  results: AxeResults
  testInfo?: TestInfo
}) => {
  const { timestamp, url, incomplete, violations } = results

  const report = {
    [`@spark-ui/${component}`]: {
      timestamp,
      url,
      incomplete,
      violations,
    },
  }

  /**
   * Exposes the report as public JSON file
   */
  writeFileSync(`./public/a11y-report-${component}.json`, JSON.stringify(report, null, 2), 'utf8')

  /**
   * Attaches the report to Playwright reporter
   */
  await testInfo?.attach(`a11y-report-${component}`, {
    body: JSON.stringify(report, null, 2),
    contentType: 'application/json',
  })
}
