import React from 'react'
import ReactDOM from 'react-dom/client'

import './reset.css'
import { Login } from './login'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
