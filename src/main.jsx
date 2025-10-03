import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PresentAll from './Lab1,2/PresentAll'
import Navigation from './Lab3/Navigation'
import AuthProvider from './Lab3/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Navigation />
      <PresentAll />
    </AuthProvider>
  </StrictMode>,
)
