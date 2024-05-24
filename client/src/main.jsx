import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, {action as rootAction} from './routes/root'
import './index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  action: rootAction
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
