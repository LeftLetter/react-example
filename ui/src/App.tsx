import { mount, route } from 'navi'
import React from 'react'
import { Router, View } from 'react-navi'
import { FormPage } from './components/pages/FormPage'
import { TopPage } from './components/pages/TopPage'

const routes = mount({
  '/': route({
    view: <TopPage />,
  }),
  '/form': route({
    view: <FormPage />,
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
