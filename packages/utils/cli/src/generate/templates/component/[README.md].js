export default ({ name }) => `# ${name
  .split('-')
  .map(str => str.charAt(0).toUpperCase() + str.slice(1))
  .join(' ')}
> @spark-ui/${name}

[![storybook](https://img.shields.io/badge/storybook-black?logo=storybook)](https://sparkui.vercel.app/?path=/docs/components-${name
  .split('-')
  .join('')}--docs)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/adevinta/spark/issues/new?&projects=4&template=bug-report.yml&assignees=&labels=Component,Component%3A%20${name})
[![npm](https://img.shields.io/npm/dt/%40spark-ui/${name}?logo=npm&labelColor=black)](https://www.npmjs.com/package/@spark-ui/${name})


This package is part of the [\`@spark-ui\`](https://github.com/adevinta/spark) react-js user interface component library project.

[![Issues open](https://img.shields.io/github/issues-search/adevinta/spark?query=is%3Aopen%20label%3A%22Component%3A%20${name}%22&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/adevinta/spark/issues?q=is%3Aopen+label%3AComponent%3A%20${name})
[![NPM](https://img.shields.io/npm/l/%40spark-ui%2F${name})](https://github.com/adevinta/spark/blob/main/packages/components/${name}/LICENSE.md)
`
