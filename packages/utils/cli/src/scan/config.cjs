module.exports = {
  adoption: {
    /**
     * Shows (or not) details about each package adoption
     * @param {boolean}
     * @default false
     */
    details: false,
    /**
     * Sorts packages list, based on count or alphabetical order
     * @param {'count'|'alphabetical'}
     * @default 'count'
     */
    sort: 'count',
    /**
     * Packages pattern to be scanned
     * @params {string[]}
     */
    imports: ['@spark-ui'],
    /**
     * File extensions to be scanned
     * @params {string[]}
     */
    extensions: ['.tsx', '.ts'],
    /**
     * Directory to be scanned
     * @param {string}
     * @default '.''
     */
    directory: '.',
    /**
     * Output file path to export the results
     * @param {string}
     */
    output: null,
  },
}
