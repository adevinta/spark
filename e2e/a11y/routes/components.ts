/**
 * Due to Playwright specifities, imports are limited to .js/.ts files. This file is useful
 * to build the `a11yRoutes` constant, but also to be imported within test files.
 * See https://github.com/microsoft/playwright/issues/18150#issuecomment-1282887786
 */

export const a11yComponents = {
  button: 'button',
  dialog: 'dialog',
}

export type A11yComponentsKey = keyof typeof a11yComponents
