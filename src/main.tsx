import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { FancyApp } from './fancy/FancyApp'
import './index.css'

// Temporary comparison: /fancy renders the fancy variant, / renders the clean one.
// Once a winner is chosen, the loser is deleted and the winner moves to /.
const isFancy = window.location.pathname.replace(/\/+$/, '').endsWith('/fancy')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isFancy ? <FancyApp /> : <App />}
  </React.StrictMode>,
)
