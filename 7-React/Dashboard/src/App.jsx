import React from 'react'
import Router from './Router'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-them'>
      <Router />
      <Toaster />
    </ThemeProvider>
  )
}

export default App
