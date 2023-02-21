#!/usr/bin/env node

import { spawn } from 'child_process'
import { join, extname } from 'node:path'
import { readFileSync, readdirSync, writeFileSync, unlinkSync } from 'node:fs'
import { transformSync } from 'esbuild'
import { log, showError } from '../utils.js'
import { createRequire } from 'node:module'

import { createTailwindThemeConfigFile, createCSSTokensFile } from '@spark-ui/theme-utils-node'

const require = createRequire(import.meta.url)
const configFile = readdirSync(process.cwd()).find(fileName =>
  /^(spark\.theme\.config)\.(js|ts|mjs|mts|cjs|cts)$/.test(fileName)
)

if (!configFile) {
  system.exit(
    "We couldn't find a `spark.theme.config` file in this folder. Please make sure that the file is located in the root folder of your project"
  )
}

const configFilePath = join(process.cwd(), configFile)
const configFileIsInJS = configFile === 'spark.theme.config.js'

const allowedExtensions = ['.ts', '.mts', '.cts', '.js', '.cjs', '.mjs']
const jsFileExtension = '.js'
const configFileExtension = extname(configFilePath)
if (!allowedExtensions.includes(configFileExtension)) {
  showError(`Your spark.theme.config file extension (${configFileExtension}) is not supported.`)
}

const configFileContent = readFileSync(configFilePath, 'utf-8')
const jsCode = transformSync(configFileContent, { loader: 'ts' }).code

const jsFilePath = configFilePath.replace(/\.ts$|\.mts$|\.cts$|\.mjs|\.cjs$/, jsFileExtension)
const jsFileContents = jsCode

if (!configFileIsInJS) writeFileSync(jsFilePath, jsFileContents)

import(jsFilePath)
  .then(module => {
    const { tailwindThemeConfigFilePath, CSSTokens } = module.default

    createTailwindThemeConfigFile(tailwindThemeConfigFilePath)
    createCSSTokensFile(CSSTokens.filePath, CSSTokens.themes)

    const child = spawn(process.execPath, [jsFilePath], {
      stdio: 'inherit',
    })

    child.on('exit', code => {
      if (!configFileIsInJS) unlinkSync(jsFilePath)
      log.success(
        `✨ Your Spark Tailwind theme config file has been successfully created: ${join(
          process.cwd(),
          tailwindThemeConfigFilePath
        )}`
      )

      log.success(
        `✨ Your Spark Tailwind CSS Tokens file file has been successfully created: ${join(
          process.cwd(),
          CSSTokens.filePath
        )}`
      )

      process.exit(code)
    })
  })
  .catch(err => {
    unlinkSync(jsFilePath)
    showError(`
    Something went wrong while running ${configFilePath}: ${err}`)
  })
