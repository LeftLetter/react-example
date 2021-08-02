import { mount, route } from 'navi'
import React from 'react'
import { Router, View } from 'react-navi'
import { TopPage } from './components/pages/TopPage'
import { CardContextProvider } from './contexts/cardContext'

const routes = mount({
  '/': route({
    view: <TopPage />,
  }),
})

const App: React.VFC = () => {
  return (
    <CardContextProvider>
      <Router routes={routes}>
        <View />
      </Router>
    </CardContextProvider>
  )
}

export default App
