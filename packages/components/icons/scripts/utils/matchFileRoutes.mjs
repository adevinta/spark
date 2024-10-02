import fs from 'fs'
import minimatch from 'minimatch'
import path from 'path'

const matchFileRoutes = (base = process.cwd(), minimatchPattern, accomulator) => {
  const files = fs.readdirSync(base)
  let result = accomulator || []

  files.forEach(function (file) {
    const newBase = path.join(base, file)
    if (fs.statSync(newBase).isDirectory()) {
      result = matchFileRoutes(newBase, minimatchPattern, result)
    } else if (minimatch(newBase.replace(`${process.cwd()}/`, ''), minimatchPattern)) {
      result.push(newBase)
    }
  })

  return result
}

export default matchFileRoutes
