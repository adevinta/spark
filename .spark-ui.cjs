module.exports = {
  adoption: {
    verbose: true,
    details: false,
    sort: 'count',
    imports: ['@spark-ui', 'downshift'],
    extensions: ['.tsx', '.ts'],
    directory: './packages',
    output: `.spark-ui/adoption/adoption.${new Date().toISOString()}`,
  },
}