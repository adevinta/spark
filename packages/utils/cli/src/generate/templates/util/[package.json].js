export default ({ name, description }) => `{
  "name": "@spark-ui/${name}",
  "version": "1.0.0",
  "description": "${description}",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "vite build"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:adevinta/spark.git",
    "directory": "packages/utils/${name}"
  },
  "bugs": {
    "url": "https://github.com/adevinta/spark/issues"
  },
  "homepage": "https://sparkui.vercel.app",
  "license": "MIT"
}
`
