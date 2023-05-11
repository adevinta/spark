import '@testing-library/jest-dom'

import { vitest } from 'vitest'

global.ResizeObserver = vitest.fn().mockImplementation(() => ({
  observe: vitest.fn(),
  unobserve: vitest.fn(),
  disconnect: vitest.fn(),
}))
