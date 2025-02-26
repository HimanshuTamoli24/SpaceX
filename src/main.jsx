import React, { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { navRoutes } from './Components/Routes.js'
import { navNewRoutes } from './screens/index.js'

const routes = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: navRoutes.map((route) => ({
    path: route.path,
    element: React.createElement(route.component), // ✅ Correctly render components
  })),
}],
  { basename: "/Reacts/SpaceX" })
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
