import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

import { BASE_URL } from '../constant'
import { AxeOptions } from './config'
import { a11yRoutes } from './routes'
import { buildComponentReport } from './utils'

test.describe('Spark UI accessibility', () => {
  const COMPONENT_LIST: string[] = a11yRoutes.reduce(
    (acc, curr) => [...acc, String(curr.path).split('/')[1] as string],
    [] as string[]
  )

  COMPONENT_LIST.forEach(component => {
    test(`${component} should not have any accessibility issues`, async ({ page }, testInfo) => {
      await page.goto(`${BASE_URL}/a11y/${component}`)

      const results = await new AxeBuilder({ page }).options({ ...AxeOptions }).analyze()

      await buildComponentReport({
        component,
        results,
        testInfo,
      })

      expect(results.incomplete).toEqual([])
      expect(results.violations).toEqual([])
    })
  })
})
