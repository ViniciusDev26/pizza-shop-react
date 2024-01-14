import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/ui/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
