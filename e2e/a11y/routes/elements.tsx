import React, { type ReactNode } from 'react'

import { A11yAccordion } from '../pages/Accordion'
import { A11yAlertDialog } from '../pages/AlertDialog'
import { A11yBadge } from '../pages/Badge'
import { A11yButton } from '../pages/Button'
import { A11yCheckbox } from '../pages/Checkbox'
import { A11yCollapsible } from '../pages/Collapsible'
import { A11yDialog } from '../pages/Dialog'
import { type A11yComponentsKey } from './components'

/**
 * Due to Playwright specifities, imports are limited to .js/.ts files. This file is useful
 * to build the `a11yRoutes` constant, and should NOT be imported within test files.
 * See https://github.com/microsoft/playwright/issues/18150#issuecomment-1282887786
 */

export const a11yElements: Record<A11yComponentsKey, ReactNode> = {
  accordion: <A11yAccordion />,
  'alert-dialog': <A11yAlertDialog />,
  badge: <A11yBadge />,
  button: <A11yButton />,
  checkbox: <A11yCheckbox />,
  collapsible: <A11yCollapsible />,
  dialog: <A11yDialog />,
}
