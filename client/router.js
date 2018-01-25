import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { observable, reaction } from "mobx"
import AppRoot from './components/root'
import Home from './components/home'
import List from './components/list'
import About from './components/about'
import { Provider } from "mobx-react"
import store from './store'

const history = {
  snapshots: observable.shallowArray(),
  actions: observable.shallowArray(),
  patches: observable.shallowArray()
}

class AppRouter extends Component {
  render () {
    return (
      <Provider store={store} history={history}>
        <div>
          <Route path="/" component={AppRoot}/>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/about" component={About} />
        </div>
      </Provider>
    )
  }
}

export default AppRouter
