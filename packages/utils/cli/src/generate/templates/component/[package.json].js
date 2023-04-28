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
  "peerDependencies": {
    "react": "^16.8 || ^17.0 || ^18.0",
    "react-dom": "^16.8 || ^17.0 || ^18.0",
    "tailwindcss": "^3.0.0"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:adevinta/spark.git",
    "directory": "packages/components/${name}"
  },
  "bugs": {
    "url": "https://github.com/adevinta/spark/issues"
  },
  "homepage": "https://sparkui.vercel.app",
  "license": "MIT"
}
`
