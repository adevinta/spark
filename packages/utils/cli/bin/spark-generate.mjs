import { fileURLToPath } from 'node:url'
import { program } from 'commander'
import glob from 'glob'
import { pascalCase } from 'pascal-case'
import { log, showError, writeFile } from '../utils.js'

const BASE_DIR = process.cwd()
const WORDS_ONLY_REGEX = /^[A-Za-z-]*$/

program
  .option('-D, --description <description>', 'Description of this component')
  .on('--help', () => {
    console.log('Examples:')
    console.log('  $ spark generate button')
    console.log('  $ spark generate button -D "My button description"')
    console.log('  $ spark generate button --description "My button description"')
    console.log('  $ spark generate --help')
  })
  .parse(process.argv)

const [component] = program.args
const { description = '' } = program.opts()

if (!component) {
  showError('Argument "component" must be defined!')
}
if (!WORDS_ONLY_REGEX.test(component)) {
  showError('"component" name must contain letters and dash symbols only')
}

const componentDir = `/packages/components/${component}/`
const componentPath = `${BASE_DIR}${componentDir}`
const templatesPattern = fileURLToPath(new URL('../templates/**/*.js', import.meta.url))

glob(templatesPattern, async (err, res) => {
  if (err) showError(err)
  if (res) {
    const templateContents = res.map(templatePath =>
      import(templatePath).then(module => ({
        path: templatePath
          .replace(/(.*)\/templates\//, componentPath)
          .replace('Component', pascalCase(component))
          .replaceAll(/\[|\]|\.js$/g, ''),
        content: module.default({ component, description }),
      }))
    )

    const filesToWrite = await Promise.all(templateContents)

    Promise.all(filesToWrite.map(writeFile)).then(() => {
      log('All component files has been properly written!')
    })
  }
})
