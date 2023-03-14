import concat from 'concat-stream'
import spawn from 'cross-spawn'
import { existsSync } from 'fs'
import { constants } from 'os'

const PATH = process.env.PATH

/**
 * Creates a child process with script path
 * @param processPath Path of the process to execute
 * @param args Arguments to the command
 * @param env (optional) Environment variables
 */
function createProcess(processPath: string, args: string[] = [], env: object | null = null) {
  // Ensure that path exists
  if (!processPath || !existsSync(processPath)) {
    throw new Error('Invalid process path')
  }

  args = [processPath].concat(args)

  // This works for node based CLIs, but can easily be adjusted to
  // any other process installed in the system
  return spawn('node', args, {
    env: Object.assign(
      {
        NODE_ENV: 'test',
        preventAutoStart: false,
        PATH, // This is needed in order to get all the binaries in your current terminal
      },
      env
    ),
    stdio: [null, null, null, 'ipc'], // This enables interprocess communication (IPC)
  })
}

/**
 * Creates a command and executes inputs (user responses) to the stdin
 * Returns a promise that resolves when all inputs are sent
 * Rejects the promise if any error
 * @param processPath Path of the process to execute
 * @param args Arguments to the command
 * @param inputs (Optional) Array of inputs (user responses)
 * @param opts (optional) Environment variables
 */
function executeWithInput(
  processPath: string,
  args: string[] = [],
  inputs: string[] = [],
  opts: object = {}
) {
  if (!Array.isArray(inputs)) {
    opts = inputs
    inputs = []
  }

  const { env = null, timeout = 100, maxTimeout = 10000 } = opts
  const childProcess = createProcess(processPath, args, env)
  childProcess.stdin.setEncoding('utf-8')

  let currentInputTimeout, killIOTimeout

  // Creates a loop to feed user inputs to the child process in order to get results from the tool
  // This code is heavily inspired (if not blantantly copied) from inquirer-test:
  // https://github.com/ewnd9/inquirer-test/blob/6e2c40bbd39a061d3e52a8b1ee52cdac88f8d7f7/index.js#L14
  const loop = ins => {
    if (killIOTimeout) {
      clearTimeout(killIOTimeout)
    }

    if (!ins.length) {
      childProcess.stdin.end()

      // Set a timeout to wait for CLI response. If CLI takes longer than
      // maxTimeout to respond, kill the childProcess and notify user
      killIOTimeout = setTimeout(() => {
        console.error('Error: Reached I/O timeout')
        childProcess.kill(constants.signals.SIGTERM)
      }, maxTimeout)

      return
    }

    currentInputTimeout = setTimeout(() => {
      childProcess.stdin.write(ins[0])
      // Log debug I/O statements on tests
      if (env && env.DEBUG) {
        console.log('input:', ins[0]) // eslint-disable-line no-console
      }
      loop(ins.slice(1))
    }, timeout)
  }

  const promise = new Promise((resolve, reject) => {
    // Get errors from CLI
    childProcess.stderr.on('data', data => {
      // Log debug I/O statements on tests
      if (env && env.DEBUG) {
        console.log('error:', data.toString()) // eslint-disable-line no-console
      }
    })

    // Get output from CLI
    childProcess.stdout.on('data', data => {
      // Log debug I/O statements on tests
      if (env && env.DEBUG) {
        console.log('output:', data.toString()) // eslint-disable-line no-console
      }
    })

    childProcess.stderr.once('data', err => {
      childProcess.stdin.end()

      if (currentInputTimeout) {
        clearTimeout(currentInputTimeout)
        inputs = []
      }
      reject(err.toString())
    })

    childProcess.on('error', reject)

    // Kick off the process
    loop(inputs)

    childProcess.stdout.pipe(
      concat(result => {
        if (killIOTimeout) {
          clearTimeout(killIOTimeout)
        }

        resolve(result.toString())
      })
    )
  })

  // Appending the process to the promise, in order to
  // add additional parameters or behavior (such as IPC communication)
  promise.attachedProcess = childProcess

  return promise
}

export default {
  create: processPath => {
    const fn = (...args) => executeWithInput(processPath, ...args)

    return {
      execute: fn,
    }
  },
}

export const DOWN = '\x1B\x5B\x42'
export const UP = '\x1B\x5B\x41'
export const ENTER = '\x0D'
export const SPACE = '\x20'
