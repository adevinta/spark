import React from 'react'
import type { RouteObject } from 'react-router-dom'

import { A11yButton } from './pages/Button'
import { A11yDialog } from './pages/Dialog'

export const a11yRoutes: RouteObject[] = [
  {
    path: 'a11y/dialog',
    element: <A11yDialog />,
  },
  {
    path: 'a11y/button',
    element: <A11yButton />,
  },
]
