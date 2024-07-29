import { expect, test } from '@playwright/test'

import { BASE_URL } from '../constant'

test('dropdown that has adjacent buttons', async ({ page }) => {
  await page.goto(`${BASE_URL}/dropdown-with-adjacent-buttons`)

  await test.step('can interact with a dropdown within a dialog', async () => {
    const combobox = page.getByRole('combobox', { name: 'Book' })

    await combobox.click()
    await page.getByRole('option', { name: 'War and Peace' }).click()

    await expect(combobox).toHaveText('War and Peace')
  })

  await test.step('can also interact with adjacent buttons', async () => {
    await page.getByRole('button', { name: 'hello' }).click()
    await expect(page.getByRole('button', { name: 'clicked on first btn' })).toBeVisible()

    await page.getByRole('button', { name: 'there' }).click()
    await expect(page.getByRole('button', { name: 'clicked on second btn' })).toBeVisible()
  })
})
