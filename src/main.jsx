import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MobileNavProvider } from './components/MobileNav'
import { OrderModalProvider } from './components/OrderModal'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MobileNavProvider>
        <OrderModalProvider>
          <App />
        </OrderModalProvider>
      </MobileNavProvider>
    </BrowserRouter>
  </React.StrictMode>
)
