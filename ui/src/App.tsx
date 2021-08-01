import { mount, route } from 'navi'
import React from 'react'
import { Router, View } from 'react-navi'
import { TopPage } from './components/pages/TopPage'

const routes = mount({
  '/': route({
    view: <TopPage />,
  }),
})

const App: React.VFC = () => {
  return (
    <Router routes={routes}>
      <View />
    </Router>
  )
}

export default App
