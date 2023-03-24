import { optimize as optimizeSVGO } from 'svgo'

const optimize = (svgString, { attributes = [] } = {}) => {
  return optimizeSVGO(svgString, {
    multipass: true, // boolean. false by default
    js2svg: {
      indent: 2, // string with spaces or number of spaces. 4 by default
      pretty: true, // boolean, false by default
    },
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: '(fill|stroke)',
        },
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes,
        },
      },
      'removeDimensions',
      'mergePaths',
    ],
  }).data
}

export default optimize
