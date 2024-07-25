import { expect, test } from '@playwright/test'

import { BASE_URL } from '../constant'

test('can interact with a combobox within a dialog', async ({ page }) => {
  await page.goto(`${BASE_URL}/combobox-within-dialog`)

  const openDialogButton = page.getByRole('button', { name: 'Create account' })

  await openDialogButton.click()

  await page.getByPlaceholder('Pick a book').click()
  await page.getByRole('option', { name: 'To Kill a Mockingbird' }).click()

  await expect(page.getByRole('combobox', { name: 'books' })).toHaveValue('To Kill a Mockingbird')

  // testing that we can also interact with adjacent button
  await page.getByRole('button', { name: 'hello' }).click()
  await expect(page.getByRole('button', { name: 'clicked' })).toBeVisible()
})
