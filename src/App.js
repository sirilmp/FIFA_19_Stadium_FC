import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Player from './pages/Player'

const App = () => {
  return (
    <Switch>
    <Route path='/' exact >
      <Home />
    </Route>
    <Route path='/player' >
      <Player />
    </Route>
  </Switch>
  )
}

export default App
