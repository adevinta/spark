export default ({ name }) => `# ${name}
> @spark-ui/${name}

![storybook](https://img.shields.io/badge/storybook-black?logo=storybook&link=https%3A%2F%2Fsparkui.vercel.app%2F%3Fpath%3D%2Fdocs%2Fcomponents-${name
  .split('-')
  .join('')}--docs)
![documentation](https://img.shields.io/badge/documentation-black?logo=googledocs&link=https%3A%2F%2Fsparkui-adv.vercel.app%2Fdocs%2Fcomponent%2F${name})
![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red&link=https%3A%2F%2Fgithub.com%2Fadevinta%2Fspark%2Fissues%2Fnew%3F%26projects%3D4%26template%3Dbug-report.yml%26assignees%3D%26labels%3Dcomponent%2C${name})
![npm](https://img.shields.io/npm/dt/%40spark-ui/${name}?logo=npm&labelColor=black&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40spark-ui%2F${name})


This package is part of the [\`@spark-ui\`](https://github.com/adevinta/spark) react-js user interface component library project.

![Issues open](https://img.shields.io/github/issues-search/adevinta/spark?query=is%3Aopen%20label%3Acomponent%20label%3A${name}&logo=openbugbounty&logoColor=red&label=issues%20open&color=red&link=https%3A%2F%2Fgithub.com%2Fadevinta%2Fspark%2Fissues%3Fq%3Dis%253Aopen%2Blabel%253Acomponent%2Blabel%253A${name})
![NPM](https://img.shields.io/npm/l/%40spark-ui%2F${name})
`
