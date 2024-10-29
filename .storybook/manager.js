
import { addons, types } from '@storybook/manager-api'
import { getTheme } from './theme/getTheme.js'
import { SkinlessThemeSwitcherHandler } from './addons/SkinlessThemeSwitcherHandler.jsx'

addons.register('skinless-theme-switcher-handler', () => {
  addons.add('skinless-theme-switcher-handler/tool', {
    type: types.TOOL,
    render: SkinlessThemeSwitcherHandler,
  });
});

addons.setConfig({
  theme: getTheme({ base: 'light' }),
  sidebar: {
    showRoots: true,
    collapsedRoots: ['using-spark', 'hooks', 'contributing', 'experimental', 'utils'],
    filters: {
      hidden: item => !item.tags?.includes('hidden'),
    },
  },
})
