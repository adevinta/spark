import { expect, test } from '@playwright/test'

import { BASE_URL } from '../constant'

test('spark form with various fields', async ({ page }) => {
  await page.goto(`${BASE_URL}/spark-form-with-various-fields`)

  const dropdown = page.getByRole('combobox', { name: 'position' })
  const dropdownMulti = page.getByRole('combobox', { name: 'hobbies' })

  // Dropdown
  await test.step('should toggle menu', async () => {
    await dropdown.click()
    await expect(page.getByRole('option')).toHaveCount(5)

    await dropdown.blur()
    await expect(page.getByRole('option')).toHaveCount(0)
  })

  await test.step('should update values from options', async () => {
    // Simple Dropdown selection
    await dropdown.click()
    await page.getByRole('option', { name: 'Engineering Manager' }).click()

    await expect(page.getByRole('option')).toHaveCount(0)
    await expect(dropdown).toHaveText('Engineering Manager')

    // Multiple Dropdown selection
    await dropdownMulti.click()
    await expect(page.getByRole('option')).toHaveCount(4)
    await expect(dropdownMulti).toHaveText('What are your hobbies?')

    /**
     * There is an issue on Downshift, that makes onMouseMove and onClick events triggered
     * in the same frame, leading to inaccurate values.
     * So we need to use this workaround here.
     *
     * See https://github.com/downshift-js/downshift/pull/1571#issuecomment-2079395469
     */
    await page.getByRole('option', { name: 'Cooking' }).click({ delay: 1 })
    await page.getByRole('option', { name: 'Sport' }).click({ delay: 1 })

    await expect(dropdownMulti).toHaveText('Cooking, +1')

    await expect(page.getByRole('option')).toHaveCount(4)
  })
})
