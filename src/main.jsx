import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/routes'
import './index.css'
import { UsuariosProvider } from './infraestructure/context/UsuariosContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuariosProvider>
      <RouterProvider router={router} />
    </UsuariosProvider>
  </React.StrictMode>,
)
