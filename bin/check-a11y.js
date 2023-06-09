#!/usr/bin/env node

import { readFileSync } from 'fs'
import chalk from 'chalk'

import AxeBuilder from '@axe-core/webdriverjs'
import { Builder, By, until } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/firefox.js'

(async () => {
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

  for (const storyId of componentsList) {
    try {
      await driver.get(`http://localhost:8080/iframe.html?viewMode=docs&id=${storyId}`)
      await driver.wait(until.elementLocated(By.css("#props")), 10000)
      
      const results = await new AxeBuilder(driver)
        .options({
          resultTypes: ['violations', 'incomplete'],
          runOnly: ['best-practice', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
          reporter: 'no-passes',
        })
        .analyze()
    
      const totalIssues = results.violations.reduce((acc, cur) =>
        acc += [...cur.nodes].length,
        0
      )
    
      console.log(chalk.bold(stories[storyId].title + ': ' + chalk.red(totalIssues + ' issues')))
    
      results.violations.forEach((issue) => {
        console.log('- ' + issue.help + chalk.yellow(' (' + issue.nodes.length + ')'))
      })

      console.log()
    
    } catch (e) {
      console.error(chalk.bold.red(e.message))
      process.exit(1)
    }
  }

  await driver.quit()
})()
