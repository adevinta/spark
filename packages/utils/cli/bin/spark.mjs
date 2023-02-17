#!/usr/bin/env node

import { program } from 'commander'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { version } = require('../package.json')

program.version(version, '--version')

program.command('generate <component>', 'Generate a component scaffolding').alias('g')
program.command('setup-theme', 'Set up Spark theming configuration')

program.parse(process.argv)
