#!/usr/bin/env node

import { register } from 'ts-node'
import { join } from 'path'

register({
  esm: true,
  experimentalSpecifierResolution: 'node',
})

// const tsFilePath = process.cwd() + '/spark.conf.ts'

import * as ok from '/Users/alexandre.cadiot/Projects/personal/spark/spark.conf.ts'

// const tsFilePath = `${process.cwd()}/spark.conf.ts`

// // Import the TypeScript file dynamically
// import(tsFilePath).then(tsFile => {
//   // Call a function or use a variable from the TypeScript file
//   tsFile.myFunction()
// })
