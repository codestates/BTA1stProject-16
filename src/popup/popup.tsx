import React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './popup.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Sign from './pages/Sign'
import Transaction from './pages/Transaction'


const App: React.FC<{}> = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sign />
      <Transaction />
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(
    <App />
)
