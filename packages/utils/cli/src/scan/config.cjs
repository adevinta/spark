module.exports = {
  adoption: {
    details: false,
    sort: 'count',
    imports: ['@spark-ui'],
    extensions: ['.tsx', '.ts'],
    directory: '.',
    output: null,
  },
}

/***
- `details` (boolean) - whether to show the details of the adoption or not. Default: false
- `sort` ('count' | 'alphabetical') - packages are sorted alphabetically. Default: false means sorted by adoption number
- `imports` (array) - the imports to be scanned.
- `extensions` (array) - the extensions to be scanned
- `directory` (string) - the directory to be scanned. Default: '.' means the current directory
- `output` (string) - the output file path to export into
***/
