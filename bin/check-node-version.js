#!/usr/bin/env node

import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const expectedVersion = `v${readFileSync('.nvmrc').toString().trim()}`
const currentVersion = execSync('node -v').toString().trim()

if (currentVersion !== expectedVersion) {
  console.error(`Error: expected Node.js version ${expectedVersion}, but got ${currentVersion}`)
  process.exit(1)
}
