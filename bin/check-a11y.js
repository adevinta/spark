#!/usr/bin/env node

import { readFileSync } from 'fs'
import chalk from 'chalk'

import AxeBuilder from '@axe-core/webdriverjs'
import { Builder, By, until } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/firefox.js'

(async () => { 
  const impactColor = {
    minor: chalk.hex('#ffff00'),
    moderate: chalk.hex('#ffa500'),
    serious: chalk.hex('#ff0000'),
    critical: chalk.red,
  }

  const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(new Options().headless())
    .build()

  const { stories } = JSON.parse(readFileSync('dist/stories.json', 'utf8'))

  const componentsList = Object.keys(stories).reduce((acc, curr) => {
    if ((stories[curr].importPath).startsWith('./packages/components/') && (stories[curr].id).endsWith('--docs')) {
      acc.push(stories[curr].id)
    }

    return acc
  }, [])

  let hasError = false

  for (const storyId of componentsList) {
    try {
      await driver.get(`http://localhost:6006/iframe.html?viewMode=docs&id=${storyId}`)
      await driver.wait(until.elementLocated(By.css("#import")), 10000)

      const results = await new AxeBuilder(driver)
        .options({
          resultTypes: ['violations', 'incomplete'],
          rules: {
            // 'landmark-one-main': { enabled: false },
            // 'region': { enabled: false },
            // 'color-contrast': { enabled: false },
          },
          runOnly: ['best-practice', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
          reporter: 'no-passes',
        })
        .exclude('.docblock-argstable')
        .analyze()

      if (results.violations.length) {
        hasError = true

        const totalIssues = results.violations.reduce((acc, cur) =>
          acc += [...cur.nodes].length,
          0
        )

        console.log(results.violations)
        const issues = results.violations.reduce((acc, cur) =>
          acc[cur.impact] = cur.nodes.length,
          {
            minor: 0,
            moderate: 0,
            serious: 0,
            critical: 0,
          }
        )
        console.log(issues)
        
        console.log(chalk.bold(stories[storyId].title + ' issues: ' + chalk.red(totalIssues + ' issues')))
        
        results.violations.forEach((issue) => {
          const color = issue.impact
          console.log('- ' + issue.help + impactColor[issue.impact](' (' + issue.nodes.length + ')'))
        })

        console.log()
      }
    
    } catch (e) {
      console.error(chalk.bold.red(e.message))
      process.exit(1)
    }
  }

  if (hasError) process.exit(1)
  await driver.quit()
})()
