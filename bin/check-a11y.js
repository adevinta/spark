#!/usr/bin/env node

import { readFileSync } from 'fs'
import chalk from 'chalk'

import AxeBuilder from '@axe-core/webdriverjs'
import { Builder, By, until } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/firefox.js'

const impactColor = {
  minor: chalk.hex('#ffff00'),
  moderate: chalk.hex('#ffa500'),
  serious: chalk.hex('#ff0000'),
  critical: chalk.red,
}

const { stories } = JSON.parse(readFileSync('dist/stories.json', 'utf8'))
const pkgFilter = process.argv.slice(2).map((pkgPath) => `./${pkgPath.split('/src')[0]}`) ?? []

const storiesList = Object.keys(stories).reduce((acc, cur) => {
  const isComponentStory = (story) => (story.importPath).startsWith('./packages/components/') && !(story.id).endsWith('--docs')
  const belongsToFilter = (story, filter) => filter.includes(stories[cur].importPath.split('/src')[0])

  if (isComponentStory(stories[cur])) {
    if (pkgFilter.length && !belongsToFilter(stories[cur], pkgFilter)) {
      return acc
    }

    acc.push(stories[cur].id)
  }

  return acc
}, [])

let issues = {
  minor: 0,
  moderate: 0,
  serious: 0,
  critical: 0,
}

const checkA11y = async () => {
  const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(new Options().headless())
    .build()

  for (const storyId of storiesList) {
    console.log(`Checking accessibility for ${stories[storyId].title}...`)

    try {
      await driver.get(`http://localhost:6006/iframe.html?viewMode=story&id=${storyId}`)
  
      const results = await new AxeBuilder(driver)
        .options({
          resultTypes: ['violations', 'incomplete'],
          rules: {
            'page-has-heading-one': { enabled: false },
            'landmark-one-main': { enabled: false },
            'region': { enabled: false },
            'color-contrast': { enabled: false },
          },
          runOnly: ['best-practice', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
          reporter: 'no-passes',
        })
        .exclude('.docblock-argstable')
        .analyze()
  
      if (results.violations.length) {
        issues = results.violations.reduce((acc, cur) => {
          acc[cur.impact] += cur.nodes.length
          return acc
        },
        {
          minor: 0,
          moderate: 0,
          serious: 0,
          critical: 0,
        })
          
        console.log(chalk.bold(`${stories[storyId].title} issues (${Object.values(issues).reduce((a, b) => a + b, 0)}): ${impactColor.minor(issues.minor)} minor, ${impactColor.moderate(issues.moderate)} moderate, ${impactColor.serious(issues.serious)} serious, ${impactColor.critical(issues.critical)} critical`))
        
        results.violations.forEach((issue) => {
          console.log(`- ${issue.help} (${impactColor[issue.impact](`${issue.nodes.length}`)})`)
        })
  
        console.log()
      }
    } catch (e) {
      console.error(chalk.bold.red(e.message))
    }
  }

  const totalIssues = Object.values(issues).reduce((a, b) => a + b, 0)
  if (totalIssues === 0) {
    console.log()
    console.log(chalk.bold.green('🎉 Congratulations, no accessibility issue has been found!'))
  }
  if (issues.critical) process.exit(1)

  await driver.quit()
}

checkA11y()