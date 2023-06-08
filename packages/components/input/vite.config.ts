import path from 'path'
import { getComponentConfiguration } from '../../../config/index'

const { name } = require(path.resolve(__dirname, 'package.json'))

export default getComponentConfiguration(process.cwd(), name)
