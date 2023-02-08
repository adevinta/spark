const { execSync } = require('child_process')

function getStagedPackages() {
  const stdout = execSync('git diff --name-only --staged', { encoding: 'utf8' })
  const stagedPackageFiles = stdout
    .trim()
    .split('\n')
    .filter(name => name.includes('packages'))
    .map(name => name.split('/')[1])

  return [...new Set(stagedPackageFiles)]
}

module.exports = {
  disableEmoji: true,
  scopes: ['root', ...getStagedPackages()],
}
