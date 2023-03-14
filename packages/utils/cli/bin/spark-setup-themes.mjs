#!/usr/bin/env node

import { spawn } from 'child_process'
import { join, extname } from 'node:path'
import { readFileSync, readdirSync, writeFileSync, unlinkSync } from 'node:fs'
import { transformSync } from 'esbuild'
import { createRequire } from 'node:module'
import { Logger, System } from '../src/core/index.mjs'
import {
  createCSSTokensFile,
  createTailwindThemeConfigFile,
} from '../src/setup-themes/utils/index.js'

const logger = new Logger()
const system = new System({ logger })

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
const configFileIsMJS = /spark\.theme\.config\.(mjs)$/.test(configFile)

const allowedExtensions = ['.ts', '.mts', '.cts', '.js', '.cjs', '.mjs']
const jsFileExtension = '.mjs'
const configFileExtension = extname(configFilePath)
if (!allowedExtensions.includes(configFileExtension)) {
  system.exit(`Your spark.theme.config file extension (${configFileExtension}) is not supported.`)
}

const configFileContent = readFileSync(configFilePath, 'utf-8')
const jsCode = transformSync(configFileContent, { loader: 'ts' }).code

const jsFilePath = configFilePath.replace(/\.ts$|\.mts$|\.cts$|\.js|\.cjs$/, jsFileExtension)
const jsFileContents = jsCode

if (!configFileIsMJS) writeFileSync(jsFilePath, jsFileContents)

import(jsFilePath)
  .then(module => {
    const { tailwindThemeConfigPath, tailwindCSSPath, themes, htmlFontSize = 16 } = module.default

    createTailwindThemeConfigFile(tailwindThemeConfigPath)
    createCSSTokensFile(tailwindCSSPath, themes, htmlFontSize)

    const child = spawn(process.execPath, [jsFilePath], {
      stdio: 'inherit',
    })

    child.on('exit', code => {
      if (!configFileIsMJS) unlinkSync(jsFilePath)
      logger.success(
        `✨ Your Spark Tailwind theme config file has been successfully created: ${join(
          process.cwd(),
          tailwindThemeConfigPath
        )}`
      )

      logger.success(
        `✨ Your Spark Tailwind CSS Tokens file file has been successfully created: ${join(
          process.cwd(),
          tailwindCSSPath
        )}`
      )

      process.exit(code)
    })
  })
  .catch(err => {
    unlinkSync(jsFilePath)
    system.exit(`
    Something went wrong while running ${configFilePath}: ${err}`)
  })
