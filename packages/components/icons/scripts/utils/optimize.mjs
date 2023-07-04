import { optimize as optimizeSVGO } from 'svgo'

const optimize = (svgString, { attributes = [], title, isCountryFlag = false } = {}) => {
  return optimizeSVGO(svgString, {
    multipass: true, // boolean. false by default
    js2svg: {
      indent: 2, // string with spaces or number of spaces. 4 by default
      pretty: true, // boolean, false by default
    },
    plugins: [
      // Exclude removeAttrs plugin for country flags
      ...(isCountryFlag
        ? []
        : [
            {
              name: 'removeAttrs',
              params: {
                attrs: '(fill|stroke|stroke-width)',
              },
            },
          ]),
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [title && { 'data-title': title }, ...attributes].filter(Boolean),
        },
      },
      'removeDimensions',
      'mergePaths',
    ],
  }).data
}

export default optimize
