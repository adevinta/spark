import { addons } from '@storybook/manager-api'

import { defaultTheme } from '@spark-ui/theme-utils'

import { getTheme } from './theme/getTheme.js'

addons.setConfig({
  sidebar: {
    showRoots: true,
    collapsedRoots: ['using-spark', 'hooks', 'contributing', 'experimental', 'utils'],
    filters: {
      hidden: item => !item.tags?.includes('hidden'),
    },
  },
})
