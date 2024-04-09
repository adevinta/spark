#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import chalk from 'chalk'

import AxeBuilder from '@axe-core/webdriverjs'
import { Builder, By, until } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/chrome.js'

const impactColor = {
  minor: chalk.hex('#ffff00'),
  moderate: chalk.hex('#ffa500'),
  serious: chalk.hex('#ff0000'),
  critical: chalk.red,
}

const { entries: stories } = JSON.parse(readFileSync('dist/index.json', 'utf8'))

const hasFilter = process.argv.indexOf('-f') > -1
const pkgFilter = hasFilter
  ? process.argv
      .slice(process.argv.indexOf('-f') + 1)
      .map(pkgPath => `./${pkgPath.split('/src')[0]}`) ?? []
  : []

const storiesList = Object.keys(stories).reduce((acc, cur) => {
  const isComponentStory = story =>
    story.importPath.startsWith('./packages/components/') && !story.id.endsWith('--docs')
  const belongsToFilter = (story, filter) =>
    filter.includes(stories[cur].importPath.split('/src')[0])

  if (isComponentStory(stories[cur])) {
    if (pkgFilter.length && !belongsToFilter(stories[cur], pkgFilter)) {
      return acc
    }

    // We'll test the whole stories collection if no filter is provided.
    acc.push(stories[cur].id)
  }

  return acc
}, [])

const mergeResultArrays = (newArray, originArray = []) => {
  const mergedNodes = (a, b = []) =>
    [...a, ...b].reduce((acc, curr) => {
      const { target, ...rest } = curr

      const mergedNode = {
        ...rest,
        target: [
          ...new Set([...acc.reduce((prev, curr) => [...prev, ...curr.target], []), ...target]),
        ],
      }

      return [...acc, mergedNode]
    }, [])

  return [...originArray, ...newArray].reduce((acc, currentRule) => {
    const duplicateRule = acc.filter(item => item.id === currentRule.id)

    if (duplicateRule.length > 0) {
      const uniqRules = acc.filter(item => item.id !== currentRule.id)

      const duplicateRuleNodes = duplicateRule.reduce((acc, curr) => {
        const { nodes, ...rest } = curr
        return [...acc, ...nodes]
      }, [])

      const nodes = mergedNodes(duplicateRuleNodes, currentRule.nodes)

      return [
        ...uniqRules,
        {
          ...currentRule,
          nodes: [nodes[nodes.length - 1]],
        },
      ]
    } else {
      const nodes = mergedNodes(currentRule.nodes)

      return [
        ...acc,
        {
          ...currentRule,
          nodes: [nodes[nodes.length - 1]],
        },
      ]
    }
  }, [])
}

let report = {}

/**
 *
 * Informations about Axe API available here:
 * https://github.com/dequelabs/axe-core/blob/master/doc/API.md
 */
const checkA11y = async () => {
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new Options().addArguments('-headless'))
    .build()

  let testedStory

  for (const storyId of storiesList) {
    if (testedStory !== stories[storyId].title)
      console.log(`Checking accessibility for ${stories[storyId].title}...`)

    testedStory = stories[storyId].title

    try {
      await driver.get(`http://localhost:6006/iframe.html?viewMode=story&id=${storyId}`)

      const results = await new AxeBuilder(driver)
        .options({
          resultTypes: ['violations', 'incomplete'],
          rules: {
            'page-has-heading-one': { enabled: false },
            'landmark-one-main': { enabled: false },
            region: { enabled: false },
            'color-contrast': { enabled: false },
          },
          runOnly: ['best-practice', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
          reporter: 'v2',
        })
        .exclude('.docblock-argstable')
        .analyze()

      const duplicate = report[testedStory]
      const { [testedStory]: _, ...rest } = report

      const { timestamp, url, incomplete, violations } = results

      report = {
        ...rest,
        [testedStory]: {
          timestamp,
          ...(duplicate ? { url: [...duplicate.url, url] } : { url: [url] }),
          ...(duplicate
            ? { incomplete: mergeResultArrays(incomplete, duplicate.incomplete) }
            : { incomplete: mergeResultArrays(incomplete) }),
          ...(duplicate
            ? { violations: mergeResultArrays(violations, duplicate.violations) }
            : { violations: mergeResultArrays(violations) }),
        },
      }
    } catch (e) {
      console.error(chalk.bold.red(e.message))
      return
    }
  }

  /**
   * Export results as JSON file to Storybook static directory
   */
  writeFileSync(`./public/a11y-report.json`, JSON.stringify(report, null, 2), 'utf8')

  /**
   * Log violations & incompletes for each component tested
   */
  Object.keys(report).forEach(componentName => {
    if (!report[componentName].violations.length && !report[componentName].incomplete.length) return

    console.log(chalk.bold.red(`[${componentName}]:`))

    const { violations, incomplete } = report[componentName]
    const issues = [...violations, ...incomplete]

    issues.forEach(issue => {
      console.log(
        impactColor[issue.impact](
          `- [${issue.id}]: ${issue.help} [${issue.impact}] (${issue.nodes[0].target.length})`
        )
      )
    })
  })

  /**
   * Exit and fail if any critical issue is found
   */
  const criticalIssues = Object.keys(report).reduce((sum, componentName) => {
    const { violations, incomplete } = report[componentName]
    const issues = [...violations, ...incomplete].filter(issue => issue.impact === 'critical')

    return sum + issues.reduce((acc, curr) => acc + curr.nodes[0].target.length, 0)
  }, 0)

  if (criticalIssues > 0) {
    console.error()
    console.error(chalk.bold.red(`💥 Exiting with ${criticalIssues} critical issue(s)`))
    process.exit(1)
  } else {
    console.log()
    console.log(chalk.bold.green('🎉 No critical accessibility issue has been found'))
  }

  await driver.quit()
}

checkA11y()
