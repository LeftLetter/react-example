import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/index.scss'

// MSWの実行
const prepare = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser')
    worker.start()
  }
  return
}

// MSWが実行されてからレンダリングする
prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
})
