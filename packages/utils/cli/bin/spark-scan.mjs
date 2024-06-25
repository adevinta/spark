#! /usr/bin/env node

import { Command } from 'commander'
import { adoption, config } from '../src/scan/index.mjs'

const program = new Command()

program
  .command('adoption')
  .description('Scan @spark-ui adoption for .tsx files with given imports')
  .option('-c, --configuration <config>', 'configuration file route')
  .option('-o, --output <output>', 'output file route')
  .option('-v, --verbose', 'output log information', false)
  .option('-d, --details', 'output information about each match', config.adoption.details)
  .option('-s, --sort <sort>', 'sort results (count or alphabetical)', config.adoption.sort)
  .option('-dir, --directory <directory>', 'directory to parse', config.adoption.directory)
  .option(
    '-ext, --extensions <extensions...>',
    'file extensions to parse',
    config.adoption.extensions
  )
  .option('-i, --imports <imports...>', 'import patterns to identify', config.adoption.imports)
  .action(adoption)

program.parse(process.argv)
