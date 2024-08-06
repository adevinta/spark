/**
 * Due to Playwright specifities, imports are limited to .js/.ts files. This file is useful
 * to build the `a11yRoutes` constant, but also to be imported within test files.
 * See https://github.com/microsoft/playwright/issues/18150#issuecomment-1282887786
 */

export const a11yComponents = {
  accordion: 'accordion',
  'alert-dialog': 'alert-dialog',
  badge: 'badge',
  button: 'button',
  checkbox: 'checkbox',
  collapsible: 'collapsible',
  combobox: 'combobox',
  dialog: 'dialog',
  divider: 'divider',
  drawer: 'drawer',
}

export type A11yComponentsKey = keyof typeof a11yComponents
