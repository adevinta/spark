#!/usr/bin/env node

import { spawn } from 'child_process'
import { join, extname, parse, sep } from 'path'
import { readFileSync, readdirSync, writeFileSync, unlinkSync } from 'fs'
import { transformSync } from 'esbuild'

import { log, showError } from '../utils.js'

const jsFileExtension = '.js'

const configFile = readdirSync(process.cwd()).find(fileName =>
  /^(spark\.theme\.config)\.(js|ts|mjs|mts|cjs|cts)$/.test(fileName)
)

if (!configFile) {
  showError(
    "We couldn't find a `spark.theme.config` file in this folder. Please make sure that the file is located in the root folder of your project"
  )
}

const configFileIsInJS = configFile === 'spark.theme.config.js'
const filePath = join(process.cwd(), configFile)

const allowedExtensions = ['.ts', '.mts', '.cts', '.js', '.cjs', '.mjs']
const fileExtension = extname(filePath)
if (!allowedExtensions.includes(fileExtension)) {
  showError(`Your spark.theme.config file extension (${fileExtension}) is not supported.`)
}

const tsCode = readFileSync(filePath, 'utf-8')
const jsCode = transformSync(tsCode, { loader: 'ts' }).code

const jsFilePath = filePath.replace(/\.ts$|\.mts$|\.cts$|\.mjs|\.cjs$/, jsFileExtension)
const jsFileContents = Buffer.from(jsCode, 'utf-8')

if (!configFileIsInJS) writeFileSync(jsFilePath, jsFileContents)

const child = spawn(process.execPath, [jsFilePath], {
  stdio: 'inherit',
})

child.on('exit', code => {
  if (!configFileIsInJS) unlinkSync(jsFilePath)
  log.success('✨ Your Spark theme config files have been successfully created!')
  process.exit(code)
})
