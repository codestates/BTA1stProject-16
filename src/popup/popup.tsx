import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'
import Home from './Home'

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>hello</h1>
      {/* <img src="icon.png" /> */}
      {/* <Home /> */}
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
