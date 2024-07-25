import '../src/tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ComboboxWithinDialog } from './combobox-within-dialog'
import { DropdownWithinDialog } from './dropdown-within-dialog'
import { DropdownWithAdjacentButtons } from './dropdown-with-adjacent-buttons'

const router = createBrowserRouter([
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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
