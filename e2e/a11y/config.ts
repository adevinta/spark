import type { RunOptions } from 'axe-core'

export const AxeOptions: RunOptions = {
  resultTypes: ['violations', 'incomplete'],
  rules: {
    'page-has-heading-one': { enabled: false },
    'landmark-one-main': { enabled: false },
    region: { enabled: false },
    'color-contrast': { enabled: false },
  },
  runOnly: ['best-practice', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
  reporter: 'v2',
}
