#!/usr/bin/env node

import chalk from 'chalk'
import fse from 'fs-extra'
import * as prompt from '@clack/prompts'
import { fileURLToPath } from 'node:url'
import glob from 'glob'
import { pascalCase } from 'pascal-case'
import { log, showError, writeFile } from '../utils.js'

const BASE_DIR = process.cwd()
const rawRootPackageJSON = fse.readFileSync(`${BASE_DIR}/package.json`)
let rootPackageJSON = JSON.parse(rawRootPackageJSON)

const TEMPLATE_TYPE = {
  COMPONENT: 'component',
  HOOK: 'hook',
}

const WORKSPACES = {
  [TEMPLATE_TYPE.COMPONENT]: '/packages/components',
  [TEMPLATE_TYPE.HOOK]: '/packages/hooks',
}

const ERRORS = {
  ABORT: 'Aborted package generation',
  NO_PKG_NAME: 'Package name must me defined',
  INVALID_PKG_NAME: 'Name name must contain letters and dash symbols only (ex: "my-package")',
  INVALID_DESCRIPTION: 'Description is too short (minimum is 10 chars)',
  PKG_ALREADY_EXISTS:
    'A package with that name already exists. Either delete it manually or use another name.',
}

const packageUtils = {
  /** Validate the format of the package name (kebab case format) */
  hasValidName: name => /^[a-z-]*$/.test(name),
  /** Check that a package of the same name does not exists across all workspaces */
  alreadyExists: name => {
    return rootPackageJSON.workspaces.some(workspace => {
      const existingPackages = glob.sync(`${BASE_DIR}/${workspace}/`)
      return existingPackages.some(path => path.endsWith(`/${name}/`))
    })
  },
  /** Retrieves the target folder of the generated package */
  getDirectory: (name, template) => `${WORKSPACES[template]}/${name}/`,
  /** Retrieves the full path to the folder of the generated package */
  getFullPath: (name, template) => `${BASE_DIR}${packageUtils.getDirectory(name, template)}`,
}

async function promptPackageName() {
  const name = await prompt.text({
    message: 'Package name (must contain letters and dash symbols only):',
    initialValue: '',
    validate(value) {
      if (value == null) return ERRORS.NO_PKG_NAME
      if (!packageUtils.hasValidName(value)) return ERRORS.INVALID_PKG_NAME
      if (packageUtils.alreadyExists(value)) return ERRORS.PKG_ALREADY_EXISTS
    },
  })

  if (prompt.isCancel(name)) showError(ERRORS.ABORT)

  return name
}

async function promptPackageTemplate() {
  const template = await prompt.select({
    message: 'Chose a template:',
    initialValue: TEMPLATE_TYPE.COMPONENT,
    options: [
      {
        value: TEMPLATE_TYPE.COMPONENT,
        label: 'Component',
        hint: 'Typescript dummy component with some tests, stories and config files',
      },
      {
        value: TEMPLATE_TYPE.HOOK,
        label: 'Hook',
        hint: 'Typescript hook with some tests, stories and config files',
      },
    ],
  })

  if (prompt.isCancel(template)) showError(ERRORS.ABORT)

  return template
}

async function promptPackageDescription() {
  const description = await prompt.text({
    message: 'Describe your package (short description):',
    initialValue: '',
    validate(value) {
      if (!value) return `You package must have a description`
      if (value.length < 10) return ERRORS.INVALID_DESCRIPTION
    },
  })

  if (prompt.isCancel(description)) showError(ERRORS.ABORT)

  return description
}

/**
 * Program starts here
 */
prompt.intro(`Generate Spark package`)

const name = await promptPackageName()
const template = await promptPackageTemplate()
const description = await promptPackageDescription()

const packagePath = packageUtils.getFullPath(name, template)

switch (template) {
  case TEMPLATE_TYPE.COMPONENT:
    generateComponentPackage(name, description)
    break
  case TEMPLATE_TYPE.HOOK:
    generateHookPackage(name, description)
    break
}

prompt.outro(`Generating package...`)

function generateComponentPackage(name, description) {
  const templatesPattern = fileURLToPath(new URL('../templates/**/*.js', import.meta.url))

  glob(templatesPattern, async (err, res) => {
    if (err) showError(err)
    if (res) {
      const templateContents = res.map(templatePath =>
        import(templatePath).then(module => ({
          path: templatePath
            .replace(/(.*)\/templates\//, packagePath)
            .replace('Component', pascalCase(name))
            .replaceAll(/\[|\]|\.js$/g, ''),
          content: module.default({
            component: name,
            description: description,
          }),
        }))
      )

      const filesToWrite = await Promise.all(templateContents)

      Promise.all(filesToWrite.map(writeFile)).then(() => {
        log.success('All package files has been properly written!')
      })
    }
  })
}

function generateHookPackage(name, description) {
  showError('Todo: template for hook packages is not ready yet.')
}
