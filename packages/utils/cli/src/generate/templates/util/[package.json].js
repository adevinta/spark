export default ({ name, description }) => `{
  "name": "@spark-ui/${name}",
  "version": "1.0.0",
  "description": "${description}",
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "@spark-ui",
    "util",
    "utility"
  ],
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "vite build"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/leboncoin/spark-web.git",
    "directory": "packages/utils/${name}"
  },
  "config": {
    "title": "${name}",
    "category": "utils"
  },
  "bugs": {
    "url": "https://github.com/leboncoin/spark-web/issues?q=is%3Aopen+label%3Autility+label%3A${name}"
  },
  "homepage": "https://sparkui.vercel.app",
  "license": "MIT"
}
`
