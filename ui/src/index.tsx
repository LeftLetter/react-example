import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.scss'
;(async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser.js')
    worker.start()
  }
})()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
