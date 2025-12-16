import '@radix-ui/themes/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import AppErrorBoundary from './components/fallback/AppErrorBoundary'

const rootElement = document.getElementById('root')!
createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
)
