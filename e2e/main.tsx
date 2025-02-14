import '../src/tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { a11yRoutes } from './a11y/routes'
import { CarouselImplementation } from './carousel'
import { ComboboxWithinDialog } from './combobox-within-dialog'
import { DropdownWithAdjacentButtons } from './dropdown-with-adjacent-buttons'
import { DropdownWithinDialog } from './dropdown-within-dialog'
import { DialogForm, DrawerForm } from './form'

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
    path: 'spark-form-within-dialog',
    element: <DialogForm />,
  },
  {
    path: 'spark-form-within-drawer',
    element: <DrawerForm />,
  },
  {
    path: 'carousel',
    element: <CarouselImplementation />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
