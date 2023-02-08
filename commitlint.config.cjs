const lernaConfig = require('@commitlint/config-lerna-scopes')

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  rules: {
    'scope-enum': async () => {
      const pkgs = await lernaConfig.utils.getPackages()
      return [2, 'always', ['root', 'release', ...pkgs]]
    },
  },
}
