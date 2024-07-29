import { expect, test } from '@playwright/test'

import { BASE_URL } from '../constant'

test('dropdown within a dialog', async ({ page }) => {
  await page.goto(`${BASE_URL}/dropdown-within-dialog`)

  await test.step('can interact with a dropdown within a dialog', async () => {
    const openDialogButton = page.getByRole('button', { name: 'Create account' })

    await openDialogButton.click()

    await page.getByRole('combobox', { name: 'books' }).click()
    await page.getByRole('option', { name: 'To Kill a Mockingbird' }).click()

    await expect(page.getByRole('combobox', { name: 'books' })).toHaveText('To Kill a Mockingbird')
  })

  await test.step('can also interact with adjacent button', async () => {
    await page.getByRole('button', { name: 'hello' }).click()
    await expect(page.getByRole('button', { name: 'clicked' })).toBeVisible()
  })
})
