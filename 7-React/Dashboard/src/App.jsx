import React from 'react'
import Router from './Router'
import { ThemeProvider } from './components/ui/theme-provider'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme='light' storageKey='vit-ui-theme' >
        <Router />
        <Toaster />
      </ThemeProvider>
    </>
  )
}

export default App
