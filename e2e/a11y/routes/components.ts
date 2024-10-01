/**
 * Due to Playwright specifities, imports are limited to .js/.ts files. This file is useful
 * to build the `a11yRoutes` constant, but also to be imported within test files.
 * See https://github.com/microsoft/playwright/issues/18150#issuecomment-1282887786
 */

export const a11yComponents = {
  accordion: 'accordion',
  'alert-dialog': 'alert-dialog',
  badge: 'badge',
  breadcrumb: 'breadcrumb',
  button: 'button',
  checkbox: 'checkbox',
  chip: 'chip',
  collapsible: 'collapsible',
  combobox: 'combobox',
  dialog: 'dialog',
  divider: 'divider',
  drawer: 'drawer',
  dropdown: 'dropdown',
  'form-field': 'form-field',
  icon: 'icon',
  'icon-button': 'icon-button',
  input: 'input',
  kbd: 'kbd',
  label: 'label',
  'link-box': 'link-box',
  'text-link': 'text-link',
}

export type A11yComponentsKey = keyof typeof a11yComponents
