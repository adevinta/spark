import '../src/tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { a11yRoutes } from './a11y/routes'
import { ComboboxWithinDialog } from './combobox-within-dialog'
import { DropdownWithAdjacentButtons } from './dropdown-with-adjacent-buttons'
import { DropdownWithinDialog } from './dropdown-within-dialog'
import { SparkForm } from './form'

const router = createBrowserRouter([
  ...a11yRoutes,
  {
    path: 'combobox-within-dialog',
    element: <ComboboxWithinDialog />,
  },
  {
    path: 'dropdown-within-dialog',
    element: <DropdownWithinDialog />,
  },
  {
    path: 'dropdown-with-adjacent-buttons',
    element: <DropdownWithAdjacentButtons />,
  },
  {
    path: 'spark-form-with-various-fields',
    element: <SparkForm />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
