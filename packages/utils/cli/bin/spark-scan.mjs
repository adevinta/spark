#! /usr/bin/env node

import { Command } from 'commander'
import { scan } from '../src/scan/index.mjs'

const program = new Command()

program
  .command('adoption')
  .description('Scan @spark-ui adoption for .tsx files with given imports')
  .option('-c, --configuration <path>', 'configuration file route', '.spark-ui.cjs')
  .option('-o, --output <path>', 'output file route')
  .action(scan)

program.parse(process.argv)
