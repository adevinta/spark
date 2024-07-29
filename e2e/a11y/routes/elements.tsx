import { type ReactNode } from 'react'

import { A11yButton } from '../pages/Button'
import { A11yDialog } from '../pages/Dialog'
import { type A11yComponentsKey } from './components'

/**
 * Due to Playwright specifities, imports are limited to .js/.ts files. This file is useful
 * to build the `a11yRoutes` constant, and should NOT be imported within test files.
 * See https://github.com/microsoft/playwright/issues/18150#issuecomment-1282887786
 */

export const a11yElements: Record<A11yComponentsKey, ReactNode> = {
  button: <A11yButton />,
  dialog: <A11yDialog />,
}
