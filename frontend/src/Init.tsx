import '@radix-ui/themes/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Routes from './Routes'
import AppErrorBoundary from './components/fallback/AppErrorBoundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

var queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 4,
      gcTime: 1000 * 60 * 7,
      retry: 1
    }
  }
})

const rootElement = document.getElementById('root')!
createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient} >
        <Routes />
      </QueryClientProvider>
    </AppErrorBoundary>
  </React.StrictMode>
)
