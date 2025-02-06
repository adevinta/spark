export default ({ name, description }) => `{
  "name": "@spark-ui/${name}",
  "version": "0.0.0",
  "description": "${description}",
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "@spark-ui",
    "react",
    "component",
    "accessible",
    "accessibility",
    "wai-aria",
    "aria",
    "a11y",
    "${name}"
  ],
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "vite build"
  },
  "peerDependencies": {
    "@spark-ui/theme-utils": "latest",
    "react": "^19.0",
    "react-dom": "^19.0",
    "tailwindcss": "^4.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/adevinta/spark.git",
    "directory": "packages/components/${name}"
  },
  "config": {
    "title": "${name}",
    "category": "components"
  },
  "bugs": {
    "url": "https://github.com/adevinta/spark/issues?q=is%3Aopen+label%3A%22Component%3A+${name}%22"
  },
  "homepage": "https://sparkui.vercel.app",
  "license": "MIT"
}
`
