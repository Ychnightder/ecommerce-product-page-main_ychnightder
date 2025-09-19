import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('app') || document.getElementById('root')
if (!container) {
  throw new Error('Element with id "app" or "root" not found in index.html. Vérifie la présence de <div id="app"></div> ou <div id="root"></div> et que le script charge /src/main.tsx')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
