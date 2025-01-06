export default ({ name, description }) => {
  const meta = name.replace('use-', '')

  return `{
  "name": "@spark-ui/${name}",
  "version": "1.0.0",
  "description": "${description}",
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "@spark-ui",
    "react",
    "hook",
    "${meta}"
  ],
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "vite build"
  },
  "peerDependencies": {
    "react": "^19.0",
    "react-dom": "^16.8 || ^17.0 || ^18.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/adevinta/spark.git",
    "directory": "packages/hooks/${name}"
  },
  "config": {
    "title": "${name}",
    "category": "hooks"
  },
  "bugs": {
    "url": "https://github.com/adevinta/spark/issues?q=is%3Aopen+label%3Ahook+label%3A${name}"
  },
  "homepage": "https://sparkui.vercel.app",
  "license": "MIT"
}
`
}
