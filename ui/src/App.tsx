import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormPage } from './components/pages/FormPage'
import { GraphPage } from './components/pages/GraphPage'
import { TopPage } from './components/pages/TopPage'
import { GlobalContextProvider } from './contexts/globalContext'

const App: React.VFC = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="graph" element={<GraphPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
